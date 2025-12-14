// src/app/api/generate-quote/route.ts
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { Document } from "@langchain/core/documents";

dotenv.config({ path: ".env.local" });

// --------------------------------------------------
// FAISS INDEX PATH
// --------------------------------------------------
const INDEX_PATH = path.join(process.cwd(), "faiss_index");

// --------------------------------------------------
// Mock embeddings class for fallback
// --------------------------------------------------
class MockEmbeddings {
  async embedQuery(_text: string): Promise<number[]> {
    return Array(1536).fill(Math.random());
  }

  async embedDocuments(_docs: string[]): Promise<number[][]> {
    return _docs.map(() => Array(1536).fill(Math.random()));
  }
}

// --------------------------------------------------
// Initialize FAISS retriever with automatic fallback
// --------------------------------------------------
let retriever: FaissStore | null = null;

async function initRetriever(): Promise<FaissStore | null> {
  if (!fs.existsSync(INDEX_PATH)) {
    console.warn("⚠️ FAISS index not found. RAG unavailable.");
    return null;
  }

  let embeddings: GoogleGenerativeAIEmbeddings | MockEmbeddings;

  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("⚠️ GOOGLE_GEMINI_API_KEY missing. Using mock embeddings.");
    embeddings = new MockEmbeddings();
  } else {
    embeddings = new GoogleGenerativeAIEmbeddings({ model: "models/embedding-001", apiKey });
    try {
      // Quick test to handle quota failures
      await embeddings.embedQuery("test");
    } catch (err) {
      console.warn("⚠️ Google Gemini embeddings failed, falling back to mock embeddings.", err);
      embeddings = new MockEmbeddings();
    }
  }

  try {
    retriever = await FaissStore.load(INDEX_PATH, embeddings as any);
    console.log("✅ FAISS retriever loaded successfully.");
  } catch (err) {
    console.error("❌ Failed to load FAISS retriever.", err);
    retriever = null;
  }

  return retriever;
}

// Initialize retriever on startup
initRetriever();

// --------------------------------------------------
// API Handler
// --------------------------------------------------
export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    // Ensure retriever is initialized
    if (!retriever) {
      await initRetriever();
    }

    // Ensure API key is present for LLM generation
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GOOGLE_GEMINI_API_KEY not configured" },
        { status: 500 }
      );
    }

    // Initialize Google Gemini LLM
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // --- RAG Retrieval ---
    let context = "";
    if (retriever) {
      try {
        const docs: Document[] = await retriever.similaritySearch(prompt, 3);
        context = docs.map((d) => d.pageContent).join("\n\n---\n\n");
        console.log(`Retrieved ${docs.length} documents for context.`);
      } catch (err) {
        console.warn("⚠️ FAISS retrieval failed, continuing without context.", err);
      }
    }

    // --- Construct prompt ---
    const systemPrompt = `
You are a professional business quotation generator.
Generate a detailed, professional business quotation based on the client's requirements.
Include:
- Header with company placeholder, date, and quote ID
- Clear project/service description
- Itemized pricing breakdown
- Subtotal, tax, total
- Payment terms, validity period, T&Cs, contact info
Use proper formatting and realistic pricing.
`;

    const finalPrompt = `
SYSTEM INSTRUCTIONS: ${systemPrompt}

${context ? `--- CONTEXT ---\n${context}\n--- END CONTEXT ---` : ""}

CLIENT REQUIREMENTS: ${prompt}
`;

    // --- Generate Quotation ---
    const result = await model.generateContent(finalPrompt);
    const quotation = result.response.text();

    return NextResponse.json({ quotation });
  } catch (error: any) {
    console.error("Error generating quotation:", error);
    return NextResponse.json(
      { error: "Failed to generate quotation", details: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}

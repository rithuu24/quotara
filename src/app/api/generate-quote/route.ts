// src/app/api/generate-quote/route.ts
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OllamaEmbeddings } from "@langchain/ollama";
import { Ollama } from "@langchain/ollama";
import { Document } from "@langchain/core/documents";

// --------------------------------------------------
// FAISS INDEX PATH
// --------------------------------------------------
const INDEX_PATH = path.join(process.cwd(), "faiss_index");

// --------------------------------------------------
// Globals (cached across requests)
// --------------------------------------------------
let vectorStore: FaissStore | null = null;

// --------------------------------------------------
// Initialize FAISS + Ollama Embeddings
// --------------------------------------------------
async function loadVectorStore(): Promise<FaissStore | null> {
  if (vectorStore) return vectorStore;

  if (!fs.existsSync(INDEX_PATH)) {
    console.warn("⚠️ FAISS index not found. RAG disabled.");
    return null;
  }

  try {
    const embeddings = new OllamaEmbeddings({
      model: "nomic-embed-text",
      baseUrl: "http://localhost:11434",
    });

    vectorStore = await FaissStore.load(INDEX_PATH, embeddings);
    console.log("✅ FAISS vector store loaded");
    return vectorStore;
  } catch (error) {
    console.error("❌ Failed to load FAISS index:", error);
    return null;
  }
}

// --------------------------------------------------
// POST Handler
// --------------------------------------------------
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt: string | undefined = body?.prompt;

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Load vector store
    const store = await loadVectorStore();

    // Initialize Ollama LLM
    const llm = new Ollama({
      model: "llama3.1",
      baseUrl: "http://localhost:11434",
      temperature: 0.3,
    });

    // --------------------------------------------------
    // RAG: Retrieve context
    // --------------------------------------------------
    let context = "";

    if (store) {
      try {
        const docs: Document[] = await store.similaritySearch(prompt, 3);
        context = docs.map(d => d.pageContent).join("\n\n---\n\n");
      } catch (err) {
        console.warn("⚠️ FAISS retrieval failed:", err);
      }
    }

    // --------------------------------------------------
    // Prompt construction
    // --------------------------------------------------
    const systemPrompt = `
You are a professional business quotation generator.

Rules:
- Use clear business language
- Provide itemized pricing
- Include subtotal, tax, and total
- Add payment terms and validity
- Format professionally
`;

    const finalPrompt = `
${systemPrompt}

${context ? `--- CONTEXT ---\n${context}\n--- END CONTEXT ---` : ""}

CLIENT REQUIREMENTS:
${prompt}
`;

    // --------------------------------------------------
    // Generate response
    // --------------------------------------------------
    const quotation = await llm.invoke(finalPrompt);

    return NextResponse.json({ quotation });
  } catch (error: any) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate quotation" },
      { status: 500 }
    );
  }
}

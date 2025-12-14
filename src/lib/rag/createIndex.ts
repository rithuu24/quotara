// src/lib/rag/createIndex.ts
import path from "path";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// ----------------------------
// FAISS INDEX PATH
// ----------------------------
const INDEX_PATH = path.join(process.cwd(), "faiss_index");
if (!fs.existsSync(INDEX_PATH)) fs.mkdirSync(INDEX_PATH, { recursive: true });
console.log("📁 FAISS index will be saved to:", INDEX_PATH);

// ----------------------------
// Knowledge base documents
// ----------------------------
const docs = [
  new Document({
    pageContent:
      "Our Quotyl Pro plan costs $200 per month and includes unlimited generations.",
    metadata: { source: "pricing" },
  }),
  new Document({
    pageContent:
      "To reset your password, click the 'Forgot Password' link on the login page.",
    metadata: { source: "faq" },
  }),
  new Document({
    pageContent:
      "Quotyl specializes in AI-driven SaaS solutions for quotation generation.",
    metadata: { source: "about" },
  }),
];

// ----------------------------
// Mock embeddings for fallback
// ----------------------------
class MockEmbeddings {
  async embedQuery(_text: string) {
    return Array(1536).fill(Math.random());
  }
  async embedDocuments(_docs: string[]) {
    return _docs.map(() => Array(1536).fill(Math.random()));
  }
}

// ----------------------------
// Build FAISS index
// ----------------------------
async function createIndex() {
  console.log("🔹 Splitting documents...");
  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 800, chunkOverlap: 100 });
  const splits = await splitter.splitDocuments(docs);

  // Use Google Gemini embeddings if API key available, else mock
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  let embeddings: any;

  if (apiKey) {
    try {
      embeddings = new GoogleGenerativeAIEmbeddings({ model: "models/embedding-001", apiKey });
      // Test embeddings call to catch quota issues
      await embeddings.embedQuery("test");
      console.log("🔹 Using Google Gemini embeddings...");
    } catch (err) {
      console.warn("⚠️ Google Gemini embeddings failed, using mock embeddings.", err);
      embeddings = new MockEmbeddings();
    }
  } else {
    console.warn("⚠️ GOOGLE_GEMINI_API_KEY not set. Using mock embeddings.");
    embeddings = new MockEmbeddings();
  }

  console.log("🔹 Creating FAISS index...");
  const vectorStore = await FaissStore.fromDocuments(splits, embeddings);

  console.log("🔹 Saving FAISS index...");
  await vectorStore.save(INDEX_PATH);

  console.log("✅ FAISS index saved successfully!");
  console.log("📄 Files written:", fs.readdirSync(INDEX_PATH));
}

// ----------------------------
// Run
// ----------------------------
createIndex().catch((err) => {
  console.error("❌ FAISS index creation failed:", err);
  process.exit(1);
});

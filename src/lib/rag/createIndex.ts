// src/lib/rag/createIndex.ts
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OllamaEmbeddings } from "@langchain/ollama";

dotenv.config({ path: ".env.local" });

// --------------------------------------------------
// FAISS INDEX PATH
// --------------------------------------------------
const INDEX_PATH = path.join(process.cwd(), "faiss_index");

if (!fs.existsSync(INDEX_PATH)) {
  fs.mkdirSync(INDEX_PATH, { recursive: true });
}

console.log("📁 FAISS index will be saved to:", INDEX_PATH);

// --------------------------------------------------
// Knowledge Base Documents
// --------------------------------------------------
const documents: Document[] = [
  new Document({
    pageContent:
      "Our Quotyl Pro plan costs $200 per month and includes unlimited quote generations.",
    metadata: { source: "pricing" },
  }),
  new Document({
    pageContent:
      "To reset your password, click the 'Forgot Password' link on the login page.",
    metadata: { source: "faq" },
  }),
  new Document({
    pageContent:
      "Quotyl specializes in AI-driven SaaS solutions for automated quotation generation.",
    metadata: { source: "about" },
  }),
];

// --------------------------------------------------
// Create FAISS Index using Ollama
// --------------------------------------------------
async function createIndex(): Promise<void> {
  console.log("🔹 Splitting documents...");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 100,
  });

  const splits = await splitter.splitDocuments(documents);

  console.log("🔹 Initializing Ollama embeddings...");

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
  });

  // Test embedding call
  await embeddings.embedQuery("health check");

  console.log("🔹 Creating FAISS index...");
  const vectorStore = await FaissStore.fromDocuments(splits, embeddings);

  console.log("🔹 Saving FAISS index...");
  await vectorStore.save(INDEX_PATH);

  console.log("✅ FAISS index created successfully!");
  console.log("📄 Files written:", fs.readdirSync(INDEX_PATH));
}

// --------------------------------------------------
// Run Script
// --------------------------------------------------
createIndex().catch((error) => {
  console.error("❌ FAISS index creation failed:", error);
  process.exit(1);
});

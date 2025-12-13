// src/lib/rag/createIndex.ts

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";

import * as dotenv from "dotenv";
const result = dotenv.config({ path: ".env.local" });

console.log("--- DEBUGGING .ENV LOADING ---");
if (result.error) {
  console.log("❌ Error loading .env.local file:", result.error);
} else {
  console.log("✅ File found. Parsed keys:");
  console.log(Object.keys(result.parsed || {}));
}
console.log("------------------------------");

// Check specifically for your key
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) {
    console.error("❌ CRITICAL: GOOGLE_GEMINI_API_KEY is still undefined.");
    process.exit(1);
}

// 1. Define your knowledge base data
const knowledgeBase = [
  new Document({ pageContent: "Our Quotyl Pro plan costs $200 per month and includes unlimited generations.", metadata: { source: "pricing" }}),
  new Document({ pageContent: "To reset your password, click the 'Forgot Password' link on the login page.", metadata: { source: "FAQ" }}),
  new Document({ pageContent: "Quotyl specializes in AI-driven SaaS solutions for quotation generation.", metadata: { source: "about" }}),
  new Document({ pageContent: "Contact support at support@quotara.com.", metadata: { source: "contact" }}),
];

// 2. Load and Split Documents
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

export async function createVectorStore() {
  console.log("Starting document processing...");
  
  const allSplits = await splitter.splitDocuments(knowledgeBase);
  
  // FIXED: Changed 'modelName' to 'model'
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "embedding-001", 
    apiKey: process.env.GOOGLE_API_KEY
  }); 
  
  console.log("Generating embeddings...");
  
  const vectorStore = await FaissStore.fromDocuments(
    allSplits,
    embeddings
  );
  
  await vectorStore.save("./faiss_index");
  console.log("✅ Success! Index saved to ./faiss_index");
  return vectorStore;
}

// EXECUTE THE FUNCTION
if (require.main === module || process.argv[1] === import.meta.filename) {
    createVectorStore().catch(console.error);
}
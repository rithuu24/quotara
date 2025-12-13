// src/lib/rag/createIndex.ts

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";

// 1. Define your knowledge base data (replace with a Document Loader for files/URLs)
const knowledgeBase = [
  new Document({ pageContent: "Our Quotara Pro plan costs $200 per month and includes unlimited generations.", metadata: { source: "pricing" }}),
  new Document({ pageContent: "To reset your password, click the 'Forgot Password' link on the login page.", metadata: { source: "FAQ" }}),
  // ... add more documents
];

// 2. Load and Split Documents
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

export async function createVectorStore() {
  console.log("Starting document processing...");
  
  const allSplits = await splitter.splitDocuments(knowledgeBase);
  
  // 3. Create Embeddings and Store
  const embeddings = new OpenAIEmbeddings(); 
  
  // FAISS will save the index locally in a 'faiss_index' directory
  const vectorStore = await FaissStore.fromDocuments(
    allSplits,
    embeddings
  );
  
  await vectorStore.save("./faiss_index");
  console.log("Vector store successfully created and saved!");
  return vectorStore;
}

// You can run this file directly in Node.js to create the index
// createVectorStore();

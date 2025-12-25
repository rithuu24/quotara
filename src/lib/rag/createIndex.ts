import path from "path";
import fs from "fs";
import * as lancedb from "@lancedb/lancedb";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { LanceDB } from "@langchain/community/vectorstores/lancedb";
import { OllamaEmbeddings } from "@langchain/ollama";

const DB_PATH = path.join(process.cwd(), "lancedb");

const docs = [
  new Document({
    pageContent: "Our Quotyl Pro plan costs $200 per month and includes unlimited generations.",
    metadata: { source: "pricing" },
  }),
  new Document({
    pageContent: "To reset your password, click the 'Forgot Password' link on the login page.",
    metadata: { source: "faq" },
  }),
  new Document({
    pageContent: "Quotyl specializes in AI-driven SaaS solutions for quotation generation.",
    metadata: { source: "about" },
  }),
];

async function createIndex() {
  if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });

  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 800, chunkOverlap: 100 });
  const splits = await splitter.splitDocuments(docs);

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text:latest",
    baseUrl: "http://127.0.0.1:11434",
  });

  console.log("🔹 Creating LanceDB vector store...");
  await LanceDB.fromDocuments(splits, embeddings, {
    uri: DB_PATH,
    tableName: "quotations",
  });

  console.log("✅ Index created at:", DB_PATH);
}

createIndex().catch(console.error);
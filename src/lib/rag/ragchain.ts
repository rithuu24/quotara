// src/lib/rag/ragChain.ts

import path from "path";
import fs from "fs";

import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OllamaEmbeddings } from "@langchain/ollama";
import { ChatOllama } from "@langchain/ollama";

import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { Document } from "@langchain/core/documents";

// --------------------------------------------------
// FAISS INDEX PATH
// --------------------------------------------------
const INDEX_PATH = path.join(process.cwd(), "faiss_index");

// --------------------------------------------------
// Cached chain
// --------------------------------------------------
let ragChain: RunnableSequence | null = null;

// --------------------------------------------------
// Prompt
// --------------------------------------------------
const RAG_PROMPT_TEMPLATE = `
You are a helpful assistant for the Quotyl website.

Instructions:
- Answer ONLY using the provided context
- If the answer is not present, say clearly that the information is not available
- Be concise and professional

CONTEXT:
{context}

QUESTION:
{question}
`;

const ragPrompt = PromptTemplate.fromTemplate(RAG_PROMPT_TEMPLATE);

// --------------------------------------------------
// Initialize RAG Chain
// --------------------------------------------------
async function getRagChain(): Promise<RunnableSequence> {
  if (ragChain) return ragChain;

  if (!fs.existsSync(INDEX_PATH)) {
    throw new Error("FAISS index not found. Please generate the index first.");
  }

  console.log("🔹 Initializing RAG chain with Ollama + FAISS");

  // Embeddings (must match index creation)
  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text",
    baseUrl: "http://localhost:11434",
  });

  // Load FAISS
  const vectorStore = await FaissStore.load(INDEX_PATH, embeddings);
  const retriever = vectorStore.asRetriever({
    k: 3,
  });

  // Ollama LLM
  const llm = new ChatOllama({
    model: "llama3.1",
    baseUrl: "http://localhost:11434",
    temperature: 0,
  });

  const outputParser = new StringOutputParser();

  const formatDocs = (docs: Document[]) =>
    docs.map((doc) => doc.pageContent).join("\n\n");

  ragChain = RunnableSequence.from([
    RunnablePassthrough.assign({
      context: async (input: { question: string }) => {
        const docs = await retriever.invoke(input.question);
        return formatDocs(docs);
      },
    }),
    ragPrompt,
    llm,
    outputParser,
  ]);

  console.log("✅ RAG chain initialized");
  return ragChain;
}

// --------------------------------------------------
// Public API
// --------------------------------------------------
export async function askRAG(question: string): Promise<string> {
  try {
    const chain = await getRagChain();
    return await chain.invoke({ question });
  } catch (error) {
    console.error("❌ RAG execution error:", error);
    return "I'm sorry, I couldn't retrieve that information right now.";
  }
}

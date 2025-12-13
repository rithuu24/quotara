// src/lib/rag/ragChain.ts

import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { Document } from "@langchain/core/documents"; 
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

let ragChain: RunnableSequence | null = null;

const RAG_PROMPT_TEMPLATE = `
You are a helpful assistant for the Quotyl website. 
Use the following context to answer the user's question accurately.
If you cannot find the answer in the context, state clearly that the information is not available.

CONTEXT:
{context}

QUESTION: {question}
`;

const ragPrompt = PromptTemplate.fromTemplate(RAG_PROMPT_TEMPLATE);

async function getRagChain() {
  if (ragChain) return ragChain;

  console.log("Initializing RAG Chain with Gemini...");
  
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "embedding-001", // Note: Embeddings also use 'model', not 'modelName'
    apiKey: process.env.GOOGLE_API_KEY
  });
  
  const vectorStore = await FaissStore.load("./faiss_index", embeddings);
  const retriever = vectorStore.asRetriever(3);
  
  // FIX APPLIED HERE: changed modelName to model
  const llm = new ChatGoogleGenerativeAI({ 
    model: "gemini-1.5-flash", 
    temperature: 0,
    apiKey: process.env.GOOGLE_API_KEY
  });
  
  const outputParser = new StringOutputParser();

  const formatDocs = (docs: Document[]) => docs.map((doc) => doc.pageContent).join("\n\n");

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

  console.log("RAG Chain initialized.");
  return ragChain;
}

export async function askRAG(question: string) {
  try {
    const chain = await getRagChain();
    const response = await chain.invoke({ question });
    return response;
  } catch (error) {
    console.error("RAG Execution Error:", error);
    return "I'm sorry, I am having trouble accessing my knowledge base right now.";
  }
}
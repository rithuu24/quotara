import path from "path";
import * as lancedb from "@lancedb/lancedb";
import { LanceDB } from "@langchain/community/vectorstores/lancedb";
import { OllamaEmbeddings, ChatOllama } from "@langchain/ollama";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

const DB_PATH = path.join(process.cwd(), "lancedb");
let ragChain: RunnableSequence | null = null;

export async function getRagChain() {
  if (ragChain) return ragChain;

  const embeddings = new OllamaEmbeddings({
    model: "nomic-embed-text:latest",
    baseUrl: "http://127.0.0.1:11434",
  });

  const db = await lancedb.connect(DB_PATH);
  const table = await db.openTable("quotations");
  const vectorStore = new LanceDB(embeddings, { table });
  const retriever = vectorStore.asRetriever(3);

  const llm = new ChatOllama({
    model: "qwen:4b",
    temperature: 0,
    baseUrl: "http://127.0.0.1:11434",
  });

  const prompt = PromptTemplate.fromTemplate(`
    Answer the question based ONLY on the following context.
    Context: {context}
    Question: {question}
    Answer:
  `);

  ragChain = RunnableSequence.from([
    {
      context: async (input: { question: string }) => {
        const docs = await retriever.invoke(input.question);
        return docs.map((d) => d.pageContent).join("\n\n");
      },
      question: new RunnablePassthrough(),
    },
    prompt,
    llm,
    new StringOutputParser(),
  ]);

  return ragChain;
}
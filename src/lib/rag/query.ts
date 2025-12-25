import { getRagChain } from "./ragChain";

export async function queryRAG(question: string) {
  try {
    const chain = await getRagChain();
    return await chain.invoke({ question });
  } catch (err) {
    console.error("❌ RAG error:", err);
    return "I don't have that information.";
  }
}
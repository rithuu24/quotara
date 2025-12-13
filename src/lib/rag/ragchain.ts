// src/lib/rag/ragChain.ts

import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Load the Vector Store once at server startup
const embeddings = new OpenAIEmbeddings();
// NOTE: Load the index from the path where you saved it in Step 2
const vectorStore = await FaissStore.load("./faiss_index", embeddings);
const retriever = vectorStore.asRetriever(3); // Retrieve top 3 relevant documents

// 1. Define the LLM and the Output Parser
const llm = new ChatOpenAI({ modelName: "gpt-3.5-turbo-0125", temperature: 0 });
const outputParser = new StringOutputParser();

// 2. Define the Custom Prompt Template
const RAG_PROMPT_TEMPLATE = `
You are a helpful assistant for the Quotara website. 
Use the following context to answer the user's question accurately.
If you cannot find the answer in the context, state clearly that the information is not available.

CONTEXT:
{context}

QUESTION: {question}
`;

const ragPrompt = PromptTemplate.fromTemplate(RAG_PROMPT_TEMPLATE);

// 3. Define the RAG Chain using LangChain Expression Language (LCEL)
const ragChain = RunnableSequence.from([
  // Step 1: Pass the input question to the retriever and the prompt
  {
    context: (input: { question: string }) => retriever.invoke(input.question),
    question: (input: { question: string }) => input.question,
  },
  // Step 2: Format the retrieved documents and question into the prompt
  {
    context: (previousOutput: { context: any[] }) => previousOutput.context.map(doc => doc.pageContent).join("\n\n"),
    question: (previousOutput: { question: string }) => previousOutput.question,
  },
  // Step 3: Run the prompt through the LLM
  ragPrompt,
  llm,
  // Step 4: Parse the output
  outputParser,
]);

export async function askRAG(question: string) {
  const response = await ragChain.invoke({ question });
  return response;
}
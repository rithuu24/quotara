// src/app/api/quote/route.ts (or similar)

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// 1. LANGCHAIN RAG IMPORTS
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { OpenAIEmbeddings } from "@langchain/openai";
import { BaseRetriever } from "@langchain/core/retrievers";

// --- RAG Initialization (Runs ONCE at server startup) ---
let retriever: BaseRetriever;
const INDEX_PATH = "./faiss_index";

try {
    // 2. Initialize Embeddings (Must match what was used for indexing)
    const embeddings = new OpenAIEmbeddings(); 
    
    // 3. Load the Vector Store from disk
    const vectorStore = await FaissStore.load(INDEX_PATH, embeddings);
    
    // 4. Create the Retriever (fetches the top 3 relevant documents)
    retriever = vectorStore.asRetriever(3);
    console.log("RAG Retriever successfully loaded.");

} catch (e) {
    console.error(`ERROR: Failed to load RAG index from ${INDEX_PATH}. Did you run 'createIndex.ts'?`, e);
    // If loading fails, the retriever will remain undefined, and the API call will fall back.
}


// --- API Handler ---

export async function POST(request: Request) {
    try {
        const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
        
        if (!apiKey) {
            return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
        }

        const { prompt } = await request.json();

        if (!prompt || !prompt.trim()) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
        
        // --- 5. RAG Retrieval ---
        let context = "";
        if (retriever) {
            const documents = await retriever.invoke(prompt);
            context = documents.map(doc => doc.pageContent).join("\n\n---\n\n");
            console.log(`Retrieved ${documents.length} documents for context.`);
        } else {
            console.warn("Retriever not initialized. Running LLM call without RAG context.");
        }


        // --- 6. Prompt Construction (The RAG Step) ---
        
        const systemPrompt = `You are a professional business quotation generator. Generate a detailed, professional business quotation based on the user's requirements.

Format the quotation with:
- Professional header with company placeholder, date, and quote ID
- Clear project/service description
- Itemized breakdown with realistic pricing
- Subtotal, tax, and total
- Payment terms, Validity period, Terms & conditions, Contact information placeholder.

Use proper formatting with lines (━), spacing, and structure. Make it look professional and ready to send to a client. Include realistic pricing based on the requirements provided.`;


        const finalPrompt = `
        SYSTEM INSTRUCTIONS: ${systemPrompt}
        
        ${context ? `
        --- CONTEXTUAL KNOWLEDGE BASE ---
        Use the following information, retrieved from the company's knowledge base, to ensure the quotation adheres to standard terms, pricing, and policies.
        CONTEXT:
        ${context}
        --- END CONTEXTUAL KNOWLEDGE BASE ---
        ` : ''}

        CLIENT REQUIREMENTS: ${prompt}
        `;


        // --- 7. Call Gemini ---
        const result = await model.generateContent(finalPrompt);
        const quotation = result.response.text();

        return NextResponse.json({ quotation });
    } catch (error: any) {
        console.error('Error generating quotation:', error);
        return NextResponse.json(
            { 
                error: 'Failed to generate quotation',
                details: error.message || 'Unknown error occurred',
            },
            { status: 500 }
        );
    }
}
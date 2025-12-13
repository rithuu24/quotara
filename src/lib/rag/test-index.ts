import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { Document } from "@langchain/core/documents";
import * as dotenv from "dotenv";
import * as fs from "fs";

// Load environment variables
dotenv.config({ path: ".env.local" });

async function run() {
  console.log("----------------------------------------");
  console.log("🔍 DIAGNOSTIC MODE: Creating Index");
  console.log("----------------------------------------");

  // 1. Check Key
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ ERROR: GOOGLE_GEMINI_API_KEY is missing from .env.local");
    process.exit(1);
  }
  console.log("✅ API Key found.");

  // 2. Test Google API Connection ONLY
  console.log("📡 Testing Google API connection...");
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "embedding-001",
    apiKey: apiKey
  });

  try {
    // Try to embed a single word to test the key
    await embeddings.embedQuery("hello");
    console.log("✅ Google API Connection Successful!");
  } catch (error: any) {
    console.error("❌ GOOGLE API FAILED. Your API key might be invalid or has no quota.");
    console.error("Error details:", error.message);
    process.exit(1);
  }

  // 3. Create FAISS Store
  console.log("📚 Creating Vector Store...");
  const docs = [
    new Document({ pageContent: "Quotara is an AI quotation tool." }),
    new Document({ pageContent: "Support email is support@quotara.com" }),
  ];

  try {
    const vectorStore = await FaissStore.fromDocuments(docs, embeddings);
    
    // 4. Save to Disk
    console.log("💾 Saving to disk...");
    
    // Ensure folder exists (sometimes faiss fails if parent dir is missing)
    if (!fs.existsSync("./faiss_index")) {
        fs.mkdirSync("./faiss_index");
    }
    
    await vectorStore.save("./faiss_index");
    console.log("----------------------------------------");
    console.log("✅ SUCCESS! Index created at ./faiss_index");
    console.log("----------------------------------------");
    
  } catch (error: any) {
    console.error("❌ FAISS ERROR: Could not save file.");
    console.error(error);
  }
}

run();
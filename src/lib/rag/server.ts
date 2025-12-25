import express from "express";
import cors from "cors";
import { queryRAG } from "./query";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/query", async (req, res) => {
  const { question } = req.body;
  const answer = await queryRAG(question);
  res.json({ answer });
});

app.listen(3333, () => console.log("🚀 RAG Server at http://127.0.0.1:3333"));
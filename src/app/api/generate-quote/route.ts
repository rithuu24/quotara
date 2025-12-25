import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("http://127.0.0.1:3333/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: prompt }),
    });

    const data = await response.json();
    return NextResponse.json({ quotation: data.answer });
  } catch (error) {
    return NextResponse.json({ error: "RAG service offline" }, { status: 500 });
  }
}
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Debug: Log all env vars that start with GOOGLE
    const googleEnvVars = Object.keys(process.env).filter(key => key.includes('GOOGLE'));
    console.log('Google-related env vars:', googleEnvVars);
    
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GOOGLE_GEMINI_API_KEY is not set in environment variables');
      console.error('Available env vars with GOOGLE:', googleEnvVars);
      console.error('All env keys sample:', Object.keys(process.env).slice(0, 10));
      return NextResponse.json(
        { error: 'API key is not configured', debug: { googleEnvVars } },
        { status: 500 }
      );
    }
    
    if (!apiKey.startsWith('AIza')) {
      console.error('API key format appears invalid');
    }

    const { prompt } = await request.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Try gemini-1.5-flash first, fallback to gemini-pro if needed
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const systemPrompt = `You are a professional business quotation generator. Generate a detailed, professional business quotation based on the user's requirements. 

Format the quotation with:
- Professional header with company placeholder, date, and quote ID
- Clear project/service description
- Itemized breakdown with realistic pricing
- Subtotal, tax, and total
- Payment terms
- Validity period
- Terms & conditions
- Contact information placeholder

Use proper formatting with lines (━), spacing, and structure. Make it look professional and ready to send to a client. Include realistic pricing based on the requirements provided.`;

    const result = await model.generateContent(`${systemPrompt}\n\nClient Requirements: ${prompt}`);
    const response = await result.response;
    const quotation = response.text();

    return NextResponse.json({ quotation });
  } catch (error: any) {
    console.error('Error generating quotation:', error);
    const errorMessage = error?.message || 'Unknown error occurred';
    const errorDetails = error?.status || error?.statusText || '';
    
    return NextResponse.json(
      { 
        error: 'Failed to generate quotation',
        details: errorMessage,
        ...(errorDetails && { status: errorDetails })
      },
      { status: 500 }
    );
  }
}
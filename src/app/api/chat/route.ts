import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { resources } from '@/data/resources';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    const { message } = await req.json();
  
    if (!message) {
      return NextResponse.json({ error: "Missing message" }, { status: 400 });
    }
  
    // Build context from your resource data
    const contextText = resources
      .map((res) => {
        const link = `http://localhost:3000/resources?category=${encodeURIComponent(res.type)}&subjects=${encodeURIComponent(res.subjects[0])}`;
        return `Title: ${res.title}\nType: ${res.type}\nSubjects: ${res.subjects.join(", ")}\nDescription: ${res.description}\nLink: ${link}`;
      })
      .join("\n\n");
  
    // System prompt to guide how the chatbot should respond
    const systemPrompt = `
        You are a helpful assistant designed to help seniors, low-income families, and people who lack digital literacy. 
        Use simple and clear language.
        
        Your job is to answer questions about available resources listed on the website.
        
        You must refer to the resources provided in the context below and always include a helpful clickable link that navigates to the filtered resource using query parameters.
        Make sure to embed the link to a relevent word. 
        
        If the question is unclear, politely ask for clarification.
        Only answer questions related to the website’s services.
        
        Context:\n${contextText}
    `;
  
    try {
        const modelName = 'gemini-2.0-flash-lite'; // Changed the model name, ensure you have access to it
        const model = genAI.getGenerativeModel({ model: modelName });

        const prompt = `${systemPrompt}\n\nUser: ${message}`;  // Combine system prompt and user message.

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ text });
    } catch (err) {
        console.error("Error in chatbot route:", err);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
  }
  
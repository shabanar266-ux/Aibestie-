import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables from .env file
dotenv.config();

// Initialize Gemini with your free key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function testGemini() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: 'Say hello!',
    });
    
    console.log("Gemini Response:", response.text);
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
  }
}

testGemini();

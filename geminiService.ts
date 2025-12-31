
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = 'gemini-3-pro-preview';

export async function askVibeAdvisor(question: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are an expert advisor for Product Managers. 
    Your expertise is "Vibe Coding" - using high-level prompts and AI to build software. 
    A PM is asking you about their changing role in this era. 
    Respond in Hebrew. Be encouraging but realistic about technical debt, complexity, and scalable systems.
    Emphasize that the PM is shifting from a 'spec writer' to a 'full-stack orchestrator' or 'builder'.
  `;

  try {
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });
    return response.text || "מצטער, חלה שגיאה בעיבוד התשובה.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "שגיאה בחיבור ל-Gemini. אנא נסה שוב מאוחר יותר.";
  }
}

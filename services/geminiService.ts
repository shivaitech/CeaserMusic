import { GoogleGenAI, SchemaType } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingCopy = async (
  venueName: string,
  offer: string,
  vibe: string
): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key missing");
    return "Please provide a valid API key to use the AI features.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Act as a world-class luxury marketing copywriter for the brand [ AZ : UR ].
      We need to demonstrate our system's capability to a potential client.
      
      Client Venue Name: ${venueName}
      Offer: ${offer}
      Vibe: ${vibe}

      Generate a JSON response containing two things:
      1. A short, viral Instagram Caption Hook (max 1 sentence).
      2. A personalized, high-converting Direct Message (DM) that would be sent automatically when a user comments.

      Format the output as a clean JSON string with keys "hook" and "dmResponse". 
      Do not use Markdown code blocks. Just the raw JSON string.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content");
  }
};
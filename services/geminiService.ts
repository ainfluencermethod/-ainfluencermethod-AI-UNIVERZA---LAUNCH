import { GoogleGenAI, Type } from "@google/genai";

// Safely access process.env to avoid "process is not defined" error in browsers
const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';

// Initialize only if key exists to avoid immediate errors, handled gracefully in caller
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Generates a short list of curriculum benefits based on the user's job title.
 */
export const generateCurriculumPreview = async (jobTitle: string): Promise<string[]> => {
  if (!ai) {
    console.warn("API Key missing");
    throw new Error("API Key missing");
  }

  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      User Job Title: ${jobTitle}
      Context: "AI UNIVERZA" is a high-end Slovenian Online AI University with two main paths: 1. AI Influencer (creating faceless characters via DNA Framework, viral content), 2. AI Agency (selling UGC, photoshoots, and ads to companies).
      Task: Create 3 specific, short, and punchy bullet points (in Slovenian language) explaining how this user (with their specific job title) can utilize these AI paths to achieve financial freedom or career growth.
      Tone: Professional, inspiring, direct, focused on "Welcome to 2026".
      Output: JSON array of strings.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });
    
    const text = response.text;
    if (!text) return [];
    
    const data = JSON.parse(text);
    if (Array.isArray(data)) {
      return data;
    }
    return [];

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data in case of error
    return [
        "Monetizacija vašega znanja z AI Influencer modelom",
        "Avtomatizacija vašega trenutnega dela z AI orodji",
        "Ustvarjanje dodatnega prihodka z AI Agency storitvami"
    ];
  }
};
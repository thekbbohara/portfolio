import {
  GenerationConfig,
  GoogleGenerativeAI,
  SchemaType,
} from "@google/generative-ai";
import system_instruction from "./SYSTEM";

const { GEMINI_API_KEY } = process.env;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);

const generationConfig: GenerationConfig = {
  temperature: 1.2,
  topP: 0.85,
  topK: 50,
  maxOutputTokens: 100,
  responseMimeType: "application/json",
  responseSchema: {
    type: SchemaType.OBJECT,
    properties: {
      reply: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
    },
    example: {
      reply: [
        "Hey there!",
        "I build web apps using MERN, Next.js, and Remix.",
        "I focus on the backend but do full-stack.",
        "My services include custom web apps, APIs, and e.",
      ],
    },
    required: ["reply"],
  },
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: system_instruction,
  generationConfig,
});

export async function chat(userMessage: string) {
  const res = await model.generateContent(userMessage);

  // Extract the 'reply' array from the response
  const botResponses = res.response.text();

  return botResponses;
}

// Example Usage:
// (async () => {
//   const userMessage = "lund le le muh me bsdk";
//   const botResponses = await chat(userMessage);

//   console.log(`User: ${userMessage}`);
//   console.log(`kb: ${botResponses}`);
//   // botResponses.forEach(part => console.log(`KB: ${part}`));
// })();

import {
  Content,
  GenerationConfig,
  GoogleGenerativeAI,
  Part,
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
      type: { type: SchemaType.STRING, enum: ["string", "array", "null"] },
      reply: { type: SchemaType.ARRAY, items: { type: SchemaType.STRING } },
    },
    example: {
      type: "array",
      reply: [
        "Hey there!",
        "I build web apps using MERN, Next.js, and Remix.",
        "I focus on the backend but do full-stack.",
        "My services include custom web apps, APIs, and e.",
      ],
    },
    required: ["reply", "type"],
  },
};

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: system_instruction,
});

export async function chat(
  parts: Content[],
  userMessage?: string,
): Promise<{
  reply: string[] | string;
  type: "string" | "null" | "array";
}> {
  const res = await model.generateContent({
    contents: parts,
    generationConfig,
  });
  // Extract the 'reply' array from the response
  try {
    const botResponses: {
      reply: string[] | string;
      type: "string" | "null" | "array";
    } = JSON.parse(res.response.text());
    // console.log(botResponses);
    return botResponses;
  } catch {
    // console.log("err", "['null']");
    return {
      reply: "null",
      type: "null",
    };
  }
}

// Example Usage:
// (async () => {
//   const userMessage = "lund le le muh me bsdk";
//   const botResponses = await chat(userMessage);

//   console.log(`User: ${userMessage}`);
//   console.log(`kb: ${botResponses}`);
//   // botResponses.forEach(part => console.log(`KB: ${part}`));
// })();

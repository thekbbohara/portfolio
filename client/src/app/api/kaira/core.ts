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
});

export async function chat(
  parts: Content[],
  userMessage?: string,
): Promise<string[]> {
  const res = await model.generateContent({
    contents: parts,
    generationConfig,
  });
  // Extract the 'reply' array from the response
  try {
    const botResponses: { reply: string[] } = JSON.parse(res.response.text());
    // console.log(botResponses);
    return botResponses.reply;
  } catch {
    // console.log("err", "['null']");
    return ["null"];
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

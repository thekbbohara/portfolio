const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const parts = [
    {text: "input: hi"},
    {text: "output: hi"},
    {text: "input: hi hi"},
    {text: "output: hu hu"},
    {text: "input: "},
    {text: "output: "},
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
  });
  console.log(result.response.text());
}

run();

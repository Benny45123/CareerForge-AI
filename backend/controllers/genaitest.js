const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");
const API_KEY = process.env.GEMINI_API_KEY;
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: API_KEY });

async function main() {
    try{
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
    
  });
  console.log(response.text);}catch(error){console.error(error);}
}
main()
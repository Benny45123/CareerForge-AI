const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    console.log("🤖 Connecting to Gemini...");

    // ✅ UPDATED: Using the lightweight, high-limit model from your list
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

    const prompt = "Write a distinct, one-sentence funny greeting for a backend developer.";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    console.log("✅ Success:", response.text());
    
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

run();
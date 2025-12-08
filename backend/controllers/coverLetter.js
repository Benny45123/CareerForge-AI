const pdfParse = require('pdf-parse');
const CoverLetter = require('../models/coverLetterSchema.js');
const {GoogleGenerativeAI}= require('@google/generative-ai');
const API_KEY = process.env.GEMINI_API_KEY;
const generateCoverLetter = async (req, res) => {
    console.log(req.body);
    try{
        const { jobDescription,
            skillsFocus,
            recruiterName,
            recruiterDesignation,
            companyName } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: 'Resume file is required' });
        }
        const resumeData = await pdfParse(req.file.buffer);
        const resumeText = resumeData.text;
        const prompt =`You are a highly experienced HR writer, resume analyst, and cover-letter specialist with over 20 years of professional expertise.  
Your task is to generate a polished, concise, and job-specific cover letter based strictly on the user-provided data below.

====================================================================
🧾 RESUME CONTENT  
(Use ONLY the skills, experience, projects, roles, tools, and achievements found here.  
Do NOT create new information.)
${resumeText}
====================================================================

====================================================================
💼 JOB DESCRIPTION  
(Read carefully and extract the job title automatically.)
${jobDescription}
====================================================================

====================================================================
🎯 SKILLS TO HIGHLIGHT  
(Use these ONLY if they appear in the resume content.)
${skillsFocus}
====================================================================

====================================================================
👤 RECRUITER DETAILS  
Name: ${recruiterName}  
Designation: ${recruiterDesignation}  
Company: ${companyName}  
====================================================================

====================================================================
📌 STRICT WRITING RULES  
1. Use ONLY skills and experience present in the resume.  
   - Do NOT invent skills, tools, roles, achievements, or technologies.  
   - If a skill from “Skills to Highlight” is NOT present in the resume, ignore it.

2. Extract the job title from the job description naturally (do NOT mention this step).

3. Tailor the cover letter to match:
   - key responsibilities in the job description  
   - required skills  
   - relevant experience in the resume  
   - skill highlights (only if they appear in the resume)

4. Tone & Style Requirements:
   - confident  
   - professional  
   - sincere  
   - aligned with the company’s needs  
   - no exaggeration or fabricated claims  

5. Structure Requirements:
   - Strong and engaging opening sentence  
   - 2–3 focused body paragraphs connecting resume → job description  
   - Mention recruiter details appropriately  
   - Courteous closing paragraph  

6. Length:
   - Between 150 and 250 words  
   - No bullet points  

7. Formatting Rules:
   - Start with “Dear {recruiterName},”  
   - If recruiterName is empty → use “Dear Hiring Manager,”  
   - Do NOT mention that this letter was generated using AI  
   - Do NOT include extra explanations or notes
====================================================================

====================================================================
📦 FINAL OUTPUT FORMAT — MANDATORY  
You MUST return a **valid JSON object** with the following fields:

{
  "coverLetter": "string — final cover letter text only",
  "email": "string — extracted from resumeText",
  "phone": "string — extracted from resumeText",
  "linkedin": "string — extracted from resumeText",
  "role": "string — extracted job title from jobDescription",
  "name": "string — candidate's full name extracted from resumeText"
}

Additional JSON rules:
- If email, phone, linkedin, or name is missing in the resume, return an empty string for that field.
- Ensure JSON is syntactically correct and contains no trailing commas.
- Do NOT add any text outside the JSON object.
====================================================================


`
    const ai = new GoogleGenerativeAI( API_KEY );
    const model = ai.getGenerativeModel({model:"gemini-2.5-flash-lite"});
    const response = await model.generateContent(prompt);
    console.log("Raw AI Output:", await response.response.text());
    const rawOutput = await response.response.text();
    const cleanedOutput = rawOutput.replace(/```json/g, "").replace(/```/g, "").trim();
    let parsedOutput;
    try {
        parsedOutput = JSON.parse(cleanedOutput);
    }
    catch (parseError) {
        console.error("Error parsing AI output as JSON:", parseError);
        return res.status(500).json({ error: "Failed to parse AI output" });
    }
    const {coverLetter,email,phone,linkedin,role,name}=parsedOutput;
        const saved=await CoverLetter.create({
            jobDescription,
            skillsFocus,
            resumeText,
            recruiterName,
            recruiterDesignation,
            companyName,
            generatedLetter:coverLetter,
            email,
            phone,
            linkedin,
            role,
            name
        });
        res.status(200).json({
            success:true,
            coverLetter,
            email,
            phone,
            linkedin,
            role,
            name,
            id:saved._id
        });
    }
    catch(error){
        console.error("Error generating cover letter:",error);
        res.status(500).json({error:"Failed to generate cover letter"});
    }
}
module.exports={generateCoverLetter};
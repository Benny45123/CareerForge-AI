const express=require("express");
const multer=require("multer");
const {analyzeResume}=require("../controllers/resumeAnalyzer.js");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post("/analyze-resume",upload.single('resume'),analyzeResume);
module.exports={router};

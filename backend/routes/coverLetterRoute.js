const express=require("express");
const multer=require("multer");
const {generateCoverLetter}=require("../controllers/coverLetter.js");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post("/generate-cover-letter",upload.single('resume'),generateCoverLetter);
module.exports={router};
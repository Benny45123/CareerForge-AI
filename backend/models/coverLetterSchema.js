const mongoose=require('mongoose');
const coverLetterSchema=new mongoose.Schema({
    jobDescription:{
        type:String,
        required:true
    },
    skillsFocus:{
        type:String,
        required:true
    },
    resumeText:{
        type:String,
        required:true
    },
    recruiterName:{
        type:String,
        required:true,
    },
    recruiterDesignation:{
        type:String,
        required:true,
    },
    companyName:{
        type:String,
        required:true,
    },
    generatedLetter:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const CoverLetter=mongoose.model('CoverLetter',coverLetterSchema);
module.exports=CoverLetter;
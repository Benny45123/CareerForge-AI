import {useRef} from "react";
import ResumePageLogo from '../assets/ResumePageLogo.png';
const ResumePage=({isOpen})=>{
    const resumeFileRef=useRef(null);
    const handleDivClick=(e)=>{

        resumeFileRef.current.click();
    }
    const handleChange=(e)=>{
        const file=e.target.files[0];
        console.log(file);
    }
    return (
        <>
            <div  className={`transition-all duration-300 h-2 bg-gray-200 p-4 ${isOpen ? "md:w-3/4 ml-[25%]" : "md:w-full ml-0"} h-full`}>
                <div className="rounded-md bg-[#f2f1f1] p-7 shadow-md">
                <h1 className="text-7xl font-semibold text-center mb-4">Resume Score Checker</h1>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                        <h1 className="text-5xl font-semibold mb-4 mt-20">Understand How Recruiters See <br/>Your Resume</h1>
                        <p className="text-gray-700 ">Designed to reflect real-world screening systems,<br/> our resume score checker analyzes keywords,<br/> formatting, and content alignment<br/>empowering you to optimize your resume for both ATS and human reviewers.</p>
                        <div onClick={handleDivClick} className="border border-blue-400 rounded-lg p-6 mt-10 cursor-pointer hover:shadow-md shadow-blue-400 border-dashed w-100 items-center justify-center flex flex-col">
                            <h1 className="text-2xl font-semibold mb-4 text-center">Drop Your Resume Here</h1>
                            <p className="text-gray-500 text-center">PDF & DOCX only Max 2mb file size</p>
                            <input ref={resumeFileRef} onChange={handleChange} type="file" className="hidden" accept=".pdf,.docx"/>
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-5">Drop your Resume</button>
                        </div>
                        <div>
                            <h1 className="text-xl font-medium mt-10">Enter your Job Description here ...</h1>
                            <textarea className="w-90 h-40 border border-gray-300 rounded-lg p-4 mt-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Paste job description..."></textarea><br/>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-5">Get Resume Score</button>
                        </div>
                        </div>
                        <img src={ResumePageLogo} alt="Resume Page Logo" className="mt-25 mx-auto w-1/2 h-200"/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default ResumePage;
import { useNavigate } from "react-router-dom";
import newCvImg from '../assets/newcv.jpg';
import cvHistory from '../assets/cv_history.jpg';
const CoverLetterPage = ({isOpen,displayCoverLetters}) => {
    const navigate=useNavigate();
    const handleNewCoverLetter=()=>{
        navigate('/fillin');
    }
    return (
        <>
            <div style={{ marginLeft: isOpen ? "25%" : "0" }} className={`transition-all duration-300 h-2 bg-gray-200 p-4 ${isOpen ? "md:w-3/4" : "md:w-full"} min-h-screen`}>
                    <div onClick={handleNewCoverLetter} className={`relative ${isOpen ? "md:w-[100%]" : "md:w-full"} h-56 flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-xl shadow-md transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-violet-500 hover:border-blue-400 cursor-pointer`}>
                        <div className="absolute inset-0 rounded-2xl "></div>

                          <img src={newCvImg} alt="New Cover Letter" className="h-24 w-24 object-contain drop-shadow-2xl drop-shadow-cyan-300"/>

                          <h1 className="text-2xl font-semibold text-white tracking-wide text-center">Create a New Cover Letter</h1>
                          <p className="text-sm text-gray-400 text-center">AI-powered professional document</p>
                        </div>
                        
                        <div onClick={()=>displayCoverLetters()} className="mt-10 relative rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:scale-[1.03] hover:shadow-violet-500 border border-white/10 backdrop-blur-xl">
                            <img src={cvHistory} alt="Cover Letter History" className="h-24 w-24 object-contain drop-shadow-2xl drop-shadow-cyan-300"/>
                            <h1 className="mt-4 text-lg font-semibold text-white tracking-wide text-center">View Previous Cover Letters</h1>
                        </div>

            </div>
        </>
    )
}
export default CoverLetterPage;
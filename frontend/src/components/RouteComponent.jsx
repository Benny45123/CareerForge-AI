import {Route,Routes } from "react-router-dom";
import FillData from "./FillData.jsx";
import SelectDesign from "./SelectDesign.jsx";
import DisplayCoverLetters from "../pages/DisplayCoverLetters.jsx";
import CoverLetterPage from "../pages/CoverLetterPage.jsx";
import ResumePage from "../pages/ResumePage.jsx";
const RouteComponent=({isOpen,getFormData,setIsOpen,setSelectedDesign,selectedDesign,confirmDesign,coverLetterData,displayCoverLetters})=>{
    // console.log("Cover letter data in RouteComponent.jsx:",coverLetterData);
    return(
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/cover-letter" element={<CoverLetterPage isOpen={isOpen} displayCoverLetters={displayCoverLetters}/>}/>
                <Route path="/resumes" element={<ResumePage isOpen={isOpen}/>}/>
                <Route path="/jobs" element={<></>}/>
                <Route path="/help" element={<></>}/>
                <Route path="/settings" element={<></>}/>
                <Route path="/fillin" element={<FillData isOpen={isOpen} getFormData={getFormData}/>}/>
                <Route path="/select-design" element={<SelectDesign isOpen={isOpen} setIsOpen={setIsOpen} setSelectedDesign={setSelectedDesign} selectedDesign={selectedDesign} confirmDesign={confirmDesign}/>}/>
                <Route path="/displayCoverLetters" element={<DisplayCoverLetters coverLetters={coverLetterData} isOpen={isOpen} />}/>

            </Routes>
    );
}
export default RouteComponent;
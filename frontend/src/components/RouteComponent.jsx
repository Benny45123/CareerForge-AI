import {Route,Routes } from "react-router-dom";
import FillData from "./FillData.jsx";
import SelectDesign from "./SelectDesign.jsx";
import DisplayCoverLetters from "../pages/DisplayCoverLetters.jsx";
const RouteComponent=({isOpen,getFormData,setIsOpen,setSelectedDesign,selectedDesign,confirmDesign,coverLetterData})=>{
    // console.log("Cover letter data in RouteComponent.jsx:",coverLetterData);
    return(
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/cover-letter" element={<></>}/>
                <Route path="/resumes" element={<></>}/>
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
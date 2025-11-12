import {Route,Routes } from "react-router-dom";
import FillData from "./FillData.jsx";

const RouteComponent=({isOpen,getFormData})=>{
    return(
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/cover-letter" element={<></>}/>
                <Route path="/resumes" element={<></>}/>
                <Route path="/jobs" element={<></>}/>
                <Route path="/help" element={<></>}/>
                <Route path="/settings" element={<></>}/>
                <Route path="/fillin" element={<FillData isOpen={isOpen} getFormData={getFormData}/>}/>
            </Routes>
    );
}
export default RouteComponent;
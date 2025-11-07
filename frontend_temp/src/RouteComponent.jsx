import {Route,Routes } from "react-router-dom";
const RouteComponent=()=>{
    return(
            <Routes>
                <Route path="/" element={<></>}/>
                <Route path="/cover-letter" element={<></>}/>
                <Route path="/resumes" element={<></>}/>
                <Route path="/jobs" element={<></>}/>
                <Route path="/help" element={<></>}/>
                <Route path="/settings" element={<></>}/>
            </Routes>
    );
}
export default RouteComponent;
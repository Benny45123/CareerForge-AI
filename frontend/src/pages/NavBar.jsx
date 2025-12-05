import logo from '../assets/CareerForgeAI.png'
import {NavLink} from 'react-router-dom'
import userlogo from '../assets/human.png'
const NavBar=({isOpen}) => {
    return(<>
    {isOpen &&
        <>
          <div className="md:w-1/4 fixed top-10 left-0 h-screen border-solid border-gray-300 p-4 space-y-6 transition-all duration-300 bg-white rounded-2xl ">
            
            <div className="router-logo  p-2  flex items-center  space-x-5 mb-10 w-1/4 h-1/13 fixed  top-3 left-0">
              <img src={logo} alt="App Logo" className="h-12 w-12 rounded-full" />
              <h1 className="text text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-shadow-md">CareerForge AI</h1></div>
            <NavLink to="/" className="route mt-30 text-center ">
              <i className="bi bi-house  text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Home</p>
            </NavLink>
            <NavLink to='/cover-letter' className="route ">
              <i className="bi bi-envelope-paper text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Cover Letter</p>
            </NavLink>
            <NavLink to='/resumes' className="route">
              <i className="bi bi-file-earmark-text text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Resumes</p>
            </NavLink>
            <NavLink to='/jobs' className="route">
              <i className="bi bi-briefcase text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Jobs</p>
            </NavLink>
            <NavLink to='/help' className="route ">
              <i className="bi bi-question-circle text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Help</p>
            </NavLink>
            <NavLink to='/settings' className="route">
              <i className="bi bi-gear text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Settings</p>
            </NavLink>
          </div>
        </>}
    </>);
}
export default NavBar;
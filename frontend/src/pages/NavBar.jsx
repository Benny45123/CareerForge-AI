import logo from '../assets/app-logo.jpeg'
import {Link} from 'react-router-dom'
import userlogo from '../assets/human.png'
const NavBar=({isOpen}) => {
    return(<>
    {isOpen &&
        <>
          <div className="md:w-1/4 fixed top-0 left-0 h-screen border-solid border-gray-300 p-4 space-y-6 transition-all duration-300 bg-white rounded-2xl ">
            
            <div className="router-logo border border-gray-300 p-2  flex items-center  space-x-2 mb-10 w-1/4 h-1/13 fixed top-0 left-0">
              <img src={logo} alt="App Logo" className="h-10 w-10 rounded-full" />
              <h1 className="text font-bold text-gray-700">CareerForge AI</h1></div>
            <Link to="/" className="route mt-30">
              <i className="bi bi-house  text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Home</p>
            </Link>
            <Link to='/cover-letter' className="route">
              <i className="bi bi-envelope-paper text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Cover Letter</p>
            </Link>
            <Link to='/resumes' className="route">
              <i className="bi bi-file-earmark-text text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Resumes</p>
            </Link>
            <Link to='/jobs' className="route">
              <i className="bi bi-briefcase text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Jobs</p>
            </Link>
            <Link to='/help' className="route ">
              <i className="bi bi-question-circle text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Help</p>
            </Link>
            <Link to='/settings' className="route">
              <i className="bi bi-gear text-gray-500"></i>
              <p className="text-gray-500 font- mb-4">Settings</p>
            </Link>
            <div className='fixed left-0 w-1/4 h-20 rounded bottom-0 border border-gray-300'></div>
            <img  src ={userlogo} className='rounded-full  h-12 w-12 float-start absolute bottom-10'/>
          </div>
        </>}
    </>);
}
export default NavBar;
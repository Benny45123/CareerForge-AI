import { useState,useEffect } from 'react'
import NavBar from './pages/NavBar.jsx'
import { Link } from 'react-router-dom'
import './App.css'
import RouteComponent from './components/RouteComponent.jsx';
import { postData } from './services/BackendHandler.js';
import userlogo from './assets/user.png';
import Auth from './pages/Auth.jsx';
import { checkLogin,handleLogout } from './services/BackendHandler.js';
function App() {
  const [isOpen,setIsOpen]=useState(null);
  const [hovered,setHovered]=useState(false);
  const [user,setUser]=useState(false);
  const slideMenu=()=>{
    setIsOpen(!isOpen);
  }
  const getFormData=(data)=>{
    postData({data});
  }
  useEffect(()=>{
  checkLogin({setUser});
},[]);
  
  if(!user){
    return <Auth />
  }
  else{
  return (
    <>
    <div className=' '>
      <NavBar isOpen={isOpen}/>
      <button onClick={slideMenu} style={{marginLeft: isOpen ? '20%' : '0' , top: !isOpen&&"0px"}} className="fixed mt-0.5 h-1/14 p-2 top-3 hover:bg-gray-300 bg-white rounded-md  w-15 "><i className="bi bi-list"></i></button>
      <div style={{ marginLeft: isOpen ? '25%' : '0' }} className="transition-all duration-300 p-4 border border-gray-200 h-15 flex items-center space-x-10 min-w-full overflow-y-auto overflow-x-hidden" >
        <div className=" bg-gray-200 ml-20 border border-gray-300 p-2 rounded w-35 h-8 align-middle  flex right-20 space-x-2 ">
          <i className="bi bi-search flex top-0.5"></i>
          <input type="text" placeholder='Search..' className='focus:outline-none w-full'/>
        </div>
        <div className="absolute border border-gray-300  rounded-3xl right-1/80 p-2 flex items-center space-x-2 h-15 bg-white hover:shadow-lg " onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img src={userlogo} className="rounded-full  h-12 w-12" />
          <div className='flex flex-col text-left'>
          <span className=''>{user.name}</span>
          <span className='text-gray-500'>{user.email}</span>
          </div>
        </div>
      </div>
      <div style={{opacity: hovered ? '1.0' : '0.0'}} className='absolute border border-gray-300  rounded-3xl right-1/80  flex flex-col p-2 bg-white hover:shadow-lg transition-opacity duration-300  w-70'onMouseEnter={() => {hovered&&setHovered(true)}} onMouseLeave={() => setHovered(false)}>
          <div className='flex flex-col items-center justify-center p-3 space-y-3'>
          <img src={userlogo} className="rounded-full  h-12 w-12" />
          <span className='text-2xl font-extrabold'>{user.name}</span>
          <span className='text-gray-500'>{user.email}</span>
          </div>
          <button className='hover:text-gray-400 pr-30 pt-2'>Cover-Letters</button>
          <button className='hover:text-gray-400 pr-39 pt-2'>Resumes</button>
          <button className='hover:text-gray-400 pr-48 pt-2'>Jobs</button>
          <span className='text-gray-400'>______________________________________</span>
          <button onClick={()=>handleLogout({setUser})} className='hover:text-gray-400  p-3 '>Logout</button>
      </div>
      <div style={{ marginLeft : isOpen ? '25%' :'0',overflowY:"auto"}}className="flex justify-middle  transition-all duration-300    space-x-5 md:w-3/4 bg-gray-200 overflow-auto h-full pl-4 pt-4 pr-4 top-15 h-15">
        <div className='flex items-center justify-center w-full h-full rounded-2xl bg-white p-4 shadow-md'>
        <Link to='/fillin' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Fill in</Link>
        <Link to='/select-design' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Select Design</Link>
        <Link to='/generate-cv' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Generate CV</Link></div>
     </div>
     
    </div>
    <RouteComponent getFormData={getFormData} isOpen={isOpen}/>
    </>
  )
}
}

export default App

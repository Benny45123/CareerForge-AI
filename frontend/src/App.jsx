import { useState } from 'react'
import NavBar from './pages/NavBar.jsx'
import { Link } from 'react-router-dom'
import './App.css'
import RouteComponent from './components/RouteComponent.jsx';
import { postData } from './services/BackendHandler.js';
import userlogo from './assets/human.png';
function App() {
  const [isOpen,setIsOpen]=useState(true);
  const slideMenu=()=>{
    setIsOpen(!isOpen);
  }
  const getFormData=(data)=>{
    postData(data);
  }
  return (
    <>
    <div className=' '>
      <NavBar isOpen={isOpen}/>
      <button onClick={slideMenu} style={{marginLeft: isOpen ? '20%' : '0'}} className="fixed mt-0.5 h-1/14 p-2 hover:bg-gray-300 bg-white rounded-md  w-15 "><i className="bi bi-list"></i></button>
      <div style={{ marginLeft: isOpen ? '25%' : '0' }} className="transition-all duration-300 p-4 border border-gray-200 h-15 flex items-center space-x-10 min-w-full overflow-y-auto overflow-x-hidden">
        <div className="bg-gray-200 ml-20 border border-gray-300 p-2 rounded w-35 h-8 align-middle  flex right-20 space-x-2 ">
          <i className="bi bi-search flex top-0.5"></i>
          <input type="text" placeholder='Search..' className='focus:outline-none w-full'/>
        </div>
        <div className='absolute right-1/7'>
        <img  src ={userlogo} className='rounded-full  h-12 w-12 '/>
        </div>
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

export default App

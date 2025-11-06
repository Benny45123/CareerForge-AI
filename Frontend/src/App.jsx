import { useState } from 'react'
import NavBar from './NavBar.jsx'
import upload from './assets/upload.png'
import './App.css'
import RouteComponent from './RouteComponent.jsx';
function App() {
  const [isOpen,setIsOpen]=useState(true);
  const slideMenu=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className=' '>
      <NavBar isOpen={isOpen}/>
      <button onClick={slideMenu} style={{marginLeft: isOpen ? '20%' : '0'}} className="fixed mt-0.5 h-1/14 p-2 hover:bg-gray-300 bg-white rounded-md  w-15 "><i className="bi bi-list"></i></button>
      <div style={{ marginLeft: isOpen ? '25%' : '0' }} className="transition-all duration-300 p-4 border border-gray-200 h-15 flex items-center space-x-10 min-w-full overflow-y-auto overflow-x-hidden">
        <div className="bg-gray-200 ml-20 border border-gray-300 p-2 rounded w-50 h-8 align-middle  flex right-20 space-x-2 ">
          <i className="bi bi-search flex top-0.5"></i>
          <input type="text" placeholder='Search..' className='focus:outline-none w-full'/>
        </div>
        <button className=" text-white hover:bg-black bg-gray-800 w-35 h-5 p-3 pb-9 rounded-2xl "><i className="bi bi-plus "></i> New Project</button>

      </div>
      <div style={{ marginLeft : isOpen ? '25%' :'0'}}className="flex justify-middle  transition-all duration-300    space-x-5 md:w-3/4 bg-gray-200 overflow-auto h-full pl-4 pt-4 pr-4 top-15 h-15">
        <div className='flex items-center justify-center w-full h-full rounded-2xl bg-white p-4 shadow-md'>
        <button className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Fill in</button>
        <button className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Select Design</button>
        <button className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Generate CV</button></div>
     </div>
     <div style={{ marginLeft: isOpen ? "25%" : "0",overflowY: "auto"}}className="transition-all duration-300 md:w-3/4 bg-gray-200 h-full p-4 pb-0">
    <div className='bg-white p-6 rounded-2xl shadow-md mb-10'>
      <h1 className='font-bold '>Generate your Cover Letter </h1>
      <br />
      <h1 className='font-semibold'>Content:</h1>
      <br/>
      <p>Paste the job description below *</p>
      <br/>
      <textarea className='focus:outline-none border border-gray-300 w-full h-1/4 rounded-md p-2' placeholder='Job Description...'></textarea>
      <br/><br/>
      <p>Which skills should be the focus?</p>
      <br />
      <input type='text' className='focus:outline-none border border-gray-300 w-full h-10 rounded-md p-2' placeholder='Skills that should be highlihted'/>
      <br />
      <h1 className='font-semibold mt-4'>Upload your Resume *</h1>
      <br />
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-100 transition">
        <img src={upload} alt="Upload" className="mx-auto mb-4 h-12 w-12"/>
        <input type='file' className='focus:outline-none w-full h-full' required/>
    </div>
      </div>
     <br/></div>
     <div style={{ marginLeft: isOpen ? "25%" : "0",height:"200vh",overflowY: "auto",top: "7.5rem" }}className="transition-all duration-300 md:w-3/4 bg-gray-200 h-full p-4 pt-0">
      <div className='bg-white p-4 rounded-2xl shadow-md mb-10'>
      
        <label className="font-bold">To:</label>
        <br/><br/>
        <label className='mr-30'>Recruiter Name *</label>
        <label className='mr-15'>Recruiter Designation *</label>
        <label className='ml-5'>Company Name *</label>
        <br/>
        <input type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 mr-1' placeholder='Recruiter Name'required/>
        <input type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 mr-1' placeholder='Designation'required/>
        <input type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 ml-1' placeholder='Company Name'required/><br /><br/>
        <br/>
        </div>
      </div>

      </div>
    <RouteComponent/>
    </>
  )
}

export default App

import { useState,useEffect,useRef } from 'react'
import logo from './assets/CareerForgeAI.png'
import logo2 from './assets/CareerForge-Ai.png'
import {toPng} from 'html-to-image';
import jsPDF from 'jspdf';
import NavBar from './pages/NavBar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'
import RouteComponent from './components/RouteComponent.jsx';
import { getCoverLetters, postData,getAllCoverLetters, getAllResumes} from './services/BackendHandler.js';
import userlogo from './assets/user.png';
import Auth from './pages/Auth.jsx';
import { checkLogin,handleLogout } from './services/BackendHandler.js';
import Design1 from './components/Design1.jsx';
import Design2 from './components/Design2.jsx';
import Design3 from './components/Design3.jsx';
import Design4 from './components/Design4.jsx';
import Design5 from './components/Design5.jsx';
import Design6 from './components/Design6.jsx';
function App() {
  const navigate=useNavigate();
  const [isOpen,setIsOpen]=useState(false);
  const [hovered,setHovered]=useState(false);
  const [user,setUser]=useState(false);
  const [loading,setLoading]=useState(true);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [coverLetterData,setCoverLetterData]=useState(null);
  const [AllCoverLetters,setAllCoverLetters]=useState(null);
  const [allResumes,setAllResumes]=useState(null);
  // selectedDesign&&console.log("Selected Design in App.jsx:",selectedDesign);
  // getCoverLetters({setCoverLetterData});
  const slideMenu=()=>{
    setIsOpen(!isOpen);
  }
  const getFormData=async(data)=>{
    const result=await postData({data});
    selectDesignPage();
  }
  const selectDesignPage=()=>{
    navigate('/cover-letter/select-design');
    window.location.reload();
  }
  useEffect(()=>{
    const fetchUser=async ()=>{
      const currentUser=await checkLogin({setUser});
      setLoading(false);
    };

fetchUser();},[]);
  useEffect(()=>{
    if(user){
      getCoverLetters({setCoverLetterData});
      getAllCoverLetters1();
      getAllResumes1();
    }
  },[user]);
  const designRef=useRef();
  const confirmDesign=async ()=>{
    if(!designRef.current){ return }
    const printContent=designRef.current;
    const imgData = await toPng(printContent, { quality: 1.0 ,pixelRatio: 3,cacheBust:true });
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${user.name}_Cover_Letter_${Date.now()}.pdf`);
  };
  const getAllCoverLetters1=async ()=>{
    const data=await getAllCoverLetters();
    setAllCoverLetters(data);
  }
  const displayCoverLetters=()=>{
    getAllCoverLetters1();
    navigate('/displayCoverLetters');
  }
  const getAllResumes1=async ()=>{
    const data=await getAllResumes();
    console.log("All resumes data in App.jsx:",data);
    setAllResumes(data);
    console.log("All resumes state in App.jsx:",allResumes);
  }
  const DisplayResumes=()=>{
    getAllResumes1();
    navigate('/displayResumes');
  }
  if (loading){
    return <div>Loading...</div>;
  }
  
  if(!user){
    return <Auth />
  }
  else{
  return (
    <>
    <div className='overflow-hidden'>
      <NavBar isOpen={isOpen}/>
      <button onClick={slideMenu} className="fixed mt-0.5 h-1/14 p-5 hover:bg-gray-300 bg-white rounded-md   "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-list" viewBox="0 0 15 15">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></button>
      <div  className=" p-4 border-b border-gray-300 h-15 flex items-center space-x-10 min-w-full" >
      <div className='flex flex-row m-10'>
          <img src={logo2} className='h-65 w-65 -translate-y-[105px]'/>
      </div>
        <div className=" bg-gray-200 ml-20 border border-gray-300 p-2 rounded w-35 h-8 align-middle  flex right-20 space-x-2 translate-x-130 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
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
      <div style={{opacity: hovered ? '1.0' : '0.0'}} className='absolute border border-gray-300  rounded-3xl right-1/80  flex flex-col p-2 bg-white hover:shadow-2xl transition-opacity duration-300  w-70 z-1'onMouseEnter={() => {hovered&&setHovered(true)}} onMouseLeave={() => setHovered(false)}>
          <div className='flex flex-col items-center justify-center p-3 space-y-3'>
          <img src={userlogo} className="rounded-full  h-12 w-12" />
          <span className='text-2xl font-extrabold'>{user.name}</span>
          <span className='text-gray-500'>{user.email}</span>
          </div>
          <button className='hover:text-gray-400 pr-30 pt-2' onClick={()=>displayCoverLetters()}>Cover-Letters</button>
          <button className='hover:text-gray-400 pr-39 pt-2' onClick={()=>DisplayResumes()}>Resumes</button>
          <button className='hover:text-gray-400 pr-48 pt-2'>Jobs</button>
          <span className='text-gray-400'>______________________________________</span>
          <button onClick={()=>handleLogout({setUser})} className='hover:text-gray-400  p-3 '>Logout</button>
      </div>
      {/* <div style={{ marginLeft : isOpen ? '25%' :'0',overflowY:"auto"}}className="flex justify-middle  transition-all duration-300    space-x-5 md:w-3/4 bg-gray-200 overflow-auto h-full pl-4 pt-4 pr-4 top-15 h-15">
        <div className='flex items-center justify-center w-full h-full rounded-2xl bg-white p-4 shadow-md'>
        <Link to='/fillin' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Fill in</Link>
        <Link to='/select-design' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Select Design</Link>
        <Link to='/generate-cv' className='focus:outline-none hover:text-blue-600 font-semibold text-black  py-2 px-4 rounded-full mb-4 '>Generate CV</Link></div>
     </div> */}
     
    </div>

    <RouteComponent  getFormData={getFormData} isOpen={isOpen} setIsOpen={setIsOpen} setSelectedDesign={setSelectedDesign} selectedDesign={selectedDesign} confirmDesign={confirmDesign} coverLetterData={AllCoverLetters} displayCoverLetters={displayCoverLetters} allResumes={allResumes}/>
    {(selectedDesign&&coverLetterData)&&
    <div style={{ marginLeft: '75%' }}className="transition-all duration-300 md:w-1/4 h-20  p-4 top-100 fixed flex items-center justify-center ">
      <div className='bg-white p-6 rounded-2xl shadow-2xl w-80 h-auto border border-gray-300'>
        {selectedDesign ? <h1 className='font-bold text-center pb-5'>Selected Design Preview</h1> :  <h1 className='font-bold text-center pb-5'>No Design Selected</h1>}
        <br />
        
        {selectedDesign==1&&    <div className='overflow-auto  max-h-[450px] w-[250px] border border-gray-200 shadow-md z-0'><Design1 designRef={designRef} data={coverLetterData}/></div>}
        {selectedDesign==2&&    <div className='overflow-auto max-h-[450px] max-w-[250px] z-0'><Design2 designRef={designRef} data={coverLetterData}/></div>}
        {selectedDesign==3&&    <div className='overflow-auto max-h-[450px] max-w-[250px] z-0'><Design3 designRef={designRef} data={coverLetterData}/></div>}
        {selectedDesign==4&&    <div className='overflow-auto max-h-[450px] max-w-[250px] z-0'><Design4 designRef={designRef} data={coverLetterData}/></div>}
        {selectedDesign==5&&    <div className='overflow-auto max-h-[450px] max-w-[250px] z-0'><Design5 designRef={designRef} data={coverLetterData}/></div>}
        {selectedDesign==6&&    <div className='overflow-auto max-h-[450px] max-w-[300px] z-0'><Design6 designRef={designRef} data={coverLetterData}/></div>}
      </div> 
    </div>}
    </>
  )
}
}

export default App

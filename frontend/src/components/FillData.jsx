import upload from '../assets/upload.png'
import { useRef } from 'react';
const FillData = ({isOpen,getFormData}) => {
  const jobDescription=useRef('');
  const skills=useRef('');
  const resume=useRef(null);
  const recruiterName=useRef('');
  const designation=useRef('');
  const companyName=useRef('');
  const handleClick=async(e)=>{
    e.preventDefault();
    const data={
      jobDescription:jobDescription.current.value,
      skills:skills.current.value,
      resume:resume.current.files[0],
      recruiterName:recruiterName.current.value,
      designation:designation.current.value,
      companyName:companyName.current.value
    };
    getFormData(data);

  }
    return (
    <>
    <form onSubmit={handleClick} style={{ marginLeft: isOpen ? "25%" : "0" }}className={`transition-all duration-300 ${isOpen? "md:w-3/4" : "md:w-full"} h-full bg-gray-200 p-4 `}>
    <div>
    <div className='bg-white p-6 rounded-2xl shadow-md'>
      <h1 className='font-bold text-center pb-5'>Generate your Cover Letter </h1>
      <br />
      <h1 className='font-semibold'>Content:</h1>
      <br/>
      <p>Paste the job description below *</p>
      <br/>
      <textarea ref={jobDescription} className='focus:outline-none border border-gray-300 w-full h-1/4 rounded-md p-2' placeholder='Job Description...' required></textarea>
      <br/><br/>
      <p>Which skills should be the focus?</p>
      <br />
      <input ref={skills} type='text' className='focus:outline-none border border-gray-300 w-full h-10 rounded-md p-2' placeholder='Skills that should be highlihted' required/>
      <br />
      <h1 className='font-semibold mt-4'>Upload your Resume *</h1>
      <br />
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-100 transition">
        <img src={upload} alt="Upload" className="mx-auto mb-4 h-12 w-12"/>
        <input ref={resume} type='file' className='focus:outline-none w-full h-full' required/>
    </div>
      </div>
     <br/></div>
      <div className='bg-white p-4 rounded-2xl shadow-md mb-10'>
      
        <label className="font-bold">To:</label>
        <br/><br/>
        <div className='grid  md:grid-cols-3 gap-4'>
        <label className=''>Recruiter Name *</label>
        <label className=''>Recruiter Designation *</label>
        <label className=''>Company Name *</label>
        <input ref={recruiterName} type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 mr-1' placeholder='Recruiter Name'required/>
        <input ref={designation} type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 mr-1' placeholder='Designation'required/>
        <input ref={companyName} type='text' className='focus:outline-none border border-gray-300 h-10 rounded-md p-2 ml-1' placeholder='Company Name'required/><br /><br/>
        <br/>
        </div></div>
        <div className='justify-center flex mb-10'>
        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md'>Generate Cover Letter</button>
        </div>
      </form>
        </>
    )
}
export default FillData;
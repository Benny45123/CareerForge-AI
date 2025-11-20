import { useRef, useState } from "react";
const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    console.log("Email:", emailValue);
    console.log("Password:", passwordValue);
} 
const Auth=() =>{
    const email=useRef();
    const password=useRef();
    const name=useRef();
    const [isSignUpMode,setIsSignUpMode] = useState(true);
    const ChangeClasses = ` p-8 rounded-xl shadow-md  w-full bg-auto bg-gradient-to-r from-violet-600 to-purple-800 flex  justify-center flex-col ${
        isSignUpMode ? "transition-transform duration-800 ease-in-out -translate-x-full opacity-100" : "transition-transform duration-800 ease-in-out  opacity-100"
      }`;
    return (
        <>
        
        <div className= "flex flex-row items-center justify-center min-h-screen bg-gray-100 ">
        <div className="flex flex-row items-stretch ">
        <div className=" bg-white  p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl text-center mb-10 font-extrabold bg-gradient-to-r from-violet-600 to-purple-800  text-transparent bg-clip-text ">Sign Up</h1>
        <form onSubmit={() => {handleSubmit()}}>
            <div className="border border-gray-300 rounded px-2 py-1 flex items-center gap-2 m-2 has-focus-visible:shadow-md shadow-violet-400">
            <input className='focus:outline-0 w-full ' placeholder="Name" type="text" name="email" ref={name} required/></div><br/><br/>
            <div className="border border-gray-300 rounded px-2 py-1 flex items-center gap-2 m-2 has-focus-visible:shadow-md shadow-violet-400">
            <input className='focus:outline-0 w-full ' placeholder="Email" type="email" name="email" ref={email} required/></div><br/><br/>
            <div className="border  border-gray-300 rounded px-2 py-1 flex items-center gap-2 m-2 has-focus-visible:shadow-md shadow-violet-400">
            <input className="focus:outline-none w-full " placeholder="Password" type="password" name="password" ref={password} required/></div><br/>
            <div className="flex justify-center">
            <button className='rounded-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-800 text-white p-3 pl-7 pr-7 font-medium hover:bg-bright-color hover:shadow-md shadow-violet-400 focus:ring-primary-300' type="submit">Sign Up</button></div>
        </form>
        </div>
        <div className={ChangeClasses}> 
        <h1 className="text-3xl text-center  mb-10 text-white font-extrabold ">Hello Friend!</h1>
        <p className=" text-center text-gray-200 font-mono text-sm ">Enter your personal data to stay connected with us!!</p>
        <button className='mt-12 rounded-2xl  shadow-violet-600 font-mono text-gray-200 border border-gray-400 p-3 pl-2 pr-2 font-medium text-sm hover:bg-bright-color hover:shadow-md focus:ring-primary-300' onClick={() => {setIsSignUpMode(!isSignUpMode)}}>Sign In</button>
        </div>
        </div>
        </div>  
        </>
    );
}
export default Auth;
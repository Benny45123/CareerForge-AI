const ResumePage=({isOpen})=>{
    return (
        <>
            <div  className={`transition-all duration-300 h-2 bg-gray-200 p-4 ${isOpen ? "md:w-3/4 ml-[25%]" : "md:w-full ml-0"} min-h-screen`}>
                <div className="rounded-md bg-white p-6 shadow-md"></div>
            </div>
        </>
    )
}
export default ResumePage;
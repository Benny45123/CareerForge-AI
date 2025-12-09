const Design4 = ({data}) => {

    const ACCENT_COLOR = 'teal-500';
    return (
        <>
        <div className="max-w-[210mm] min-h-[297mm] mx-auto my-10 bg-white shadow-xl border border-gray-200 relative overflow-hidden">
        <div className="bg-gray-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-1">{data.name}</h1>
            <p className="text-lg mb-4">{data.role}</p>


            <div className="flex flex-col items-center space-y-4 text-sm">

                <p>📧 Email: {data.email}</p>
                <p>🔗 Linkedin: {data.linkedin}</p>
                <p>📞 Phone: {data.phone}</p>
            </div>

            <div className={`h-1 bg-${ACCENT_COLOR} mt-3 -mx-6`}></div>
        </div>

        <div className="p-12 text-gray-800">
            

            <p className="whitespace-pre-line text-sm leading-relaxed">{data.generatedLetter}</p>


        </div>



    </div>
        </>
    )
}
export default Design4;
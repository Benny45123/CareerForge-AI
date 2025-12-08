const Design3=()=>{
    const PRIMARY_COLOR = 'bg-gray-800'; 
    const ACCENT_COLOR = 'bg-teal-500'; 
    return (
        <>
    <div className="max-w-[210mm] min-h-[297mm] mx-auto my-10 bg-white shadow-xl border border-gray-200 relative overflow-hidden">
      

      <div className="grid grid-cols-[30%_70%] h-full">
        

        <div className={`text-white ${PRIMARY_COLOR} p-8 relative`}>
          

          <div className={`absolute top-0 right-0 h-10 w-10 ${ACCENT_COLOR}`}></div>
          <div className={`absolute top-10 right-0 h-10 w-8 ${ACCENT_COLOR} opacity-70`}></div>


          <div className="mt-12 mb-16">
            <h1 className="text-3xl font-bold mb-1">Sophia Rodriguez</h1>
            <p className="text-lg">Senior Software Engineer</p>
          </div>

          <div className="space-y-3 text-xs">

            <p>📧 Email: sophia.rodriguez@email.com</p>
            <p>📞 Phone: (202) 555-0199</p>
            <p>🔗 LinkedIn: linkedin.com/in/sophiarodriguez</p>
          </div>


          <div className={`absolute bottom-0 right-0 h-12 w-full ${ACCENT_COLOR} opacity-70`}></div>
          <div className={`absolute bottom-12 right-0 h-12 w-full ${ACCENT_COLOR}`}></div>

        </div>


        <div className="p-10 text-gray-800">
            

            <div className="text-right text-xs mb-10 space-y-1">
                <p>Date</p>
                <p>[Hiring Manager Name]</p>
                <p>Company Address</p>
            </div>

            <h2 className="text-sm font-bold mb-4">
                Lorem ipsum dolor
            </h2>


            <p className="mb-4 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, commem corestasss olegres okimpa wescr rbstewmme, etiovlesimeat dent acit ant stoogl sterntumss nuvsior ets wesr inuentim wend aleeant drene teamserenase blens s eneasa sitert canen imnowam as an onis
                isade dresesr stes dresr etertss mras incas srtse cimse rnesr concim a rnearede loansemeners dawn active netstpe ctue rnwesss dawn luon meanat.
            </p>

            <p className="mb-4 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, comem corestasss olegres okimpa wescr rbstewmme, etiovlesimeat dent acit ant stoogl sterntumss nuvsior ets wesr inuentim wend aleeant drene teamserenase blens s eneasa sitert canen imnowam as an onis
                isade dresesr stes dresr etertss mras incas srtse cimse rnesr concim a rnearede loansemeners dawn active netstpe ctue rnwesss dawn luon meanat.
            </p>

            <p className="mb-12 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, commem corestasss olegres okimpa wescr rbstewmme, etiovlesimeat dent acit ant stoogl sterntumss nuvsior ets wesr inuentim wend aleeant drene teamserenase blens s eneasa sitert canen imnowam as an onis
                isade dresesr stes dresr etertss mras incas srtse cimse rnesr concim a rnearede loansemeners dawn active netstpe ctue rnwesss dawn luon meanat.
            </p>

            <div className="text-right text-sm mt-12">
                <p>Sincerely,</p>
                <p className="mt-2 font-semibold">Sophia Rodriguez</p>
            </div>
        </div>
        
      </div>
    </div>
        </>
    )
}
export default Design3;
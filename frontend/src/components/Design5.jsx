const Design5 =({data})=>{

    const HEADER_BG = 'bg-gray-800'; // Dark Blue/Gray for the header
  const ACCENT_COLOR = 'bg-yellow-600'
    return (
        <>
        <div className="max-w-[210mm] min-h-[297mm] mx-auto my-10 bg-white shadow-xl border border-gray-200 relative overflow-hidden">
      

      <div className={`text-white ${HEADER_BG} p-10`}>
        <div className="flex justify-between items-center">
          

          <div>
            <h1 className="text-3xl font-bold mb-1 text-yellow-600">{data.name}</h1>
            <p className="text-lg opacity-90">{data.role}</p>
          </div>

          <div className="flex space-x-6 text-sm">

            <p className="flex items-center">
              <span className="mr-1">📧</span>  {data.email}
            </p>
            <p className="flex items-center">
              <span className="mr-1">📞</span> {data.phone}
            </p>
            <p className="flex items-center max-w-xs ">
              <span className="mr-1">🔗</span>{data.linkedin}
            </p>
          </div>

        </div>
      </div>

      <div className={`h-1 ${ACCENT_COLOR} -mt-0.5`}></div>


      <div className="p-12 pt-10 text-gray-800">
        
{/* 
        <div className="flex justify-between items-start text-sm mb-10">
            <p></p>
            <div className="text-right space-y-1">
                <p>[Hiring Manager Name]</p>
                <p>[Company Name]</p>
                <p>[Company Address]</p>
            </div>
        </div>


        <p className="mb-4 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, elsm eeryidsmet tuinru ecbibunt ut boren a .aliqua, eeninclusii ut vibcetn. Vels eacit iit nad em iquit in endlore miom alqua.
        </p>

        <p className="mb-4 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetetusr adipiipiscing elit, extted dore eoryidsmed cokre siniieint utlore ad mgna aliqnat claetere hirstrim in mean a velapa raadore in eisrnida erdorias wetliinrn vemema, ist niiteilersxreloiis ait dolore st ulatiin eiise at corrationa. Dutaaita ens napcaniqiuie, ex eniaia nhail mirucais nnuilit ull exatup iont temsipenpiteiaipra walt chiens. Duet snrpodreim eetm delerree, pueficn in ctinne in delrrezges in tndcalruifule cuomia aliqqua.
        </p>

        <p className="mb-12 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet, consectetetusr adipiipiscing elit, elittur eepridsmet tutareinisint utlore nd migm alibtreat clnslit rispir int velseqas na tiornna máqua cilorl mrgna at ulzerre ex alittuiva hioe vellwelem cniare aitue snmi. El rersidólore cõnsectiore Dilatun e extr veftiiriin eus puanat, hist ut forneistula alio es e vett giat poreeciaate nd iai des nejeccuunndd enfeat ex conslrnm, ent calprea ad inioireen ent vest conirofemtt n ud a fu atum.
        </p>


        <div className="mt-10">
          <p className="text-sm">Sincerely</p>

          <div className="text-sm font-semibold mt-1">
             [Signature] 
          </div>
          <p className="text-lg font-bold">Eleanor Vance</p>
        </div> */}
        <p className="whitespace-pre-line text-sm leading-relaxed">{data.generatedLetter}</p>

      </div>
    </div>
        </>
    )
}
export default Design5;
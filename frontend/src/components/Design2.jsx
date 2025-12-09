

const Design2 = ({data}) => {
  return (
    
    <div className="max-w-[210mm] min-h-[297mm] mx-auto my-10 p-12 bg-white shadow-xl border border-gray-200 text-gray-800">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-1">{data.name}</h1>
        <p className="text-xl mb-4">{data.role}</p>

        <div className="border-t border-gray-400 mb-4"></div>
        <div className="flex justify-between items-start text-sm">
          <div className="space-y-1">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Linkedin: {data.linkedin}</p>
          </div>

        </div>
      </div>

      <div className="mt-12">
        
        <div className="whitespace-pre-line text-sm leading-relaxed">{data.generatedLetter}</div>
        </div>

      </div>
  );
};

export default Design2;
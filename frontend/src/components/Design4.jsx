const Design4 = () => {
    const ACCENT_COLOR = 'teal-500';
    return (
        <>
        <div className="max-w-[210mm] min-h-[297mm] mx-auto my-10 bg-white shadow-xl border border-gray-200 relative overflow-hidden">
        <div className="bg-gray-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-1">Oliver Thompson</h1>
            <p className="text-lg mb-4">Lead AI/ML Engineer</p>

            {/* Contact Info Row */}
            <div className="flex flex-col items-center space-y-4 text-sm">
                {/* Icons are placeholders; replace with actual icons (e.g., from react-icons) */}
                <p>📧 Email: oliver.thompser@email.com</p>
                <p>🔗 Linkedin: linkedin.com/in/toliverthompson</p>
            </div>

            {/* Horizontal Accent Line */}
            {/* The -mx-6 pushes the line out to the edge of the dark header padding */}
            <div className={`h-1 bg-${ACCENT_COLOR} mt-3 -mx-6`}></div>
        </div>

        {/* ✍️ Main Letter Content Section */}
        <div className="p-12 text-gray-800">
            
            {/* Recipient Address Block (Right-aligned) */}
            <div className="text-right text-sm mb-10">
                <p>[Hiring Manager Name]</p>
                <p>[Company Address]</p>
            </div>

            {/* Content Paragraphs */}
            <p className="mb-4 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doo eiunsem do eulsnna uh enlore naloree e deloris atilqua. Ut ens nesltrus. Duistis misim telianis.
            </p>
            <p className="mb-4 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe eiursem do eulsnna nckum tartarat mtiure acruim imbine onstiure aliqis Ut mniilm nainn cusroe xe eliatt unld migmdoois valiquist ut sinuit emad ernoonis ehenin alliquiai.
            </p>
            <p className="mb-10 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed don eiunsem do elit, siss etiium vetitunt Ut eore errtim intslneve nagns alliqua. Ut enilis magna cliteriin elkehtt essicord extpoe ctuluiri auaim ragnia wal aliqnsi Ut arim erim corenest nltumiore mulll-uua icais elll ctor eo em prroi qupx exsue ett vodis ci-oulont sul fetiiirat.
            </p>

            {/* Signature Block (Right-aligned) */}
            <div className="text-right text-sm mt-12">
                <p>Sincerely,</p>
                <p className="mt-2 font-semibold">Oliver Thompson</p>
            </div>

        </div>

        {/* ⬇️ Graphical Footer (Placeholder for the subtle background pattern) */}
        {/* The actual graphic would be a background image or a complex SVG/CSS. */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gray-50 opacity-50 z-0 pointer-events-none">
             {/* You would set the background image here in a real-world scenario */}
        </div>

    </div>
        </>
    )
}
export default Design4;
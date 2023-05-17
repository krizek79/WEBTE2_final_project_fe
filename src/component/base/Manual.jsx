import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default function Manual() {

    const exportToPDF = () => {
        const element = document.getElementById("divToExport");

        html2canvas(element).then((canvas) => {
            //const textData = element.innerText;
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;


            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save("exported-document.pdf");
        });
    };

    return (
        <>
        <div className="relative container px-4 mx-auto py-6">
            <div className="max-w-5xl px-3 mx-auto rounded-xl shadow-xl">
                <div id="divToExport" >
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">
                        Manual
                    </h2>
                    <p className="text-neutral-500 text-xl mt-3 px-auto">
                        User Manual for NumeralNinja Website
                    </p>
                </div>
                <div className="max-w-2xl mx-auto mt-4 grid divide-y divide-neutral-200 border-b-2 border-light border-dashed">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Teacher role: </span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path
                                        d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                The main purpose of teaching is to facilitate the learning and development of students.
                                It involves the transfer of knowledge, skills, and values from teachers to learners in an
                                educational setting.
                            </p>
                        </details>
                    </div>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-4 border-b-2 border-light border-dashed ">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Student role: </span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path
                                        d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                The main purpose of studying is to acquire knowledge, develop skills, and gain a
                                deeper understanding of a particular subject or field of study. Studying involves
                                engaging with educational materials, such as textbooks, lectures, research articles,
                                and other learning resources, to actively learn and absorb information.
                            </p>
                        </details>
                    </div>
                </div>
                </div>

                <div className="flex flex-col items-center mt-5 pb-3">
                    <button
                        onClick={exportToPDF}
                        type="submit"
                        className="mt-10 rounded-md bg-dark px-10 py-2 text-white
                                                hover:bg-azure"
                    >
                        Export to pdf
                    </button>
                </div>
            </div>
        </div>
        </>
)
}
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
            pdf.save("NumeralicalNinja-manual.pdf");
        });
    };

    return (
        <>
        <div className="relative container px-4 mx-auto py-6 ">
            <div className="max-w-5xl px-3 mx-auto rounded-xl shadow-xl">
                <div id="divToExport" >
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">
                        Manual
                    </h2>
                    <p className="text-neutral-500 text-xl mt-3 px-auto">
                        User Manual for NumericalNinja Website
                    </p>
                </div>
                <div className="max-w-2xl mx-auto mt-4 grid divide-y divide-neutral-200 border-b-2 border-light border-dashed">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Teacher`s Manual:</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path
                                        d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                                <ul className="space-y-4 text-neutral-500 list-decimal list-inside group-open:animate-fadeIn">
                                    <li>Registration and Role Selection:
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                            <li>Upon opening the NumericalNinja application, you can register as a teacher.</li>
                                            <li>During registration, choose the (Teacher) option and complete the registration process.</li>
                                        </ul>
                                    </li>

                                    <li>Managing Tasks for Students:
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                            <li>After logging in as a teacher, you will have access to the main interface of the application.</li>
                                            <li>On the main interface, you will find options for managing tasks for students.</li>
                                            <li>Click on the (Add) button to select task files to send to students.</li>
                                            <li>For each selected file, specify the number of points and the time period (from - to) in which students should complete the task.</li>
                                        </ul>
                                    </li>

                                    <li>Overview of Student Results:
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                            <li>Teachers can access a clear table displaying all students and their results.</li>
                                            <li>Clicking on a student`s name will display a detailed table of their individual tasks and results.</li>
                                            <li>The tables are fully functional, allowing sorting and searching of data.</li>
                                            <li>The (CSV) button above the tables allows you to export the table in CSV format.</li>
                                        </ul>
                                    </li>

                                    <li>Displaying Personal Information:
                                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                            <li>Upon logging in as a teacher, your name, last name, and role type (teacher) will be displayed on the top bar.</li>
                                        </ul>
                                    </li>
                                </ul>
                        </details>
                    </div>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-4 border-b-2 border-light border-dashed ">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Student`s Manual: </span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path
                                        d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="space-y-4 text-neutral-500 list-decimal list-inside group-open:animate-fadeIn">
                                <li>Registration and Role Selection:
                                    <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>Upon opening the NumeralNinja application, you can register as a student.</li>
                                        <li>During registration, choose the (Student) option and complete the registration process.</li>
                                    </ul>
                                </li>

                                <li>Selecting and Generating Tasks:
                                    <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>After logging in as a student, you will see the available task files added by the teacher.</li>
                                        <li>Select the number of exercises you want to solve.</li>
                                        <li>After selecting the number of exercises, the system will randomly generate the exercises from the chosen file.</li>
                                        <li>The exercises will be displayed as previews with links to open each exercise.</li>
                                    </ul>
                                </li>

                                <li>Solving Tasks:
                                    <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>Clicking on an exercise will display a submission form with the task and, if necessary, an image.</li>
                                        <li>After solving the task, submit your answer and proceed to the next exercise.</li>
                                    </ul>
                                </li>

                                <li>Displaying Personal Information:
                                    <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                                        <li>Upon logging in as a student, your name, last name, and role type (student) will be displayed on the top bar.</li>
                                    </ul>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
                </div>

                <div className="grid divide-y divide-neutral-200 max-w-2xl mx-auto mt-4 border-b-2 border-light border-dashed ">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>Completion of the Final task: </span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="32" shapeRendering="geometricPrecision" stroke="currentColor"
                                         strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 32 32" width="32"><path
                                        d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Used GitHub
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Responsiveness
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Registration and Authentication
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Utilization of Roles
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Example Generation
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Utilization of Images
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Example Overview
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Self-Generation and Submission
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Selection of Examples
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Selection of Example Files
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Scoring and Time Limit Setting
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Recording Examples using an Editor
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Submission of Examples
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Student Table and Detailed Student Table
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Manual
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Video
                                </li>

                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Multi-language
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Result Validation
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Docker Package
                                </li>
                            </ul>
                        </details>
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
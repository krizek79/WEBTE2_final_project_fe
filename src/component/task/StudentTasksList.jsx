import {useEffect, useState} from "react";
import studentService from "../../service/StudentService.js";
import TextWithLatex from "../../util/TextWithLatex.jsx";

export default function StudentTasksList() {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        studentService.getTaskListByStudent()
            .then(response => {
                if (response.status === 200) {
                    setOptions(response.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const handleSelectChange = (e, id) => {
        const value = e.target.value;
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id ? { ...option, selectedOption: value } : option
            )
        );
    };

    return(
        <div className="font-serif flex items-center py-6 flex-col bg-white">
            <section className="bg-light p-5 mx-5 rounded-xl shadow-xl pb-4">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="max-w-sm font-bold font-serif text-2xl mb-3">
                        My Tasks
                    </div>
                </div>
                <div
                    className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3
                    lg:grid-cols-4"
                >
                    {options.map((option) => (
                        <article
                            key={option.id}
                            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform
                            hover:scale-105 duration-300 flex flex-col justify-between"
                        >
                            <a
                                href={"/task?id=" + option.id}
                                id={option.id}
                                onChange={(e) => handleSelectChange(e, option.id)}
                                className="flex-grow"
                            >
                                <div className="mt-1 p-2">
                                    <span className="text-slate-700">{option.file_name}</span>
                                    <p className="truncate ... text-sm text-slate-400" id="myText">
                                        <TextWithLatex text={option.task} />
                                    </p>
                                </div>
                            </a>
                            <span className="flex justify-center">
                                Click to open
                            </span>
                        </article>

                    ))}
                </div>
            </section>
        </div>
    );
}
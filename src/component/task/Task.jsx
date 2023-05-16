import React, {useEffect, useState} from 'react'
import taskService from "../../service/TaskService.js"
import TextWithLatex from "./TextWithLatex.jsx";
import MathInput from "./MathInput.jsx";

export default function Task(props) {

    const [task, setTask] = useState({
        description: "\n" +
            "    Nájdite prenosovú funkciu $F(s)=\\dfrac{Y(s)}{W(s)}$ pre systém opísaný blokovou schémou: \n" +
            "\n" +
            "    \\includegraphics{zadanie99/images/blokovka01_00002.jpg} \n",
        imageUrl: "../../../public/blokovka01_00002.jpg"
    })

    const [request, setRequest] = useState({
        answer: null
    })

    useEffect(() => {
        // taskService.getTaskById(props.id)
        //     .then(response => {
        //         if (response.status === 200) {
        //             console.log(response.data)
        //         }
        //     })
        //     .catch(e => {
        //         console.log(e.response.status + ": " + e.response.data.message)
        //     })
    }, [])

    function handleChange(e) {
        setRequest({ ...request, [e.target.name]: e.target.value })
    }

    function submit() {
        taskService.submitTask(request)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                }
            })
            .catch(e => {
                console.log(e.response.status + ": " + e.response.data.message)
            })
    }

    function removeIncludeGraphics(str) {
        const regex = /\\includegraphics\{[^}]*}/g;
        return str.replace(regex, '');
    }

    return (
        <main className="flex px-3 md:px-12 py-12 w-full justify-center">
            <div className="flex flex-col justify-center gap-y-6 w-11/12 md:w-3/5">
                <div>
                    <a
                        href="/home"
                        className="hover:cursor-pointer justify-start underline text-dark hover:text-azure"
                    >
                        Back to home page
                    </a>
                </div>
                <div className="flex flex-col shadow-md rounded-xl p-6 gap-y-3 bg-light">
                    <p className="w-full">
                        <TextWithLatex text={removeIncludeGraphics(task.description)}/>
                    </p>
                    {task.imageUrl && (
                        <div className="py-6 rounded-t-xl shadow-sm w-full h-auto">
                            <img src={task.imageUrl} alt="Block" className="w-full h-auto"/>
                        </div>
                    )}
                    <form className="w-full flex flex-col">
                        <div id="mathInput" className="">
                            <MathInput/>
                        </div>
                        <button
                            type="submit"
                            className="rounded-md bg-dark py-2 text-white hover:bg-azure"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>


            {/*<div className="px-2 md:px-6 my-5 w-full text-slate-700 dark:text-dark flex flex-col items-center">*/}
            {/*    <a*/}
            {/*        href="/home"*/}
            {/*        className="hover:cursor-pointer justify-start w-full underline text-dark hover:text-azure"*/}
            {/*    >*/}
            {/*        Back to home page*/}
            {/*    </a>*/}
            {/*    <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 ">*/}
            {/*        <div*/}
            {/*            className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-light shadow-md"*/}
            {/*        >*/}
            {/*            <div className="w-full p-6 flex flex-col justify-between h-auto overflow-auto lg:h-auto">*/}
            {/*                <p className="">*/}
            {/*                    <TextWithLatex text={removeIncludeGraphics(task.description)}/>*/}
            {/*                </p>*/}
            {/*                {task.imageUrl && (*/}
            {/*                    <div className="py-6 rounded-t-xl w-full h-64 shadow-sm">*/}
            {/*                        <img src={task.imageUrl} alt="Block" className="w-full h-full"/>*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*                <form className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">*/}
            {/*                    <div id="mathInput" className="">*/}
            {/*                        <MathInput/>*/}
            {/*                    </div>*/}
            {/*                    <button*/}
            {/*                        type="submit"*/}
            {/*                        className="mt-5 rounded-md bg-dark px-10 py-2 text-white hover:bg-azure"*/}
            {/*                    >*/}
            {/*                        Submit*/}
            {/*                    </button>*/}
            {/*                </form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </main>
    )
}
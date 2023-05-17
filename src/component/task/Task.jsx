import {useEffect, useState} from 'react'
import studentService from "../../service/StudentService.js"
import TextWithLatex from "../../util/TextWithLatex.jsx";

export default function Task() {

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")

    const [task, setTask] = useState({
        task: "",
        image: "",
        file_name: "",
        points: 0
    })

    const [request, setRequest] = useState({
        answer: ""
    })

    useEffect(() => {
        studentService.getTaskById(id)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setTask(response.data)
                }
            })
            .catch(e => {
                console.log(e.response.status + ": " + e.response.data.message)
            })
    }, [])

    function submit(e) {
        e.preventDefault()
        console.log(request)
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
                    <h2 className="font-bold">{task.file_name} ({task.points} points)</h2>
                    <p className="w-full">
                        <TextWithLatex text={removeIncludeGraphics(task.task)}/>
                    </p>
                    {task.image && (
                        <div className="py-6 rounded-t-xl shadow-sm w-full h-auto">
                            <img src={task.image} alt="Block" className="w-full h-auto"/>
                        </div>
                    )}
                    <form className="w-full flex flex-col gap-y-3" onSubmit={submit}>
                        <label htmlFor="mathInput">Your answer:</label>
                        <math-field id="mathInput"></math-field>
                        <button
                            type="submit"
                            className="rounded-md bg-dark py-2 text-white hover:bg-azure"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
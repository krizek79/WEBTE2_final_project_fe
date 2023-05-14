import React, {useEffect, useState} from 'react'
import taskService from "../../service/TaskService.js"

export default function Task(props) {

    const [task, setTask] = useState({
        description: "",
        imageUrl: "../../../public/blokovka01_00002.jpg"
    })

    const [request, setRequest] = useState({
        answer: null
    })

    useEffect(() => {
        taskService.getTaskById(props.id)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                }
            })
            .catch(e => {
                console.log(e.response.status + ": " + e.response.data.message)
            })
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

    return (
        <div className="px-2 md:px-6 my-5 w-full text-slate-700 dark:text-dark flex flex-col items-center">
            <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 ">
                <div
                    className="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-light shadow-md"
                >
                    <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                        <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                            1. Example
                        </h1>
                        <p className="text-sm">
                            Nájdite prenosovú funkciu pre systém opísaný blokovou schémou:
                        </p>
                        {task.imageUrl && (
                            <div className="mt-5 rounded-t-xl w-full h-64 shadow-sm">
                                <img src={task.imageUrl} alt="Block" className="w-full h-full"/>
                            </div>
                        )}
                        <form className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                            <div className="mt-5 relative z-0 col-span-2">
                                <textarea
                                    name="message" rows="3"
                                    className="peer block w-full appearance-none border-0 border-b border-dark
                                    bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-600
                                    focus:outline-none focus:ring-0" placeholder="Your sollution"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-5 rounded-md bg-dark px-10 py-2 text-white hover:bg-azure"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
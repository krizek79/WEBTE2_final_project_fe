import {useEffect, useState} from "react";
import studentService from "../../service/StudentService.js";

export default function StudentTaskGenerator() {

    const [options, setOptions] = useState([])
    const [request, setRequest] = useState([])

    useEffect(() => {
        studentService.getAccessibleFiles()
            .then(response => {
                if (response.status === 200) {
                    setOptions(response.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    function submit(e) {
        e.preventDefault()
        console.log(request)
        studentService.generateTasks(request)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    location.reload()
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    function handleSelectChange(id, value) {
        const updatedRequest = [...request]; // Create a copy of the request array

        // Find the index of the request object with the matching id
        const index = updatedRequest.findIndex((item) => item.id === id);

        if (value > 0) {
            // If the value is greater than 0, update or create the request object
            if (index !== -1) {
                // If the request object already exists, update its tasksCount property
                updatedRequest[index] = { id, tasksCount: value };
            } else {
                // If the request object doesn't exist, create a new one and add it to the array
                updatedRequest.push({ id, tasksCount: value });
            }
        } else {
            // If the value is 0, remove the request object from the array
            if (index !== -1) {
                updatedRequest.splice(index, 1);
            }
        }

        setRequest(updatedRequest); // Update the request state with the updated array
    }

    return (
        <div className="font-serif flex items-center flex-col py-6 bg-white">
            <div className="bg-light p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="max-w-sm font-bold font-serif text-2xl">
                        Generate tasks
                    </div>
                </div>
                <form onSubmit={submit}>
                    <div
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4"
                    >
                        {options.map((option) => (
                            <div
                                key={option.id}
                                className="rounded-xl bg-white p-2 hover:shadow-xl"
                            >
                                <div
                                    className="flex flex-col p-4 rounded-xl bg-white "
                                >
                                    <div className="mt-3 font-semibold text-lg">{option.file_name}</div>
                                    <div className="flex flex-col">
                                        <label htmlFor={"numberOfTasks-fileId-" + option.id}>
                                            Number of tasks:
                                        </label>
                                        <input
                                            type="number"
                                            id={"numberOfTasks-fileId-" + option.id}
                                            value={request.find((item) => item.id === option.id)?.tasksCount || ''}
                                            onChange={(e) => {
                                                const inputValue = parseInt(e.target.value, 10);
                                                if (!isNaN(inputValue) && inputValue <= option.tasks_count) {
                                                    handleSelectChange(option.id, inputValue);
                                                }
                                            }}
                                            className="block w-full py-2 px-4 pr-3 rounded-md bg-white border
                                            border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark
                                            focus:border-azure"
                                            min={0}
                                            max={option.tasks_count}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button type={"submit"} className="bg-dark text-white px-4 rounded-full py-3 hover:bg-azure">
                            Generate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
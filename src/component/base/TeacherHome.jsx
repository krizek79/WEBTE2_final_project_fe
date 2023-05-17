import {useEffect, useState} from 'react';
import teacherService from "../../service/TeacherService.js";

export default function TeacherHome() {

    const [options, setOptions] = useState([]);
    const [request, setRequest] = useState([]);

    useEffect(() => {
        teacherService.getFiles()
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setOptions(response.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    function submit(e) {
        e.preventDefault()
        teacherService.sendCollectionsToStudents(request)
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

    function handleAddClick(id) {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id
                    ? {
                        ...option,
                        showInput: !option.showInput,
                        buttonText: option.showInput ? 'Add' : 'Remove',
                    }
                    : option
            )
        );

        setRequest((prevRequest) => {
            const option = options.find((option) => option.id === id);
            if (option.showInput) {
                return prevRequest.filter((item) => item.id !== id);
            } else {
                const existingItem = prevRequest.find((item) => item.id === id);
                if (existingItem) {
                    return prevRequest.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                points: option.points,
                            }
                            : item
                    );
                } else {
                    return [
                        ...prevRequest,
                        {
                            id: option.id,
                            points: option.points,
                        },
                    ];
                }
            }
        });
    }

    function handleChangePoints(id, value) {
        const parsedValue = parseInt(value, 10)

        if (parsedValue >= 1) {
            setOptions((prevOptions) =>
                prevOptions.map((option) =>
                    option.id === id ? { ...option, points: parsedValue } : option
                )
            )

            setRequest((prevRequest) =>
                prevRequest.map((item) =>
                    item.id === id ? { ...item, points: parsedValue } : item
                )
            )
        }
    }

    function handleChangeAccessFrom(id, value) {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id ? { ...option, accessibleFrom: value } : option
            )
        );

        setRequest((prevRequest) =>
            prevRequest.map((item) =>
                item.id === id ? { ...item, accessibleFrom: value } : item
            )
        );
    }

    function handleChangeAccessTo(id, value) {
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id ? { ...option, accessibleTo: value } : option
            )
        );

        setRequest((prevRequest) =>
            prevRequest.map((item) =>
                item.id === id ? { ...item, accessibleTo: value } : item
            )
        );
    }

    return (
        <>
            <form className="w-full" onSubmit={submit}>
                <div className="bg-white py-6">
                    <div className="md:px-8">
                        <div className="pr-4 pl-4 mr-auto ml-auto sm:px-6 lg:px-8">
                            <div
                                className="bg-light shadow-xl pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                                <div className="pr-0 pl-0">
                                    <div className="w-full flex justify-center font-bold font-sans text-2xl py-3">
                                        Define task collections
                                    </div>
                                    <div>
                                        {options.map((option) => (
                                            <div
                                                key={option.id}
                                                className="pt-6 pb-6 border-b-2 border-dark border-dashed"
                                            >
                                                <div className="flex flex-col md:flex-row items-center">
                                                    <div className="ml-4 flex-1 min-w-0">
                                                        <p
                                                            className="text-lg font-bold text-gray-800 truncate"
                                                        >
                                                            {option.file_name}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="flex mt-4 items-center sm:space-x-6 sm:pl-0
                                                        sm:mt-0"
                                                    >
                                                        <input type="checkbox" id={option.id} className="peer hidden"/>
                                                        <label
                                                            htmlFor={option.id}
                                                            className={`select-none cursor-pointer rounded-lg border-2 
                                                            border-dark py-3 px-6 font-bold transition-colors 
                                                            duration-200 ease-in-out ${option.showInput
                                                                ? 'peer-checked:bg-dark peer-checked:text-light ' +
                                                                'peer-checked:border-gray-200'
                                                                : ''
                                                            }`}
                                                            onClick={() => handleAddClick(option.id)}
                                                        >
                                                            {option.buttonText ? (option.buttonText) : ("Add")}
                                                        </label>
                                                    </div>
                                                </div>

                                                {option.showInput && (
                                                    <div className="flex:wrap justify-center items-center">
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <label htmlFor="points">Points:</label>
                                                            <input
                                                                type="number"
                                                                id="points"
                                                                className="border border-gray-300 rounded-md px-3 py-2
                                                                w-50 w-24"
                                                                value={option.points}
                                                                onChange={(e) => handleChangePoints(
                                                                    option.id, e.target.value
                                                                )}
                                                            />
                                                        </div>
                                                        <div className="flex justify-center">
                                                        <div
                                                            className="flex flex-col md:flex-row md:gap-x-3
                                                            items-center justify-center border rounded-md mt-3 gap-y-1"
                                                        >
                                                            <input
                                                                type="datetime-local"
                                                                id="accessibleFrom"
                                                                onChange={(e) => handleChangeAccessFrom(
                                                                    option.id, e.target.value
                                                                )}
                                                                className="focus:outline-none p-2
                                                                rounded border border-gray-300 w-full"
                                                            />
                                                            <div className="bg-dark text-white px-2 rounded">to</div>
                                                            <input
                                                                type="datetime-local"
                                                                id="accessibleTo"
                                                                onChange={(e) => handleChangeAccessTo(
                                                                    option.id, e.target.value
                                                                )}
                                                                className="focus:outline-none border p-2
                                                                rounded border-gray-300 w-full"
                                                            />
                                                        </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="flex flex-col items-center pb-3">
                                            <button
                                                type="submit"
                                                className="mt-10 rounded-md bg-dark px-10 py-2 text-white
                                                hover:bg-azure"
                                            >
                                                Send to students
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
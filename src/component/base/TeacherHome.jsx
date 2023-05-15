import {useState} from 'react';

export default function TeacherHome() {

    const [options, setOptions] = useState([
        {id: 'blok1', label: 'Option 1', showInput: false},
        {id: 'blok2', label: 'Option 2', showInput: false},
        {id: 'blok3', label: 'Option 3', showInput: false},
        {id: 'blok4', label: 'Option 4', showInput: false},
    ]);

    const handleAddClick = (id) => {
        setOptions((prevOptions) => prevOptions.map(
            (option) => option.id === id ? {...option, showInput: !option.showInput} : option));
    };

    return (
        <>
            <form>
                <div className="bg-white pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto">
                    <div className="pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:px-6 lg:px-8">
                            <div
                                className="bg-light shadow-xl mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                                <div className="pr-0 pl-0">
                                    <div className="w-full flex justify-center font-bold font-sans text-2xl py-3">
                                        Define new tasks
                                    </div>
                                    <div className="pr-0 pb-0 pl-0 mr-0 mb-0 ml-0">
                                        {options.map((option) => (
                                            <div key={option.id}>
                                                <div
                                                    className="flex mt-3 sm:items-center sm:justify-between sm:space-x-5">
                                                    <div className="flex items-center flex-1 min-w-0">
                                                        <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                            <p className="text-lg font-bold text-gray-800 truncate"> {option.label}</p>
                                                            <p className="text-gray-600 text-md">info</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-5 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                                        <input type="checkbox" id={option.id} className="peer hidden"/>
                                                        <label
                                                            htmlFor={option.id}
                                                            className={`select-none cursor-pointer rounded-lg border-2 border-dark py-3 px-6 font-bold transition-colors duration-200 ease-in-out ${option.showInput
                                                                ? 'peer-checked:bg-dark peer-checked:text-light peer-checked:border-gray-200'
                                                                : ''
                                                            }`}
                                                            onClick={() => handleAddClick(option.id)}
                                                        >
                                                            Add
                                                        </label>
                                                        {option.showInput && (
                                                            <input
                                                                type="number"
                                                                id="points"
                                                                className="border border-gray-300 rounded-md px-3 py-2 w-50 w-24"
                                                                placeholder="Points"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
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
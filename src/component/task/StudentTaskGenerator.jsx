import {useState} from "react";

export default function StudentTaskGenerator() {

    const [options, setOptions] = useState([
        { id: 'blok1', label: 'Blokovka 1', point: "10" },
        { id: 'blok2', label: 'Blokovka 2', point: "10" },
        { id: 'odozva1', label: 'Odozva 1 ', point: "5" },
        { id: 'odozva2', label: 'Odozva 2', point: "10" },
    ]);

    const handleSelectChange = (e, id) => {
        const value = e.target.value;
        setOptions((prevOptions) =>
            prevOptions.map((option) =>
                option.id === id ? { ...option, selectedOption: value } : option
            )
        );
    };

    return (

        <div className="font-serif flex items-center flex-col py-6 bg-white">
            <div className="bg-light p-5 rounded-xl shadow-xl mx-5 pb-4 flow-root">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="max-w-sm font-bold font-serif text-2xl">
                        My Task
                    </div>
                    <div className="font-light max-w-lg mt-5 text-sm">
                        Click to task and solved it
                    </div>
                </div>
                <form>
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
                                <div className="mt-3 font-semibold text-lg">{option.label}</div>
                                <div className="text-sm font-light">info</div>
                                <div className="my-4">
                                    <span className="font-bold text-base">Body: </span>
                                    <span className="font-bold text-base">{option.point}</span>
                                </div>

                                    <input
                                        type={"number"}
                                        id={option.id}
                                        placeholder="Count of tasks"
                                        value={option.selectedOption || ""}
                                        onChange={(e) => handleSelectChange(e, option.id)}
                                        className="block w-full py-2 px-4 pr-3 rounded-md bg-white border
                                        border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark
                                        focus:border-azure"
                                    >
                                    </input>
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
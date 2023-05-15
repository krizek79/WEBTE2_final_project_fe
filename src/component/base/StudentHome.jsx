import {useState} from "react";

export default function StudentHome() {

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
        <div className="flex items-center flex-col bg-white min-h-screen">
            <div className="bg-light p-10 rounded-xl shadow-xl mt-8 ml-5 mr-5 mb-0 pb-4  flow-root">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="max-w-sm font-bold font-sans">
                            Examples from teacher
                        </div>
                        <div className="font-light max-w-lg mt-5 text-sm">
                            You can choose the number of examples you want to solve
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12 mr-8  md:space-y-0 justify-center items-center mt-10">
                    {options.map((option) => (
                        <div key={option.id} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12 md:space-y-0 justify-center items-center">
                            <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-50 md:w-auto">
                                <div className="mt-3 font-semibold text-lg">{option.label}</div>
                                <div className="text-sm font-light">info</div>
                                <div className="my-4">
                                    <span className="font-bold text-base">{option.point}</span>
                                </div>
                                <div className="relative inline-block w-48">
                                    <select
                                        id={option.id}
                                        value={option.selectedOption || ""}
                                        onChange={(e) => handleSelectChange(e, option.id)}
                                        className="block w-full py-2 px-4 pr-8 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark focus:border-azure"
                                    >
                                        <option value="">Choose count</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        ))}
                        </div>
                    <div className="flex justify-center">
                        <button className="mt-12 bg-dark text-white px-4 rounded-full py-3 hover:bg-azure">
                            Generate
                        </button>
                    </div>
                </div>
        </div>
    );
}

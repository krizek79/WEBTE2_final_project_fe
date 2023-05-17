import {useState} from "react";


export default function StudentTasksList() {

    const [options, setOptions] = useState([
        { id: 'blok3-1', label: 'Blokovka 4', example: "Nájdite prenosovú funkciu pre systém opísaný blokovou schémou: "},
        { id: 'blok1-2', label: 'Blokovka 1', example: "Nájdite prenosovú funkciu pre systém opísaný blokovou schémou: " },
        { id: 'odozva1-1', label: 'Odozva 1 ', example: "Nájdite prenosovú funkciu pre systém opísaný blokovou schémou: " },
        { id: 'odozva2-1', label: 'Odozva 2 ', example: "Nájdite prenosovú funkciu pre systém opísaný blokovou schémou: " },
        { id: 'odozva2-4', label: 'Odozva 2 ', example: "priklad 2" },
        { id: 'odozva2-5', label: 'Odozva 2 ', example: "priklad 3" },
        { id: 'odozva2-6', label: 'Odozva 2 ', example: "priklad 4" },
        { id: 'odozva5-6', label: 'Odozva 2 ', example: "priklad 4" },
    ]);

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
                            hover:scale-105 duration-300 "
                        >
                            <a href="#"
                                id={option.id}
                                onChange={(e) => handleSelectChange(e, option.id)}
                            >
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src="../../../public/blokovka01_00002.jpg" alt="Blok photo" />
                                </div>
                                <div className="mt-1 p-2">
                                    <h2 className="text-slate-700">{option.label}</h2>
                                    <p className="truncate ... text-sm text-slate-400" id="myText">{option.example}</p>
                                    <div className="flex justify-center">
                                        <button
                                            className="mt-12 bg-dark text-white px-4 rounded-full py-3 hover:bg-azure"
                                        >
                                            Calculate
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </div>


    );
}
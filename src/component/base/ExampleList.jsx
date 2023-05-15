import {useState} from "react";

export default function ExampleList() {

  const [options, setOptions] = useState([
    { id: 'blok1-1', label: 'Blokovka 1', example: "priklad 1" },
    { id: 'blok1-2', label: 'Blokovka 1', example: "priklad 2" },
    { id: 'odozva1-1', label: 'Odozva 1 ', example: "priklad 1" },
    { id: 'odozva2-1', label: 'Odozva 2 ', example: "priklad 1" },
    { id: 'odozva2-4', label: 'Odozva 2 ', example: "priklad 2" },
    { id: 'odozva2-5', label: 'Odozva 2 ', example: "priklad 3" },
    { id: 'odozva2-6', label: 'Odozva 2 ', example: "priklad 4" },


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
    <div className="flex items-center flex-col bg-white min-h-screen">
    <section className="bg-light p-10 rounded-xl shadow-xl mt-8 ml-5 mr-5 mb-0 pb-4 ">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {options.map((option) => (
        <article key={option.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
          <a href="#"
             id={option.id}
             onChange={(e) => handleSelectChange(e, option.id)}
          >
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src="../../../public/blokovka01_00002.jpg" alt="Blok photo" />
            </div>
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{option.label}</h2>
                <p className="mt-1 text-sm text-slate-400">{option.example}</p>
                <div className="flex justify-center">
                  <button
                      className="mt-12 bg-dark text-white px-4 rounded-full py-3 hover:bg-azure">Calculate</button>
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
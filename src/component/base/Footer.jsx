import {useNavigate} from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-full mt-14 bg-light">
            <footer className="p-4  rounded-lg shadow md:px-6 md:py-8 ">
                <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
                    <button
                        className="rounded-md bg-dark px-10 py-2 text-white hover:bg-azure sm:order-first"
                        onClick={() => navigate("/manual")}
                    >
                        Manual
                    </button>
                    <a href="#" target="_blank" className="flex mb-4 sm:mb-0">
                        <img src="../../../public/logo.png" height={60} width={170} className="mr-10" alt="NumeralNinja logo" />
                    </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col items-center justify-center">

                    <span className="block text-sm sm:text-center text-dark flex-col">
                    © 2023 NumeralNinja. All Rights Reserved.
                    </span>
                    <span className="block text-sm sm:text-center text-dark flex-col">
                    Matej Križan, Ľubomír Golian, Branislav Benko
                  </span>
                </div>
            </footer>
            </div>
        </>
    )
}
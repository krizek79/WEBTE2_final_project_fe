
export default function Footer() {

    return (
        <>
            <div className="w-full mt-14 bg-light">
            <footer className="p-4  rounded-lg shadow md:px-6 md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
                        <img src="../../../public/logo.png" height={60} width={170} className="mr-10" alt="NumeralNinja logo"/>
                    </a>
                    <button  className="rounded-md bg-dark px-10 py-2 text-white
                                                hover:bg-azure">Manual</button>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 NumeralNinja. All Rights Reserved.
                </span>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Matej Križan, Ľubomír Golian, Branislav Benko
                </span>
            </footer>
            </div>
        </>
    )
}
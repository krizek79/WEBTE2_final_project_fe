export default function TeacherHome() {
    return (
        <>
            <form>
                <div className="bg-white pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
                    <div className="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:px-6 lg:px-8">
                            <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                                <div className="pt--10 pr-0 pb-10 pl-0">
                                    <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                        <div className="flex sm:items-center sm:justify-between sm:space-x-5">
                                            <div className="flex items-center flex-1 min-w-0">
                                                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                    <p className="text-lg font-bold text-gray-800 truncate">Blokovka 1</p>
                                                    <p className="text-gray-600 text-md">info</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                                <input type="checkbox" id="blok1" className="peer hidden" />
                                                <label htmlFor="blok1" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                                                    py-3 px-6 font-bold text-gray-200 transition-colors duration-200
                                                    ease-in-out peer-checked:bg-dark peer-checked:text-light
                                                    peer-checked:border-gray-200 ">
                                                    Add
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                        <div className="flex sm:items-center sm:justify-between sm:space-x-5">
                                            <div className="flex items-center flex-1 min-w-0">
                                                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                    <p className="text-lg font-bold text-gray-800 truncate">Blokovka 1</p>
                                                    <p className="text-gray-600 text-md">info</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                                            sm:mt-0">
                                                <input type="checkbox" id="blok2" className="peer hidden" />
                                                <label htmlFor="blok2" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                                                    py-3 px-6 font-bold text-gray-200 transition-colors duration-200
                                                    ease-in-out peer-checked:bg-dark peer-checked:text-light
                                                    peer-checked:border-gray-200 ">

                                                    Add
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                        <div className="flex sm:items-center sm:justify-between sm:space-x-5">
                                            <div className="flex items-center flex-1 min-w-0">
                                                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                    <p className="text-lg font-bold text-gray-800 truncate">Odozva 1</p>
                                                    <p className="text-gray-600 text-md">info</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                                            sm:mt-0">
                                                <input type="checkbox" id="odozva1" className="peer hidden" />
                                                <label htmlFor="odozva1" className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                                                    py-3 px-6 font-bold text-gray-200 transition-colors duration-200
                                                    ease-in-out peer-checked:bg-dark peer-checked:text-light
                                                    peer-checked:border-gray-200 ">

                                                    Add
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                        <div className="flex sm:items-center sm:justify-between sm:space-x-5">
                                            <div className="flex items-center flex-1 min-w-0">
                                                <div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                    <p className="text-lg font-bold text-gray-800 truncate">Odozva 2</p>
                                                    <p className="text-gray-600 text-md">info</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                                                            sm:mt-0">
                                                <input type="checkbox" id="odozva2" className="peer hidden" />
                                                <label htmlFor="odozva2"  className="select-none cursor-pointer rounded-lg border-2 border-gray-200
                                                    py-3 px-6 font-bold text-gray-200 transition-colors duration-200
                                                    ease-in-out peer-checked:bg-dark peer-checked:text-light
                                                    peer-checked:border-gray-200 ">

                                                    Add
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <button type="submit" className="mt-10 rounded-md bg-dark px-10 py-2 text-white hover:bg-azure ">Send to students</button>
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
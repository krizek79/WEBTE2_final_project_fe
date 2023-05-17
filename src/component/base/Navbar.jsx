import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    };

    const handleClose = () => {
      setIsMenuOpen(false)
    };

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("firstName")
        localStorage.removeItem("lastName")
        localStorage.removeItem("email")
        localStorage.removeItem("role")
        navigate("/")
    }

    return (
        <>
            <nav className="relative px-12 py-3 flex justify-between items-center bg-light">
                <a
                    className="flex text-3xl font-bold leading-none text-dark hover:text-azure"
                    href="#"
                >
                    <img src="../../../public/logo.png" height={60} width={170} className="mr-10"  alt=""/>

                </a>

                {localStorage.getItem("token") && (
                    <div>
                        <div className="lg:hidden">
                          <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Mobile menu</title>
                              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                          </button>
                        </div>
                        <div>
                            {localStorage.getItem("role") === "teacher" && (
                                <ul
                                    className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2
                                    -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
                                >
                                    <li>
                                        <a className="text-xl text-dark hover:text-gray-500" href="#">Define tasks</a>
                                    </li>
                                    <li>
                                        <a className="text-xl text-dark hover:text-gray-500" href="#">Statistics</a>
                                    </li>
                                </ul>
                            )}
                          <a
                              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100
                              text-smtext-gray-900 font-bold  rounded-xl transition duration-200 hover:cursor-pointer"
                              onClick={logout}
                          >
                              Log out
                          </a>
                        </div>
                    </div>
                )}
            </nav>
            <div className={`navbar-menu ${isMenuOpen ? '' : 'hidden'}`}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav
                        className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-light border-r
                        overflow-y-auto z-50"
                    >
                        <div className="flex items-center mb-8">
                            <a className="mr-auto text-3xl font-bold leading-none text-dark" href="#">
                                NumeralNinja
                            </a>
                            <button className="navbar-close" onClick={handleClose}>
                                <svg
                                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round" strokeLinejoin="round" stroke="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            {localStorage.getItem("role") === "teacher" && (
                                <ul>
                                    <li className="mb-1">
                                        <a
                                            className="block p-4 text-xl font-semibold text-gray-400 hover:bg-gray-50
                                        hover:text-azure rounded" href="#"
                                        >
                                            Define tasks
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <a
                                            className="block p-4 text-xl font-semibold text-gray-400 hover:bg-gray-50
                                        hover:text-azure rounded" href="#"
                                        >
                                            Statistics
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">
                                <a
                                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold
                                    leading-none bg-gray-50 hover:bg-gray-100 rounded-xl hover:cursor-pointer"
                                    onClick={() => {
                                            logout()
                                            toggleMenu()
                                        }
                                    }
                                >
                                    Log out
                                </a>
                            </div>
                            <p className="my-4 text-xs text-center text-gray-400">
                                <span>Copyright © 2023</span>
                            </p>
                        </div>
                    </nav>
            </div>
        </>
    )
}
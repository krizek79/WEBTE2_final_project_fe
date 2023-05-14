import React from 'react';
import { useState } from 'react';

function NavBar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <><nav className="relative px-4 py-4 flex justify-between items-center bg-light">
      <a className="text-3xl font-bold leading-none text-dark hover:text-azure" href="#">
        NumeralNinja
      </a>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
          <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a className="text-xl text-dark hover:text-gray-500" href="#">Home</a></li>
        
        <li><a className="text-xl text-dark hover:text-gray-500" href="#">Exams</a></li>
        
        <li><a className="text-xl text-dark hover:text-gray-500" href="#">Solutions</a></li>
      </ul>
      <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
      <a className="hidden lg:inline-block py-2 px-6 bg-dark hover:bg-azure text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
    </nav>
    <div className={`navbar-menu ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-light border-r overflow-y-auto z-50">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none text-dark" href="#">
              NumeralNinja
            </a>
            <button className="navbar-close" onClick={handleClose}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" stroke="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-xl font-semibold text-gray-400 hover:bg-gray-50 hover:text-azure rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-xl font-semibold text-gray-400 hover:bg-gray-50 hover:text-azure rounded" href="#">Exams</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-xl font-semibold text-gray-400 hover:bg-gray-50 hover:text-azure rounded" href="#">Solutions</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-dark hover:bg-azure  rounded-xl" href="#">Sign Up</a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div></>
  )
  }

export default NavBar;
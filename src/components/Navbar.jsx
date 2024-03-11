import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { CgDarkMode } from "react-icons/cg";
import "./Navbar.css"

const Navbar = () => {


  // Function toggles the Theme between LightMode and DarkMode
  const change_Theme=() => {
    document.body.classList.toggle("Light_Mode")
  };

  
  return (
    <nav className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-[#63ff3b] transition-all duration-300 hover:text-white text-2xl mb-4 md:mb-0 hover:cursor-pointer">
      <FaNoteSticky />
        <span className="ml-3 text-xl text-white hover:text-[#60ff6d]">What2Do</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center text-white">
        <a className="underline_on_hover mr-5 transition-all duration-[300ms] hover:cursor-pointer relative">Features</a>
        <a className="underline_on_hover mr-5 transition-all duration-[300ms] hover:cursor-pointer relative">Private Notes</a>
        <a className="underline_on_hover mr-5 transition-all duration-[300ms] hover:cursor-pointer relative">Follow Creators</a>
        <a className="underline_on_hover mr-5 transition-all duration-[300ms] hover:cursor-pointer relative">Login here</a>
      </nav>
      <button onClick={change_Theme} className="inline-flex gap-2 items-center transition-all bg-white border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-black rounded text-base mt-4 md:mt-0">
        Switch Theme
      <CgDarkMode />
      </button>
    </div>
  </nav>
  )
}

export default Navbar
 

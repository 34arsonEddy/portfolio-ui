

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between mx-3 md:m-auto md:w-[600px] rounded-3xl min-w-[400px] items-center w-full h-10 px-4 py-2 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/img/logo.png" alt="logo" className="w-8 h-8" />
        <span className="text-xl font-semibold text-gray-800 uppercase ml-2">
          Portfolio
        </span>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4 leading-loose">
        <a href="#" className=" text-center text-gray-600 hover:text-gray-800">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          About
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Contact
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16">
            </path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" border absolute right-5 top-16 items-center w-40 bg-white shadow-md
        flex flex-col p-4 md:hidden">
          <a href="#" className="  w-full h-8 border-b-2 underline
           text-gray-600 hover:text-gray-800 py-1
           font-semibold text-md">
            Home
          </a>
          <a href="#" className="  w-full h-8 border-b-2 
           border-gray-400 text-gray-600 hover:text-gray-800 py-1">
            About
          </a>
          <a href="#" className="  w-full h-8 border-b-2 border-dotted
           border-gray-400 text-gray-600 hover:text-gray-800 py-1">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
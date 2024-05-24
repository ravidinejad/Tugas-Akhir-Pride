import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="bg-custom-nav py-4 font-poppins">
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold text-xl">PRIDE</p>
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className={`lg:flex lg:space-x-8 ${showSidebar ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <li>
            <Link to="/" className="text-white hover:text-gray-300 block">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/mens" className="text-white hover:text-gray-300 block">
              Men
            </Link>
          </li>
          <li>
            <Link to="/womens" className="text-white hover:text-gray-300 block">
              Women
            </Link>
          </li>
          <li>
            <Link to="/kids" className="text-white hover:text-gray-300 block">
              Kids
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300 block">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300 block">
              Sign up
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <Link to="/login" className="text-white font-semibold hover:text-gray-300">
            Login
          </Link>
          <Link to="/signup" className="text-white font-semibold hover:text-gray-300">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

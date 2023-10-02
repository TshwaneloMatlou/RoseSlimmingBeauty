import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import ExternalLink from './ExternalLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Use Link to navigate to the Home page */}
        <div className="text-black font-bold text-xl">
          <Link to="/Home"><img className='w-[280px] h-[130px]' src="/HeaderIcon.png" alt="Icon" /></Link>
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black p-2 focus:outline-none focus:bg-pink-500"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex space-x-4 font-extrabold">
            {/* Use Link to navigate to different pages */}
            <li>
              <Link to="/Home" className="text-black hover:text-pink-500 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-black hover:text-pink-500 hover:underline">
                About
              </Link>
            </li>
            { /*
            <li>
              <Link to="/Contact" className="text-black hover:text-pink-500 hover:underline">
                Contact
              </Link> 
            </li>
            */ }
            <li>
              <Link to="/Services" className="text-black hover:text-pink-500 hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/BookAppointment" className="text-black hover:text-pink-500 hover:underline">
                Book An Appointment
              </Link>
            </li>

            <li>
              <ExternalLink to="https://forums.mobirise.com/" className="text-black hover:text-pink-500 hover:underline">
                Forum
              </ExternalLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

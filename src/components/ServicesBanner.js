import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesBanner = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-pink-400 text-black font-semibold underline p-4 mx-2 md:mx-11 my-5 rounded-3xl">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigation Links */}
        <ul className="hidden md:flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
          <li>
            <Link to="/FirSaunaDome">Fir Sauna Dome</Link>
          </li>
          <li>
            <Link to="/LaserLipo">Laser Lipo</Link>
          </li>
          <li>
            <Link to="/FaradicMachine">Faradic Machine</Link>
          </li>
          <li>
            <Link to="/FatFreezing">Fat Freezing</Link>
          </li>
          <li>
            <Link to="/ButtandHipLift">Butt and Hip Lift</Link>
          </li>
          <li>
            <Link to="/InbodyScan">Inbody Scan</Link>
          </li>
        </ul>

        {/* Dropdown for Small and Medium Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDropdown}
            className="text-black hover:text-pink-500 focus:outline-none"
          >
            Services{' '}
            <svg
              className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="mt-2 space-y-2 bg-black text-white py-2 px-4 border rounded-lg">
              <li>
                <Link to="/FirSaunaDome">Fir Sauna Dome</Link>
              </li>
              <li>
                <Link to="/LaserLipo">Laser Lipo</Link>
              </li>
              <li>
                <Link to="/FaradicMachine">Faradic Machine</Link>
              </li>
              <li>
                <Link to="/FatFreezing">Fat Freezing</Link>
              </li>
              <li>
                <Link to="/ButtandHipLift">Butt and Hip Lift</Link>
              </li>
              <li>
                <Link to="/InbodyScan">Inbody Scan</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;

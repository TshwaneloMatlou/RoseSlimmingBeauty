import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const BottomBanner = () => {
  return (
    <div className="bg-gray-800 px-20 py-5">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-white font-extrabold">Follow Us:</p>
        <div className="space-x-4">
          {/* Replace <a> with <Link> for navigation */}
          <Link to="/facebook" className="text-white">
            <i className="fab fa-facebook-f text-2xl hover:bg-blue-400"></i>
          </Link>
          <Link to="/twitter" className="text-white">
            <i className="fab fa-twitter text-2xl hover:bg-blue-400"></i>
          </Link>
          <Link to="/instagram" className="text-white">
            <i className="fab fa-instagram text-2xl hover:bg-blue-400"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;

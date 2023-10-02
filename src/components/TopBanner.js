import React from "react";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <header
      className="relative bg-cover bg-center h-[500px] font-extrabold mb-5"
      style={{
        backgroundImage: "url('/bg_3.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Header content */}
      <div className=" grid relative container mx-auto h-full items-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 text-center px-5">
          <div>
            <h1 className="text-4xl text-white font-semibold m-5">WELCOME TO ROSE SLIMMING BEAUTY!</h1>
          </div>
          <div>
            <p className=" text-lg text-white m-5">VIEW OUR SERVICES AND MAKING A BOOKING TODAY!</p>
          </div>
          {/* Our Services */}
          <div className="max-w-md mx-auto">
            <Link to="./BookAppointment"><button className='bg-purple-500 border rounded-lg py-2 px-28 m-3 font-extrabold text-white hover:bg-pink-500'>Book An Appointment</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBanner;

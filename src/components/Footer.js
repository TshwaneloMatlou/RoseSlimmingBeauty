import React from 'react';


const Footer = () => {
  return (
    <div className="grid gap-5 p-6 bg-black sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">

      <div className="text-white text-center">
        <h1 className='font-extrabold'>Address</h1>
        <p className=''>33 Hazel Street, Ext6 Marlands</p>
        <p className=''>Germiston, Gauteng </p>
        <p className=''>South Africa, 1401</p>
      </div>

      <div className="text-white text-center ">
        <h1 className='font-extrabold'>Love it for Less!</h1>
      </div>

      <div className="text-white text-center ">
        <h1 className='font-extrabold'>Google Maps</h1>
       
      </div>

    </div>
  )
}

export default Footer;
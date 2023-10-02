import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component


const Services = () => {
  const services = [
    {
      name: 'Fir Sauna Dome',
      description: 'Description For: Fir Sauna Dome service.',
      link: '/FirSaunaDome', // link path
    },
    {
      name: 'Laser Lipo',
      description: 'Description For: Laser Lipo service.',
      link: '/LaserLipo', // link path
    },
    {
      name: 'Faradic Machine',
      description: 'Description For: Faradic Machine service.',
      link: '/FaradicMachine', // link path
    },    {
      name: 'Fat Freezing',
      description: 'Description For: Fat Freezing service.',
      link: '/FatFreezing', // link path
    },    {
      name: 'Butt and Hip Lift',
      description: 'Description For: Butt and Hip Lift service.',
      link: '/ButtandHipLift', // link path
    },    {
      name: 'Inbody Scan',
      description: 'Description For: Inbody Scan service.',
      link: '/InbodyScan', // link path
    },
  ];

  return (
    <div className="container mx-auto py-36 px-8 bg-gray-100 rounded-lg">
      <h1 className="font-extrabold text-2xl text-center mb-4">Our Services</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <li key={index} className="bg-white m-2 shadow-xl hover:shadow-pink-400 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className='m-2'>
              {service.description}{' '} <br />
              <Link to={service.link} className="text-blue-500 hover:underline mt-9">
                Learn more
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

import React from 'react';
import ServicesBanner from '../components/ServicesBanner';

const FirSaunaDome = () => {
  return (
    <div className="container mx-auto p-8">
      <ServicesBanner />
      <h1 className="text-3xl font-semibold mb-4 text-center">Fir Sauna Dome</h1>
      <h2 className="text-xl font-semibold mb-2">Treatment - FIR Sauna or Infrared Therapy</h2>

      <p className='p-2 m-2'>
        FIR Sauna is a very popular treatment for weight loss and slimming. Far Infrared (FIR) sauna helps the body release a number of toxins. 
        It also improves circulation and can be used for pain relief. Ideal for relaxation, it involves relaxing under the warm dome. 
        The treatment lasts from 4 minutes to 30 minutes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        How does FIR sauna work for slimming?
      </h2>

      <p className='p-2 m-2'>
        The heat produced causes the body to sweat, releasing toxins and making the skin feel smoother. 
        The heat produced by these infrared treatments causes thermo-lipolysis 
        (the process of using infrared heat to break down stored fat cells in the body) to happen.
      </p>

      <p className='p-2 m-2'>
        The fat is then released back into the bloodstream and eliminated from the body through urine. 
        The heat being produced by the system increases your body’s metabolic rate in a way 
        that it will burn calories not just during the session but for approximately 30 hours after the treatment.
      </p>

      <p className='p-2 m-2'>
        Furthermore, after a few sessions, there will be an improvement in the appearance of cellulite.
      </p>

      <p className='p-2 m-2'>
        It is recommended to do 6 sessions within the first 2 weeks followed by two sessions per week thereafter for the best results.
      </p>
    </div>
  );
};

export default FirSaunaDome;

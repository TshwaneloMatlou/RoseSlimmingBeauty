import React from 'react';

const BottomCards = () => {
  return (
    <div className="shadow-md shadow-red-700 p-5 m-8">
        <h2 className='text-center font-extrabold text-2xl'>What Our Fantastic Clients have to Say</h2>
        <div className="">
            <div className="grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                {/* Card 1 */}
                <div className='grid border border-black rounded-lg'>
                    <div>
                    <p className='m-3'>“I love it! Started seeing a difference in my weight after my first visit to Rose Slimming Beauty!”</p>
                    </div>
                    <div className='bg-gray-200 text-center p-2'>
                        <p className='font-extrabold m-2'>Nomvula S.</p>
                        <p className='font-semibold'>Lipo Client </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='grid border border-black rounded-lg'>
                    <p className='m-3'>“Very affordable! definetely recommending Rose Slimming Beauty to my friends and family!”</p>
                    <div className='bg-gray-200 text-center p-2'>
                        <p className='font-extrabold m-2'>Palesa L.</p>
                        <p className='font-semibold'>InBody Scan Client</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='grid  border border-black rounded-lg'>
                    <p className='m-3'>“Friendly staff members made my visit a very pleasant one. Really had a great time and successful surgery with Rose Slimming Beauty!”</p>
                    <div className='bg-gray-200 text-center p-2'>
                        <p className='font-extrabold m-2'>Jenniffer T.</p>
                        <p className='font-semibold'>Fat Freezing Client</p>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  );
};

export default BottomCards;

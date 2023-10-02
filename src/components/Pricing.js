import React from 'react';

const Pricing = () => {
  return (
    <div className="shadow-lg shadow-pink-500 py-10 my-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Pricing</h2>
        <p className="text-gray-500 mt-2">Choose a service that suits your needs.</p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 my-2 px-28 py-10">
          
          {/* Pricing Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Lipo Laser</h3>
            <p className="text-gray-500 mt-2">R500.00 per 30mins</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Inbody Scan</h3>
            <p className="text-gray-500 mt-2">R250.00 per session</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Faradic Slimming</h3>
            <p className="text-gray-500 mt-2">R350.00 per session</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">1 Cup Fat Freezing</h3>
            <p className="text-gray-500 mt-2">R700.00 per 30mins</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Butt/ Hip Enlargement</h3>
            <p className="text-gray-500 mt-2">R400.00 per session</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">10 Lipolysis Injections</h3>
            <p className="text-gray-500 mt-2">R800.00 per session</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

            {/* Pricing Card 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Cellulite Treatment</h3>
            <p className="text-gray-500 mt-2">R450.00 per 30mins</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>

          {/* Pricing Card 8 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-pink-200">
            <h3 className="text-xl font-semibold text-gray-800">Currently Available Promos</h3>
            <p className="text-gray-500 mt-2">None</p>
            <ul className="mt-4 space-y-2">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Pricing;

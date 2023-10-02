import React, { useState } from 'react';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to your server or API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-pink-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Subscribe to Our Newsletter</h2>
        <p className="text-gray-500 mt-2">Stay updated with our latest news and offers.</p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-purple-500 text-white font-extrabold py-3 px-28 rounded-full hover:bg-pink-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

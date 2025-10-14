import React from 'react';

const Hero = () => {
  return (
    <div className="mt-6 border-2 border-gray-400 mx-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  p-6 bg-white">
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center space-y-3 md:space-y-4">
          <h1 className="text-5xl font-bold text-amber-500">OUR BESTSELLERS</h1>
          <p className="text-2xl text-gray-700">Latest Arrivals</p>
          <p className="text-lg text-gray-600">Grab them before they’re gone!</p>
          <p className="text-lg text-gray-600">Exclusive deals every week</p>
          <p className="text-lg text-gray-600">Free shipping on orders over $50</p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
        </div>
      </div>
    </div>
  );
};

export default Hero;

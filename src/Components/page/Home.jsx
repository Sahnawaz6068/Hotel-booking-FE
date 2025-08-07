import React from 'react';
import Hotels from './Hotels';

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[linear-gradient(to_bottom,#dbeafe,white,#dbeafe)] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A2463] leading-tight">
          Find your spot. <br className="hidden md:block" /> Book your stay.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-[#4A4A4A] font-medium">
          The best stays across India, guaranteed.
        </p>
      </div>
    </div>
    <Hotels/>
    </div>
  );
};

export default Home;

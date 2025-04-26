import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-10 bg-[#f8f9fa]">
      {/* Left Section */}
      <div className="flex space-x-6 text-sm text-gray-700">
        <span className="hover:underline cursor-pointer">One of our specialties is our hearty breakfast</span>
        <span className="hover:underline cursor-pointer">Health & Safety</span>
      </div>

      {/* Center Logo */}
      <div className="text-2xl font-semibold tracking-wider">
        ifood
      </div>

      {/* Right Section */}
      <div className="flex space-x-6 text-sm text-gray-700 items-center">
        <span className="hover:underline cursor-pointer">Offers</span>
        <span className="hover:underline cursor-pointer">Services</span>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>Menu</span>
          {/* Hamburger Icon */}
          <div className="flex flex-col justify-between w-4 h-3">
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
            <span className="block w-full h-0.5 bg-black"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md relative">
      
      <div className="flex items-center space-x-3">
        <img
          src="vurtel.png" 
          alt="Logo"
          className="absolute"
          style={{
            width: "648px",
            height: "648px",
            left: "1195px",
            top: "20px",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
          }}
        />
        <span className="text-lg font-semibold">Made by Framer</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
        <li><a href="#features" className="text-gray-700 hover:text-gray-900">Features</a></li>
        <li><a href="#customers" className="text-gray-700 hover:text-gray-900">Customers</a></li>
        <li><a href="#updates" className="text-gray-700 hover:text-gray-900">Updates</a></li>
        <li><a href="#help" className="text-gray-700 hover:text-gray-900">Help</a></li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="px-4 py-2 bg-black text-white rounded-md md:ml-4">
        Get for free
      </button>
    </nav>
  );
};

export default Navbar;

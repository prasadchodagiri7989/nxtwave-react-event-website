import React from "react";
import { FiSearch, FiHeart, FiUser } from "react-icons/fi";

const categories = [
  "LiveStream",
  "Streams",
  "Movies",
  "Plays",
  "Events",
  "Sports",
  "Activities",
];

const Navbar: React.FC = () => {
  return (
    <div className="bg-white border-b">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 space-y-3 md:space-y-0">
        {/* Left - Logo and Categories */}
        <div className="flex items-center gap-4">
          <div className="text-red-600 font-bold text-xl">BookUsNow</div>
          <button className="hidden md:inline-block text-sm border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
            Categories
          </button>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex items-center flex-grow max-w-md w-full mx-auto md:mx-0">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="DJI Platform"
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
          </div>
        </div>

        {/* Right - Icons and Sign In */}
        <div className="hidden md:flex items-center gap-4 justify-end">
          <FiHeart className="text-xl cursor-pointer" />
          <FiUser className="text-xl cursor-pointer hidden md:block" />
          <button className="text-sm border border-gray-300 rounded px-4 py-1 hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </div>

      {/* Bottom Location Section */}
      <div className="px-4 pb-2 md:pb-0">
        <div className="text-sm text-gray-600 flex justify-between items-center md:justify-start md:gap-8">
          {/* Left: Location on mobile and desktop */}
          <div className="md:hidden font-medium text-gray-800">📍 Mumbai, India</div>
          <div className="hidden md:block">📍 Mumbai, India</div>

          {/* Icons visible only on mobile */}
          <div className="flex md:hidden gap-4 text-xl text-gray-600">
            <FiSearch />
            <FiHeart />
            <FiUser />
          </div>
          {/* Horizontal Scrollable Categories */}
          <div className="hidden md:flex align-center overflow-x-auto whitespace-nowrap border-t border-gray-200 mt-2 px-4">
            <div className="flex space-x-4 py-2 text-sm font-medium text-gray-600">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-3 py-1 rounded-full hover:bg-indigo-50 whitespace-nowrap"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
        
      </div>

          {/* Horizontal Scrollable Categories */}
          <div className="md:hidden align-center overflow-x-auto whitespace-nowrap border-t border-gray-200 mt-2 px-4">
            <div className="flex space-x-4 py-2 text-sm font-medium text-gray-600">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-3 py-1 rounded-full hover:bg-indigo-50 whitespace-nowrap"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

      
    </div>
  );
};

export default Navbar;

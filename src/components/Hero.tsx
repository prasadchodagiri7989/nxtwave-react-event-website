import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="assets/Frontscreen.jpg"
        alt="Event"
        className="w-full h-full object-cover transform scale-110 transition-transform duration-500 hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center text-center text-white px-6">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
            Discover Exciting Events Near You
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-200">
            Stay tuned for the latest updates. Explore concerts, plays, movies,
            and more happening around you.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition">
              Explore Events
            </button>
            <button className="px-6 py-2 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

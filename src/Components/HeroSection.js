import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center p-10 bg-gradient-to-r from-blue-200 to-purple-300">
      <p className="text-sm text-gray-600 mb-3">Version 2.0 is here</p>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-5">
        Pathway to productivity
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
          Get for free
        </button>
        <button className="px-6 py-3 bg-transparent border border-black text-black rounded-md hover:bg-black hover:text-white">
          Learn more →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

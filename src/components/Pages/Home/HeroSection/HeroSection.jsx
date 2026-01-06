import React from "react";

const HeroSection = () => {
  return (
    <section className="relative font-montserrat bg-gradient-to-r from-[#171a2a] to-[#35446b] text-white py-48">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold  text-[#f5f5f5] font-airstrike" >
          Discover Your Family Roots
        </h1>
        <p className="text-lg my-2 text-gray-300  font-semibold">
          Build and explore your family tree with ease.
        </p>
        <button className="px-6 py-3 mt-2 bg-gradient-to-r from-[#f6c90e] to-[#d49c03] text-[#1a1f36] font-semibold rounded-lg shadow-lg hover:from-[#f4b400] hover:to-[#f6c90e] transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <section className="relative font-montserrat bg-gradient-to-r from-[#171a2a] to-[#35446b] text-white py-48">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold  text-header_color font-airstrike" >
          Discover Your Family Roots
        </h1>
        <p className="text-lg my-2 text-para_color  font-semibold">
          Build and explore your family tree with ease.
        </p>
        <button className="px-6 py-3 mt-2 bg-gradient-to-r from-[#f6c90e] to-[#d49c03] text-black font-semibold rounded-lg shadow-lg hover:from-[#f4b400] hover:to-[#f6c90e] transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

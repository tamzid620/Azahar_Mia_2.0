import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#171a2a] to-[#35446b] text-white pt-48 pb-32">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold uppercase" >
          Discover Your Family Roots
        </h1>
        <p className="text-lg my-2 text-para_color  font-semibold font-montserrat">
          Build and explore your family tree with ease.
        </p>
        <button className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

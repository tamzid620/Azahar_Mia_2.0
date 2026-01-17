import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      id="/"
      className="relative bg-gradient-to-r from-[#171a2a] via-[#35446b] to-[#171a2a] text-white pt-48 pb-32"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold uppercase text-white">
          Discover Azhar Mia’s Roots
        </h1>
        <p className="text-lg my-2  text-[#0ea5e9] font-semibold font-montserrat">
          Build and explore your family tree with ease.
        </p>
        <Link to="/details">
          <button className="px-6 py-3 mt-2 bg-gradient-to-b from-[#64748b] to-transparent text-white font-semibold rounded-lg shadow-lg hover:from-transparent hover:to-[#64748b] transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;

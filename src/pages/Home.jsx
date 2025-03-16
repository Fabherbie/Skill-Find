import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      className="relative flex justify-center items-center bg-cover bg-center pt-[100px] w-full min-h-screen text-gray-900"
      style={{
        backgroundImage: "url('/images/scattered-forcefields.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Content Wrapper */}
      <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center mx-auto w-[85%] max-w-7xl">
        {/* Left Content */}
        <div className="space-y-6 max-w-2xl text-left">
          <h1 className="font-bold text-blue-950 text-5xl leading-tight">
            Expert Services for Your Home & Business – Trusted, Verified, and
            Ready to Help!
          </h1>
          <p className="text-gray-600 text-xl">
            Browse 100+ Verified Listings & Connect with Top-Rated Professionals
            Instantly!
          </p>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 bg-white shadow-lg p-3 border border-green-600 rounded-full w-full max-w-3xl">
            {/* Service Input (60%) */}
            <div className="flex items-center space-x-2 w-[60%]">
              <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-12 h-12">
                <FiSearch className="w-6 h-6 text-yellow-400" />
              </div>
              <input
                type="text"
                placeholder="What service do you need?"
                className="px-2 outline-none w-full font-medium text-blue-950 text-base"
              />
            </div>

            {/* Divider */}
            <div className="bg-gray-300 mx-3 w-[1px] h-8"></div>

            {/* Location Input (40%) */}
            <div className="flex items-center space-x-2 w-[40%]">
              <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-12 h-12">
                <GoLocation className="w-6 h-6 text-yellow-400" />
              </div>
              <input
                type="text"
                placeholder="Enter Location"
                className="px-2 outline-none w-full font-medium text-blue-950 text-base"
              />
            </div>

            {/* Search Button */}
            <button className="bg-yellow-400 ml-4 px-6 py-3 rounded-full font-semibold text-blue-950 text-lg">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="hidden relative lg:flex flex-col justify-center items-end mt-10 w-[40%]">
          {/* Top Row (Small + Big) */}
          <div className="flex justify-end space-x-4 w-full">
            {/* Small Image */}
            <motion.img
              src="/images/painter.jpg"
              alt="Expert 1"
              className="shadow-xl border-4 border-green-600 rounded-full w-32 h-32"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Big Image */}
            <motion.img
              src="/images/carpenter.jpg"
              alt="Expert 2"
              className="shadow-xl border-4 border-green-600 rounded-full w-56 h-56"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Bottom Row (Big + Small) */}
          <div className="flex justify-start space-x-4 mt-4 w-full">
            {/* Big Image */}
            <motion.img
              src="/images/mechanic.jpg"
              alt="Expert 3"
              className="shadow-xl border-4 border-green-600 rounded-full w-56 h-56"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Small Image */}
            <motion.img
              src="/images/repairman.jpg"
              alt="Expert 4"
              className="shadow-xl border-4 border-green-600 rounded-full w-32 h-32"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

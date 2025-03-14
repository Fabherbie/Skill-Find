import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImage from "../assets/images/scattered-forcefields.svg";

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Header />
      <div className="mt-20"></div>

      {/* Hero Section */}
      <section
        className="relative flex justify-center items-center bg-cover bg-center w-full h-[882px] text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center mx-auto w-[80%] max-w-7xl">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl text-left">
            <h1 className="font-bold text-blue-950 text-5xl leading-tight">
              Expert Services for Your Home & Business – Trusted, Verified, and
              Ready to Help!
            </h1>
            <p className="text-green-500 text-xl">
              Browse 100+ Verified Listings & Connect with Top-Rated
              Professionals Instantly!
            </p>

            {/* Search Bar */}
            <div className="flex items-center space-x-4 bg-white shadow-lg p-3 rounded-full">
              {/* Service Input */}
              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-10 h-10">
                  <div className="border border-yellow-400 w-5 h-5"></div>
                </div>
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="outline-none font-medium text-blue-950 text-base"
                />
              </div>

              {/* Divider */}
              <div className="bg-gray-300 w-[1px] h-8"></div>

              {/* Location Input */}
              <div className="flex items-center space-x-2">
                <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-10 h-10">
                  <div className="border border-yellow-400 w-5 h-5"></div>
                </div>
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="outline-none font-medium text-blue-950 text-base"
                />
              </div>

              {/* Search Button */}
              <button className="bg-yellow-400 px-5 py-3 rounded-full font-semibold text-blue-950">
                Search
              </button>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="hidden lg:block relative">
            <img
              src="https://placehold.co/227x212"
              alt="Expert 1"
              className="top-10 left-10 absolute border border-green-600 w-56 h-52"
            />
            <img
              src="https://placehold.co/227x212"
              alt="Expert 2"
              className="top-40 left-40 absolute border border-green-600 w-56 h-52"
            />
            <img
              src="https://placehold.co/227x212"
              alt="Expert 3"
              className="top-60 left-20 absolute border border-green-600 w-56 h-52"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

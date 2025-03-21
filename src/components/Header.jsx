import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolledUp(window.scrollY < lastScrollY);
        lastScrollY = window.scrollY;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="top-0 left-0 z-50 fixed bg-white shadow-md px-8 py-4 w-full">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/images/skill-find logo.svg"
            alt="SkillFind Logo"
            className="h-10"
          />
          <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8 text-blue-950">
          {/* Find Artisans */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("artisans")}
              className="flex items-center hover:text-green-600 transition-all duration-300"
            >
              Find Artisans <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdown === "artisans" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white shadow-lg mt-2 p-4 rounded-lg w-56 text-blue-950"
                >
                  <NavLink
                    to="/post-job"
                    className="block py-2 hover:text-green-600"
                  >
                    Post a Job
                  </NavLink>
                  <NavLink
                    to="/hire-expert"
                    className="block py-2 hover:text-green-600"
                  >
                    Hire an Expert
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Find Work */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("work")}
              className="flex items-center hover:text-green-600 transition-all duration-300"
            >
              Find Work <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdown === "work" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white shadow-lg mt-2 p-4 rounded-lg w-56 text-blue-950"
                >
                  <NavLink
                    to="/bid-work"
                    className="block py-2 hover:text-green-600"
                  >
                    Bid Work with Ads
                  </NavLink>
                  <NavLink
                    to="/find-expertise"
                    className="block py-2 hover:text-green-600"
                  >
                    Find Work for Your Expertise
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pricing */}
          <NavLink to="/pricing" className="hover:text-green-600">
            Pricing
          </NavLink>

          {/* Explore */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("explore")}
              className="flex items-center hover:text-green-600 transition-all duration-300"
            >
              Explore <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdown === "explore" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white shadow-lg mt-2 p-4 rounded-lg w-56 text-blue-950"
                >
                  <NavLink
                    to="/blog"
                    className="block py-2 hover:text-green-600"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/faqs"
                    className="block py-2 hover:text-green-600"
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    to="/success-stories"
                    className="block py-2 hover:text-green-600"
                  >
                    Success Stories
                  </NavLink>
                  <NavLink
                    to="/how-to-hire"
                    className="block py-2 hover:text-green-600"
                  >
                    How to Hire
                  </NavLink>
                  <NavLink
                    to="/find-work"
                    className="block py-2 hover:text-green-600"
                  >
                    Find Work
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Search Bar */}
        <div className="hidden relative md:flex items-center mx-6">
          <input
            type="text"
            placeholder="Search Service"
            className="px-4 py-2 border border-gray-300 focus:border-green-600 rounded-lg focus:outline-none w-64 text-blue-950"
          />
          <button className="top-1/2 right-2 absolute bg-green-600 hover:bg-green-500 p-2 rounded-lg text-white -translate-y-1/2 transform">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-6">
          <button className="px-4 py-2 border hover:border-green-600 border-blue-950 rounded-lg text-blue-950 hover:text-green-600 cursor-pointer">
            Login
          </button>
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-white">
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

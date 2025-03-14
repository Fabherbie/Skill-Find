import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import WhiteLogo from "/src/assets/images/Group.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdown, setDropdown] = useState(null); // Dropdown state

  // Toggle Dropdown
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <header className="bg-[#2E8B57] px-6 py-4 w-full transition-all">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={WhiteLogo} alt="SkillFind Logo" className="h-10" />
          <h1 className="font-bold text-[#FFD700] text-2xl">SkillFind</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-[#FFD700]">
            Home
          </a>
          <a href="#" className="hover:text-[#FFD700]">
            About Us
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center hover:text-[#FFD700]"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="left-0 absolute space-y-2 bg-white shadow-lg mt-2 p-3 rounded-lg text-black"
                >
                  <a href="#" className="block hover:text-[#2E8B57]">
                    Web Development
                  </a>
                  <a href="#" className="block hover:text-[#2E8B57]">
                    Graphic Design
                  </a>
                  <a href="#" className="block hover:text-[#2E8B57]">
                    Marketing
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="hover:text-[#FFD700]">
            Blogs
          </a>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex items-center hover:text-[#FFD700]"
            >
              Pages <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <AnimatePresence>
              {dropdown === "pages" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="left-0 absolute space-y-2 bg-white shadow-lg mt-2 p-3 rounded-lg text-black"
                >
                  <a href="#" className="block hover:text-[#2E8B57]">
                    Pricing
                  </a>
                  <a href="#" className="block hover:text-[#2E8B57]">
                    FAQ
                  </a>
                  <a href="#" className="block hover:text-[#2E8B57]">
                    Testimonials
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#" className="hover:text-[#FFD700]">
            Contact Us
          </a>
        </nav>

        {/* Buttons + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Register & Log In Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="hover:bg-[#FFC107] px-4 py-2 border border-[#FFD700] rounded-lg text-white">
              Register
            </button>
            <button className="bg-[#FFD700] hover:bg-[#FFC107] px-4 py-2 rounded-lg text-blue-950">
              LOG IN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden space-y-4 bg-[#2E8B57] mt-2 p-4 rounded-lg"
          >
            <a href="#" className="block text-white">
              Home
            </a>
            <a href="#" className="block text-white">
              About Us
            </a>

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => toggleDropdown("mobileServices")}
              className="block w-full text-white text-left"
            >
              Services <ChevronDown className="inline-block w-4 h-4" />
            </button>
            {dropdown === "mobileServices" && (
              <div className="space-y-2 pl-4">
                <a href="#" className="block text-gray-300">
                  Web Development
                </a>
                <a href="#" className="block text-gray-300">
                  Graphic Design
                </a>
                <a href="#" className="block text-gray-300">
                  Marketing
                </a>
              </div>
            )}

            <a href="#" className="block text-white">
              Blogs
            </a>

            {/* Mobile Pages Dropdown */}
            <button
              onClick={() => toggleDropdown("mobilePages")}
              className="block w-full text-white text-left"
            >
              Pages <ChevronDown className="inline-block w-4 h-4" />
            </button>
            {dropdown === "mobilePages" && (
              <div className="space-y-2 pl-4">
                <a href="#" className="block text-gray-300">
                  Pricing
                </a>
                <a href="#" className="block text-gray-300">
                  FAQ
                </a>
                <a href="#" className="block text-gray-300">
                  Testimonials
                </a>
              </div>
            )}

            <a href="#" className="block text-white">
              Contact Us
            </a>

            {/* Register & Log In Buttons for Mobile */}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="hover:bg-[#FFC107] px-4 py-2 border border-[#FFD700] rounded-lg text-white">
                Register
              </button>
              <button className="bg-[#FFD700] hover:bg-[#FFC107] px-4 py-2 rounded-lg text-blue-950">
                LOG IN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

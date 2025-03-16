import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [dropdown, setDropdown] = useState(null); // Dropdown state
  const [isScrolledUp, setIsScrolledUp] = useState(false); // Scroll behavior

  // Optimized Scroll Tracking
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

  // Toggle Dropdown
  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  // Close mobile menu on link click
  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  return (
    <header
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl rounded-2xl bg-[#2E8B57] px-6 py-4 transition-all duration-300 z-50 shadow-lg 
      ${isScrolledUp ? "top-0 w-full " : ""}`}
    >
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/Group.svg" alt="SkillFind Logo" className="h-10" />
          <h1 className="font-bold text-[#FFD700] text-2xl">SkillFind</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          {["Home", "About Us", "Blogs", "Contact Us"].map((item) => (
            <a key={item} href="#" className="hover:text-[#FFD700]">
              {item}
            </a>
          ))}

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
                  {["Web Development", "Graphic Design", "Marketing"].map(
                    (service) => (
                      <a
                        key={service}
                        href="#"
                        className="block hover:text-[#2E8B57]"
                      >
                        {service}
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                  {["Pricing", "FAQ", "Testimonials"].map((page) => (
                    <a
                      key={page}
                      href="#"
                      className="block hover:text-[#2E8B57]"
                    >
                      {page}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Buttons + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-2">
            <button className="hover:bg-[#FFD700] px-4 py-2 border border-[#FFD700] rounded-lg text-white">
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
            {["Home", "About Us", "Blogs", "Contact Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-white"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}

            {/* Mobile Services Dropdown */}
            <button
              onClick={() => toggleDropdown("mobileServices")}
              className="block w-full text-white text-left"
            >
              Services <ChevronDown className="inline-block w-4 h-4" />
            </button>
            {dropdown === "mobileServices" && (
              <div className="space-y-2 pl-4">
                {["Web Development", "Graphic Design", "Marketing"].map(
                  (service) => (
                    <a
                      key={service}
                      href="#"
                      className="block text-gray-300"
                      onClick={closeMenu}
                    >
                      {service}
                    </a>
                  )
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

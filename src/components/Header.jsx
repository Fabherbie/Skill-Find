import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-green-600 px-6 py-4 rounded-3xl">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-50 w-6 h-6" /> {/* Placeholder Logo */}
        <h1 className="font-['Quantico'] font-bold text-yellow-400 text-2xl">
          SkillFind
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 font-semibold text-white">
        <a href="/" className="font-bold text-yellow-400">
          Home
        </a>
        <a href="/about" className="hover:text-yellow-400">
          About Us
        </a>
        <a href="/services" className="hover:text-yellow-400">
          Services
        </a>
        <a href="/blogs" className="hover:text-yellow-400">
          Blogs
        </a>
        <a href="/pages" className="hover:text-yellow-400">
          Pages
        </a>
        <a href="/contact" className="hover:text-yellow-400">
          Contact us
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 border border-yellow-400 rounded-2xl text-white">
          Register
        </button>
        <button className="bg-yellow-400 px-4 py-2 rounded-2xl text-blue-950">
          LOG IN
        </button>
      </div>
    </header>
  );
};

export default Header;

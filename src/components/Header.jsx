import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-green-600 py-2 text-white text-sm">
        <div className="flex justify-between items-center mx-auto px-6 container">
          <div className="flex items-center space-x-4">
            <span>📞 +234 (789) 568 25</span>
            <span>📧 example@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 cursor-pointer">
              <IoGlobeOutline /> <span>English</span> ▼
            </span>
            <span className="flex items-center space-x-1 cursor-pointer">
              <BsCurrencyDollar /> <span>NGN</span> ▼
            </span>
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md w-full">
        <div className="flex justify-between items-center mx-auto px-6 py-4 container">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-md">
              <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            </div>
            <span className="font-bold text-xl">SkillFind</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-black">
            <li className="hover:text-green-700 cursor-pointer">Home</li>
            <li className="hover:text-green-700 cursor-pointer">About</li>
            <li className="hover:text-green-700 cursor-pointer">Services ▼</li>
            <li className="hover:text-green-700 cursor-pointer">Pages ▼</li>
            <li className="hover:text-green-700 cursor-pointer">Blog ▼</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
          </ul>

          {/* Search & Button */}
          <div className="flex items-center space-x-4">
            <FiSearch className="text-green-700 text-xl cursor-pointer" />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold text-black transition">
              GET A QUOTE →
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

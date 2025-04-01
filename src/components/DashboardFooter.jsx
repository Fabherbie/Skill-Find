import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const DashboardFooter = () => {
  return (
    <footer className="bg-white shadow-md mt-10 py-6 text-gray-700">
      {/* Container for the footer content */}
      <div className="flex justify-between items-center mx-auto px-6 w-full container">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2">
          <img
            src="/images/skill-find logo.svg"
            alt="SkillFind Logo"
            className="w-10 h-10"
          />
          <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-700 hover:text-green-700">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-green-700">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-green-700">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-green-700">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="mt-4 sm:mt-0 text-sm text-center">
          &copy; {new Date().getFullYear()} SkillFind. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;

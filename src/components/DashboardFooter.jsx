import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const DashboardFooter = () => {
  return (
    <footer className="bg-gray-50 py-4 w-full text-gray-700">
      {/* Footer Content */}
      <div className="flex justify-between items-center px-6 w-full">
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
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} SkillFind. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;

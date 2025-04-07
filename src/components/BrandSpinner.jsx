import React from "react";

const BrandSpinner = ({ fadeOut = false }) => {
  const logo = "/images/skill-find logo.svg";

  return (
    <div
      className={`flex flex-col justify-center items-center bg-white min-h-screen transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glowing Pulse Background */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 bg-blue-300 opacity-60 blur-xl rounded-full animate-ping"></div>

        {/* Logo Spinner */}
        <div className="z-10 relative w-16 h-16 animate-spin-slow">
          <img
            src={logo}
            alt="SkillFind Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Typewriter Loading Text */}
      <p className="mt-6 font-semibold text-green-700 text-lg tracking-wide typewriter">
        SkillFind is warming up...
      </p>
    </div>
  );
};

export default BrandSpinner;

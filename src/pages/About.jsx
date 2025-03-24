import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="flex justify-center items-center bg-gray-100 p-6 min-h-screen">
        <div className="bg-white shadow-lg p-8 rounded-lg max-w-3xl">
          <h1 className="mb-4 font-bold text-gray-800 text-3xl">About Us</h1>
          <p className="mb-4 text-gray-600">
            Welcome to our web app! We are dedicated to providing the best
            services to our users. Our team is passionate about building
            innovative solutions that make life easier.
          </p>
          <h2 className="mb-2 font-semibold text-gray-700 text-2xl">
            Our Mission
          </h2>
          <p className="mb-4 text-gray-600">
            Our mission is to create user-friendly applications that solve
            real-world problems efficiently and effectively.
          </p>
          <h2 className="mb-2 font-semibold text-gray-700 text-2xl">
            Meet the Team
          </h2>
          <div className="flex space-x-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="mx-auto rounded-full w-24 h-24"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <p className="mt-2 font-medium text-gray-700">John Doe</p>
              <p className="text-gray-500 text-sm">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="mx-auto rounded-full w-24 h-24"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <p className="mt-2 font-medium text-gray-700">Jane Smith</p>
              <p className="text-gray-500 text-sm">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

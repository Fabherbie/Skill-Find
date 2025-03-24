export default function About() {
  return (
    <div className="about">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our web app! We are dedicated to providing the best
            services to our users. Our team is passionate about building
            innovative solutions that make life easier.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            Our mission is to create user-friendly applications that solve
            real-world problems efficiently and effectively.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Meet the Team
          </h2>
          <div className="flex space-x-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <p className="mt-2 text-gray-700 font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://via.placeholder.com/100"
                alt="Team Member"
              />
              <p className="mt-2 text-gray-700 font-medium">Jane Smith</p>
              <p className="text-sm text-gray-500">CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";

// const About = () => {
//   return (

//   );
// };

// export default About

import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="w-full md:w-1/2">
          <img
            src="/images/mechanic.jpg"
            alt=""
            className="w-full h-auto roundedp-lg"
          />
        </div>
        {/* <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8"> */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-2">
            "Finding reliable local services can be frustrating. We built
            SkillFind to connect customers with trusted professionals
            effortlessly. Whether you need a plumber at midnight or a cleaner
            for your office, SkillFind ensures verified professionals, secure
            payments, and real-time booking—all in one place."
          </p>
          <p className="text-gray-600 mt-4">
            At Skillfind, our mission is to bridge the gap between service
            providers and customers by offering a seamless and efficient
            marketplace experience. We aim to empower both parties by providing
            a reliable platform where quality, transparency, and customer
            satisfaction are our top priorities.
          </p>
          {/* <FaCheckCircle className="mx-auto mb-4 w-12 h-12 text-green-600" /> */}
          We prioritize quality and reliability Clear, detailed service listings
          & reviews We Saving your time and effort. Smooth and satisfactory
          experience
        </div>
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
              src="/images/mechanic.jpg"
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;

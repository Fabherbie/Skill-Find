// import React from "react";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="flex md:flex-row flex-col items-center gap-6 bg-gray-100 shadow-md p-6 rounded-lg">
//         <div className="w-full md:w-1/2">
//           <img
//             src="/images/mechanic.jpg"
//             alt=""
//             className="roundedp-lg w-full h-auto"
//           />
//         </div>
//         {/* <div className="bg-white shadow-lg p-8 rounded-lg max-w-3xl"> */}
//         <div className="w-full md:w-1/2 md:text-left text-center">
//           <h1 className="font-bold text-gray-800 text-2xl">About Us</h1>
//           <p className="mt-2 text-gray-600">
//             "Finding reliable local services can be frustrating. We built
//             SkillFind to connect customers with trusted professionals
//             effortlessly. Whether you need a plumber at midnight or a cleaner
//             for your office, SkillFind ensures verified professionals, secure
//             payments, and real-time booking—all in one place."
//           </p>
//           <p className="mt-4 text-gray-600">
//             At Skillfind, our mission is to bridge the gap between service
//             providers and customers by offering a seamless and efficient
//             marketplace experience. We aim to empower both parties by providing
//             a reliable platform where quality, transparency, and customer
//             satisfaction are our top priorities.
//           </p>
//           {/* <FaCheckCircle className="mx-auto mb-4 w-12 h-12 text-green-600" /> */}
//           We prioritize quality and reliability Clear, detailed service listings
//           & reviews We Saving your time and effort. Smooth and satisfactory
//           experience
//         </div>
//         <h2 className="mb-2 font-semibold text-gray-700 text-2xl">
//           Our Mission
//         </h2>
//         <p className="mb-4 text-gray-600">
//           Our mission is to create user-friendly applications that solve
//           real-world problems efficiently and effectively.
//         </p>
//         <h2 className="mb-2 font-semibold text-gray-700 text-2xl">
//           Meet the Team
//         </h2>
//         <div className="flex space-x-6">
//           {/* Team Member 1 */}
//           <div className="text-center">
//             <img
//               className="mx-auto rounded-full w-24 h-24"
//               src="/images/mechanic.jpg"
//               alt="Team Member"
//             />
//             <p className="mt-2 font-medium text-gray-700">John Doe</p>
//             <p className="text-gray-500 text-sm">Founder & CEO</p>
//           </div>
//           {/* Team Member 2 */}
//           <div className="text-center">
//             <img
//               className="mx-auto rounded-full w-24 h-24"
//               src="https://via.placeholder.com/100"
//               alt="Team Member"
//             />
//             <p className="mt-2 font-medium text-gray-700">Jane Smith</p>
//             <p className="text-gray-500 text-sm">CTO</p>
//           </div>
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";
// import {
//   FaCheckCircle,
//   FaRegClock,
//   FaHeadset,
//   FaUserCheck,
//   FaBuilding,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="bg-gray-50 mt-16 py-12 about">
//       {" "}
//       <div className="mx-auto px-6 max-w-6xl">
//         {/* Storytelling Section */}
//         <div className="bg-white shadow-lg mb-8 p-8 rounded-lg">
//           <h2 className="mb-6 font-semibold text-blue-950 text-3xl text-center">
//             {" "}
//             About Us
//           </h2>
//           <p className="text-gray-700 text-xl">
//             "Finding reliable local services can be frustrating. We built
//             SkillFind to connect customers with trusted professionals
//             effortlessly. Whether you need a plumber at midnight or a cleaner
//             for your office, SkillFind ensures verified professionals, secure
//             payments, and real-time booking—all in one place."
//           </p>
//         </div>

//         {/* Why Choose Us? Section */}
//         <div className="mb-12 text-center">
//           <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
//             Why Choose Us?
//           </h2>
//           <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
//             {/* Verified Pros */}
//             <div className="flex flex-col items-center text-gray-700">
//               <FaUserCheck className="mb-4 text-green-600 text-4xl" />
//               <h3 className="font-semibold text-xl">Verified Pros</h3>
//               <p className="text-gray-500 text-sm">
//                 We vet all service providers.
//               </p>
//             </div>
//             {/* Escrow Payments */}
//             <div className="flex flex-col items-center text-gray-700">
//               <FaCheckCircle className="mb-4 text-yellow-600 text-4xl" />
//               <h3 className="font-semibold text-xl">Escrow Payments</h3>
//               <p className="text-gray-500 text-sm">
//                 Your money is safe until the job is done.
//               </p>
//             </div>
//             {/* Easy Scheduling */}
//             <div className="flex flex-col items-center text-gray-700">
//               <FaRegClock className="mb-4 text-blue-600 text-4xl" />
//               <h3 className="font-semibold text-xl">Easy Scheduling</h3>
//               <p className="text-gray-500 text-sm">
//                 Choose the best time for your service.
//               </p>
//             </div>
//             {/* Customer Support */}
//             <div className="flex flex-col items-center text-gray-700">
//               <FaHeadset className="mb-4 text-red-600 text-4xl" />
//               <h3 className="font-semibold text-xl">Customer Support</h3>
//               <p className="text-gray-500 text-sm">
//                 24/7 assistance for any concerns.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Our Mission Section */}
//         <div className="bg-white shadow-lg mb-8 p-8 rounded-lg">
//           <h2 className="mb-4 font-semibold text-blue-950 text-3xl text-center">
//             Our Mission
//           </h2>
//           <p className="text-gray-700">
//             Our mission is to bridge the gap between service providers and
//             customers by offering a seamless and efficient marketplace
//             experience. We aim to empower both parties by providing a reliable
//             platform where quality, transparency, and customer satisfaction are
//             our top priorities.
//           </p>
//         </div>

//         {/* Company History Section */}
//         <div className="bg-white shadow-lg mb-8 p-8 rounded-lg">
//           <h2 className="mb-4 font-semibold text-blue-950 text-3xl text-center">
//             Our Story
//           </h2>
//           <p className="text-gray-700">
//             SkillFind was founded in 2020 with the goal of simplifying the way
//             people find trusted professionals for their daily needs. After
//             facing difficulties in finding reliable local services ourselves, we
//             realized the need for a platform that ensures quality, transparency,
//             and security. Since then, we've been dedicated to helping users find
//             verified professionals while making payments easy and secure.
//           </p>
//         </div>

//         {/* Meet the Team Section */}
//         <div className="mb-12 text-center">
//           <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
//             Meet the Team
//           </h2>
//           <div className="flex justify-center space-x-6">
//             {/* Team Member 1 */}
//             <div className="text-center">
//               <img
//                 className="mx-auto mb-4 rounded-full w-24 h-24"
//                 src="/images/mechanic.jpg"
//                 alt="Team Member"
//               />
//               <p className="font-medium text-gray-700">John Doe</p>
//               <p className="text-gray-500 text-sm">Founder & CEO</p>
//             </div>
//             {/* Team Member 2 */}
//             <div className="text-center">
//               <img
//                 className="mx-auto mb-4 rounded-full w-24 h-24"
//                 src="https://via.placeholder.com/100"
//                 alt="Team Member"
//               />
//               <p className="font-medium text-gray-700">Jane Smith</p>
//               <p className="text-gray-500 text-sm">CTO</p>
//             </div>
//           </div>
//         </div>

//         {/* Vision Statement Section */}
//         <div className="bg-white shadow-lg mb-8 p-8 rounded-lg">
//           <h2 className="mb-4 font-semibold text-blue-950 text-3xl text-center">
//             Our Vision
//           </h2>
//           <p className="text-gray-700">
//             Our vision is to become the leading platform for local service
//             discovery, where customers and professionals meet, collaborate, and
//             grow together. We aim to enhance the quality of service delivery
//             across the globe by enabling access to verified, skilled
//             professionals in every industry.
//           </p>
//         </div>

//         {/* Contact Information Section */}
//         <div className="bg-white shadow-lg mb-8 p-8 rounded-lg">
//           <h2 className="mb-4 font-semibold text-blue-950 text-3xl text-center">
//             Contact Us
//           </h2>
//           <p className="mb-4 text-gray-700">
//             We would love to hear from you! Whether you have a question,
//             feedback, or would like to learn more about SkillFind, our team is
//             always here to help.
//           </p>

//           {/* Address Information */}
//           <div className="flex items-center gap-4 text-gray-700">
//             <FaBuilding className="text-xl" />
//             <p>123 SkillFind Street, TechCity, Country</p>
//           </div>
//           {/* Phone Information */}
//           <div className="flex items-center gap-4 mt-4 text-gray-700">
//             <FaPhoneAlt className="text-xl" />
//             <p>(123) 456-7890</p>
//           </div>

//           {/* Email Information */}
//           <div className="flex items-center gap-4 mt-4 text-gray-700">
//             <FaEnvelope className="text-xl" />
//             <a href="mailto:support@skillfind.com" className="text-blue-600">
//               support@skillfind.com
//             </a>
//           </div>

//           {/* Contact Form Section */}
//           <div className="mt-8">
//             <h3 className="mb-4 font-semibold text-gray-800 text-xl">
//               Send Us a Message
//             </h3>
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block font-medium text-gray-700 text-sm"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Enter your name"
//                   className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block font-medium text-gray-700 text-sm"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block font-medium text-gray-700 text-sm"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   placeholder="Type your message here..."
//                   className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 rounded-lg w-full text-white"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
<<<<<<< HEAD
import { FaCalendarCheck, FaCheckCircle, FaLock } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
=======
import { motion } from "framer-motion";
import testimonials from "../data/testimonialsData";
>>>>>>> 388871fe2d7b8560008105873cd8efdce4673127
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
<<<<<<< HEAD
import testimonials from "../data/testimonialsData";
// import categories from "../data/categories.jsx";

const About = () => {
  return (
    <div className="about bg-gray-100 mt-16 py-20">
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row items-center gap-6 p-6">
        <div className="w-50 md:w-1/3">
          <img
            src="/images/mechanic.jpg"
            alt=""
            className="w-full roundedp-lg"
          />
        </div>
        {/* <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8"> */}
        feg{" "}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-2">
            "Finding reliable local services can be frustrating. We built
            SkillFind to connect customers with trusted professionals
            effortlessly. Whether you need a plumber at midnight or a cleaner
            for your office, SkillFind ensures verified professionals, secure
            payments, and real-time booking—all in one place."
=======

const features = [
  {
    title: "Verified Pros",
    icon: "/icons/verified-badge-svgrepo-com.svg",
    description:
      "We thoroughly vet every service provider to ensure only the most reliable professionals are listed.",
  },
  {
    title: "Escrow Payments",
    icon: "/icons/payment-security-lock-svgrepo-com (1).svg",
    description:
      "Your payment is held safely until the job is completed to your satisfaction.",
  },
  {
    title: "Easy Scheduling",
    icon: "/icons/calendar-clock-svgrepo-com.svg",
    description:
      "Book services when it’s most convenient for you, with real-time updates.",
  },
  {
    title: "24/7 Support",
    icon: "/icons/headset-support-svgrepo-com.svg",
    description: "Got a concern? We’re here round the clock to help you out.",
  },
];

const About = () => {
  return (
    <main className="space-y-20 bg-white mx-auto mt-20 px-6 py-16 max-w-7xl text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-cover bg-no-repeat bg-center text-center"
        style={{
          backgroundImage: "url('/images/carpenter.jpg')",
          padding: "100px 0",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 relative text-white">
          <h1 className="mb-4 font-bold text-4xl sm:text-5xl">
            About SkillFind
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl">
            Let’s be honest—finding a reliable plumber, mechanic, or electrician
            in a hurry can feel like looking for a unicorn. That's why we built
            SkillFind. We believe you shouldn’t have to depend on random
            WhatsApp groups or hope your neighbor knows a guy.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
            SkillFind connects everyday people and businesses with{" "}
            <b>verified</b>, <b>trusted</b>, and <b>affordable</b> service
            providers. Whether it’s a midnight plumbing emergency or a weekend
            home cleaning, we’ve got your back—with escrow payments,
            KYC-verified professionals, and real-time service tracking.
          </p>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative flex md:flex-row flex-col justify-between items-center bg-gray-100 p-8 rounded-lg"
      >
        {/* Image on the Left */}
        <div className="z-10 relative md:w-1/2">
          <img
            src="/images/homeRepair3.jpg"
            alt="Why SkillFind"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Text on the Right */}
        <div className="z-10 relative mt-4 md:mt-0 md:w-1/2 max-w-lg text-gray-800">
          <h2 className="mb-4 font-semibold text-blue-950 text-3xl">
            Why SkillFind?
          </h2>
          <p className="text-lg">
            Tired of WhatsApp group referrals and last-minute disappointments?
            We feel you. SkillFind connects users with skilled, vetted
            professionals for everything from plumbing to party catering.
>>>>>>> 388871fe2d7b8560008105873cd8efdce4673127
          </p>
          <p className="mt-4 text-lg">
            With built-in escrow and real-time service tracking, you stay in
            control every step of the way.
          </p>
<<<<<<< HEAD
          {/* <FaCheckCircle className="mx-auto mb-4 w-12 h-12 text-green-600" /> */}
<div className="flex flex-wrap mt-8 ">
            <p className="flex w-1/2 mb-2">
              <IoCheckmarkCircle className="text-2xl text-red-500" />{" "}
              <span>We prioritize quality and reliability</span>
            </p>

            <p className="flex w-1/2">
              <IoCheckmarkCircle className="text-2xl text-red-500" />
              <span>Clear, detailed service listings & reviews </span>
            </p>

            <p className="flex w-1/2">
              <IoCheckmarkCircle className="text-2xl text-red-500" />
              <span>We Saving your time and effort.</span>
            </p>
            <p className="flex w-1/2">
              <IoCheckmarkCircle className="text-2xl text-red-500" />
              <span>Smooth and satisfactory experience.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 w-full">
        <div className="mx-auto px-6 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-blue-950 text-3xl ">
            Why Choose Us?
        </h2>
          <p className="mb-10 text-gray-600 text-lg">
            The best platform for hiring skilled professionals effortlessly.
          </p>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <FaCheckCircle className="mx-auto mb-4 w-12 h-12 text-green-600 text-center" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Verified Professionals
              </h3>
              <p className="mt-2 text-gray-600">
                We rigorously vet all service providers, ensuring they meet high
                standards of quality and professionalism.
              </p>
              <p className="font-medium text-green-700">
                📌 KYC verified experts
        </p>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <FaLock className="mx-auto mb-4 w-12 h-12 text-pink-600" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Secure Escrow Payments
              </h3>
              <p className="mt-2 text-gray-600">
                Your funds are held securely until the service is satisfactorily
                completed, protecting both parties.
              </p>
              <p className="font-medium text-green-700">
                🔒 Seamless transactions with Paystack & Flutterwave
              </p>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <FaCalendarCheck className="mx-auto mb-4 w-12 h-12 text-blue-500" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Flexible Scheduling
              </h3>
              <p className="mt-2 text-gray-600">
                Our system allows you to select service times that best fit your
                personal or professional commitments.
              </p>
              <p className="font-medium text-green-700">
                📅 Instant availability and real-time updates
              </p>
            </div>
            <div className="bg-gray-100 shadow-md p-6 rounded-lg text-center">
              <PiPhoneCallLight className="mx-auto mb-4 w-12 h-12 text-blue-500" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Customer Support
              </h3>
              <p className="mt-2 text-gray-600">
                Our dedicated team is available around the clock to assist with
                any concerns or questions.
              </p>
              <p className="font-medium text-green-700">
                📅 24/7 assistance for any concerns
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="mx-auto px-6 max-w-6xl text-center">
          <h2 className="mb-6 font-bold text-blue-950 text-3xl">
            What Our Users Say About SkillFind
          </h2>
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 1 }, // 1 on small screens
              1024: { slidesPerView: 2 }, // 2 on medium screens
              1280: { slidesPerView: 3 }, // 3 on larger screens
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center bg-white shadow-lg p-8 rounded-lg text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="mb-4 border-4 border-blue-950 rounded-full w-24 h-24"
            />
                  <p className="text-gray-800 text-lg italic">
                    {testimonial.text}
                  </p>
                  <h4 className="mt-4 font-semibold text-blue-950">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
          </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="bg-green-600 mt-6 px-6 py-3 rounded-full font-semibold text-white">
            Write a Review
          </button>
        </div>
      </div>
    </div>

    // </div>
=======
        </div>
      </motion.section>

      {/* Features */}
      <section>
        <h2 className="mb-8 font-semibold text-blue-950 text-2xl">
          What Makes Us Different?
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 shadow-md hover:shadow-lg p-6 rounded-2xl text-center transition"
            >
              <div className="mx-auto mb-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto w-12 h-12"
                />
              </div>
              <h3 className="mb-2 font-semibold text-blue-950 text-xl">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center">
        {/* Testimonials Section */}
        <div className="bg-gray-100 py-16 w-full">
          <div className="mx-auto px-6 max-w-6xl text-center">
            <h2 className="mb-6 font-bold text-blue-950 text-3xl">
              What Our Users Say
            </h2>

            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 1 }, // 1 on small screens
                1024: { slidesPerView: 2 }, // 2 on medium screens
                1280: { slidesPerView: 3 }, // 3 on larger screens
              }}
              loop={true}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center bg-white shadow-lg p-8 rounded-lg text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mb-4 border-4 border-blue-950 rounded-full w-24 h-24"
                    />
                    <p className="text-gray-800 text-lg italic">
                      "{testimonial.text}"
                    </p>
                    <h4 className="mt-4 font-semibold text-blue-950">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="bg-green-600 mt-6 px-6 py-3 rounded-lg font-semibold text-white">
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-100 shadow-inner p-8 rounded-xl text-center">
        <h2 className="mb-4 font-bold text-blue-950 text-2xl">
          Ready to Skill Up?
        </h2>
        <p className="mb-6 text-gray-700">
          Whether you're a professional looking to grow your business or someone
          needing help around the house, SkillFind is your one-stop solution.
        </p>
        <div className="flex justify-center gap-6">
          {/* Button for Service Providers */}
          <a
            href="/service-provider-signup"
            className="inline-block bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold text-white transition"
          >
            Find a Job
          </a>
          {/* Button for Customers */}
          <a
            href="/customer-signup"
            className="inline-block hover:bg-green-500 px-6 py-3 border-2 border-green-600 rounded-lg font-semibold text-green-600 hover:text-white transition"
          >
            Find a Professional
          </a>
        </div>
      </section>
    </main>
>>>>>>> 388871fe2d7b8560008105873cd8efdce4673127
  );
};

export default About;

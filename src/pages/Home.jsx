import React from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaCheckCircle, FaLock, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import testimonials from "../data/testimonialsData";

const Home = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        className="relative flex justify-center items-center bg-cover bg-center pt-[100px] w-full min-h-screen text-gray-900"
        style={{
          backgroundImage: "url('/images/scattered-forcefields.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center mx-auto w-[85%] max-w-7xl">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl text-left">
            <h1 className="font-bold text-blue-950 text-5xl leading-tight">
              Find Trusted Professionals for Every Need, Anytime!
            </h1>
            <p className="text-blue-950 text-xl">
              From plumbing to car repairs, SkillFind connects you with reliable
              service providers in minutes.
            </p>
            <p className="text-gray-600 text-base">
              Browse 100+ Verified Listings & Connect with Top-Rated
              Professionals Instantly!
            </p>

            {/* Search Bar */}
            <div className="flex items-center space-x-2 bg-white shadow-lg p-3 border border-green-600 rounded-full w-full max-w-3xl">
              <div className="flex items-center space-x-2 w-[60%]">
                <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-12 h-12">
                  <FiSearch className="w-6 h-6 text-yellow-400" />
                </div>
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="px-2 outline-none w-full font-medium text-blue-950 text-base"
                />
              </div>

              {/* Divider */}
              <div className="bg-gray-300 mx-3 w-[1px] h-8"></div>

              <div className="flex items-center space-x-2 w-[40%]">
                <div className="flex justify-center items-center bg-yellow-400/10 rounded-full w-12 h-12">
                  <GoLocation className="w-6 h-6 text-yellow-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="px-2 outline-none w-full font-medium text-blue-950 text-base"
                />
              </div>

              <button className="bg-yellow-400 ml-4 px-6 py-3 rounded-full font-semibold text-blue-950 text-lg">
                Search
              </button>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="hidden lg:flex flex-col justify-center items-end mt-10 w-[40%]">
            <div className="flex justify-end space-x-4 w-full">
              <motion.img
                src="/images/painter.jpg"
                alt="Expert 1"
                className="shadow-xl border-4 border-green-600 rounded-full w-32 h-32"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src="/images/carpenter.jpg"
                alt="Expert 2"
                className="shadow-xl border-4 border-green-600 rounded-full w-56 h-56"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="flex justify-start space-x-4 mt-4 w-full">
              <motion.img
                src="/images/mechanic.jpg"
                alt="Expert 3"
                className="shadow-xl border-4 border-green-600 rounded-full w-56 h-56"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.img
                src="/images/repairman.jpg"
                alt="Expert 4"
                className="shadow-xl border-4 border-green-600 rounded-full w-32 h-32"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Properly Below Hero */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="mx-auto px-6 max-w-7xl text-center">
          <h2 className="mb-6 font-bold text-blue-950 text-3xl">
            Why Choose Us?
          </h2>
          <p className="mb-10 text-gray-600 text-lg">
            The best platform for hiring skilled professionals effortlessly.
          </p>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaCheckCircle className="mx-auto mb-4 w-12 h-12 text-green-600" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Verified Professionals
              </h3>
              <p className="mt-2 text-gray-600">
                We verify all service providers, so you get only the best.
              </p>
              <p className="font-medium text-green-700">
                📌 KYC verified experts
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaLock className="mx-auto mb-4 w-12 h-12 text-yellow-500" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Secure Payments
              </h3>
              <p className="mt-2 text-gray-600">
                Escrow system protects your money until the job is done.
              </p>
              <p className="font-medium text-green-700">
                🔒 Seamless transactions with Paystack & Flutterwave
              </p>
            </motion.div>

            <motion.div
              className="bg-white shadow-md p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaCalendarCheck className="mx-auto mb-4 w-12 h-12 text-blue-500" />
              <h3 className="font-semibold text-blue-950 text-xl">
                Easy Booking
              </h3>
              <p className="mt-2 text-gray-600">
                Find, book, and track service providers in just a few clicks.
              </p>
              <p className="font-medium text-green-700">
                📅 Instant availability and real-time updates
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 w-full">
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
                <div className="flex flex-col items-center bg-gray-100 shadow-lg p-8 rounded-lg text-center">
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
          <button className="bg-yellow-400 mt-6 px-6 py-3 rounded-full font-semibold text-blue-950">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

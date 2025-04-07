import React from "react";
import { FaCalendarCheck, FaCheckCircle, FaLock } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
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
          </p>
          <p className="text-gray-600 mt-4">
            At Skillfind, our mission is to bridge the gap between service
            providers and customers by offering a seamless and efficient
            marketplace experience. We aim to empower both parties by providing
            a reliable platform where quality, transparency, and customer
            satisfaction are our top priorities.
          </p>
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
  );
};

export default About;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Header />

      {/* 🔥 Hero Section */}
      <section className="relative flex justify-center items-center bg-[url('/src/assets/images/scattered-forcefields.svg')] bg-cover bg-no-repeat bg-center h-[500px] text-white text-center">
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="font-bold text-4xl">Find & Hire Trusted Experts</h1>
          <p className="mt-2 text-lg">
            Connect with professionals for your home & business needs in
            seconds.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

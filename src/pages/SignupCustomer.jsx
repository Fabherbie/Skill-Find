import { useState } from "react";

const SignupCustomer = () => {
  const [role, setRole] = useState("");

  return (
    <div>
      <h1>Signup as a Customer</h1>
      {/* Your signup form here */}
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
          <h2 className="font-bold text-gray-700 text-2xl text-center">
            Sign Up
          </h2>

          {/* Role Toggle */}
          <div className="flex justify-center my-4">
            <button
              onClick={() => setRole("customer")}
              className={`px-4 py-2 rounded-l-lg ${
                role === "customer" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Customer
            </button>
          </div>

          {/* Sign-Up Form */}
          <form className="mt-4">
            <div className="mb-4">
              <label className="block mb-2 text-gray-600 text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            {role === "customer" && (
              <div className="mb-4">
                <label className="block mb-2 text-gray-600 text-sm">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-2 text-gray-600 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-600 text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg w-full text-white transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-gray-500 text-sm text-center">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500">
              Sign In
            </a>
          </p>
        </div>
      </div>
      );
    </div>
  );
};

export default SignupCustomer;

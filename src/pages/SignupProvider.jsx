
import { useState } from "react";

const SignupProvider = () => {
  const [role, setRole] = useState('')
  return (
    <div>
      <h1>Signup as a Provider</h1>
      {/* Your signup form here */}

      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Sign Up
          </h2>

          {/* Role Toggle */}
          <div className="flex justify-center my-4">

            <button
              onClick={() => setRole('serviceProvider')}
              className={`px-4 py-2 rounded-r-lg ${role === 'serviceProvider'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
                }`}
            >
              Service Provider
            </button>
          </div>

          {/* Sign-Up Form */}
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {role === 'serviceProvider' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm mb-2">
                    Service Category
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Freelancer</option>
                    <option>Business Owner</option>
                    <option>Contractor</option>
                    <option>Vendor</option>
                  </select>
                </div>
              </>
            )}


            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
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

export default SignupProvider;

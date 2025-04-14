import React, { useState } from "react";
import "../index.css";

const ProviderSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    trade: "",
    nin: "",
    password: "",
    idUpload: null,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]|:;"'<>,.?/~`]).{6,}$/;
    return regex.test(password);
  };

  const passwordChecklist = {
    uppercase: /[A-Z]/.test(formData.password),
    number: /\d/.test(formData.password),
    symbol: /[!@#$%^&*()_+\-={}\[\]|:;"'<>,.?/~`]/.test(formData.password),
    minLength: formData.password.length >= 6,
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "idUpload") {
      setFormData({ ...formData, idUpload: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must include uppercase, number, symbol, and be at least 6 characters";
    }
    if (!formData.nin || formData.nin.length !== 11) {
      newErrors.nin = "NIN must be exactly 11 digits";
    }
    if (!formData.idUpload) {
      newErrors.idUpload = "Please upload a valid form of ID.";
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Form Submitted", formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-green-200 to-green-300 opacity-0 min-h-screen animate-[fadeIn_1s_ease-out_forwards]">
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl mt-7 mb-6 rounded-2xl w-full max-w-5xl overflow-hidden">
        <div
          className="md:block flex justify-center items-center space-x-4 bg-image bg-cover bg-no-repeat bg-center shadow-lg w-full h-full hover:scale-110 transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('/images/illustration.png')` }}
        ></div>
        <div className="bg-white opacity-0 mx-auto p-8 w-full animate-[slideIn_0.7s_ease-out_forwards] transform">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="/images/skill-find logo.svg"
              alt="SkillFind Logo"
              className="h-10"
            />
            <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
          </div>

          <h2 className="mb-6 font-bold text-blue-950 text-2xl">
            Provider Sign Up
          </h2>

          {success && (
            <div className="bg-green-100 mb-4 p-3 rounded text-green-700 text-sm animate-bounce-in">
              Registration Successful!
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block font-medium text-gray-700 text-sm"
              >
                Full Name
              </label>
              <input
                name="fullName"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-gray-700 text-sm"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="trade"
                className="block font-medium text-gray-700 text-sm"
              >
                Trade (e.g., Plumbing, Carpentry)
              </label>
              <input
                name="trade"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="nin"
                className="block font-medium text-gray-700 text-sm"
              >
                NIN
              </label>
              <input
                name="nin"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
              {errors.nin && (
                <p className="mt-1 text-red-500 text-sm">{errors.nin}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="idUpload"
                className="block font-medium text-gray-700 text-sm"
              >
                Upload Valid ID (e.g., NIN, Voter's Card, Driver's License)
              </label>
              <input
                type="file"
                name="idUpload"
                accept="image/*,application/pdf"
                onChange={handleChange}
                className="block hover:file:bg-green-100 file:bg-green-50 mt-1 file:mr-4 file:px-4 file:py-2 file:border-0 file:rounded w-full max-w-sm file:font-semibold text-gray-700 file:text-green-700 text-sm file:text-sm"
              />
              {errors.idUpload && (
                <p className="mt-1 text-red-500 text-sm">{errors.idUpload}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-700 text-sm"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
                className="block shadow-sm mt-1 p-2 border border-green-300 rounded-md w-full"
              />
              <ul className="space-y-1 mt-2 text-sm">
                <li
                  className={
                    passwordChecklist.uppercase
                      ? "text-green-600"
                      : "text-gray-500"
                  }
                >
                  • At least one uppercase letter
                </li>
                <li
                  className={
                    passwordChecklist.number
                      ? "text-green-600"
                      : "text-gray-500"
                  }
                >
                  • At least one number
                </li>
                <li
                  className={
                    passwordChecklist.symbol
                      ? "text-green-600"
                      : "text-gray-500"
                  }
                >
                  • At least one symbol
                </li>
                <li
                  className={
                    passwordChecklist.minLength
                      ? "text-green-600"
                      : "text-gray-500"
                  }
                >
                  • At least 6 characters
                </li>
              </ul>
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg w-full font-semibold text-white hover:animate-pulse"
            >
              Register
            </button>
          </form>

          <div className="mt-6">
            <p className="mb-2 text-gray-600 text-sm text-center">
              Or sign up with
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 bg-white px-4 py-2 border border-black rounded-md text-gray-700 text-sm hover:scale-105 transition-transform boarder">
                <img
                  src="/icons/apple-logo.png"
                  alt="Apple"
                  className="w-5 h-5"
                />{" "}
                Apple
              </button>
              <button className="flex items-center gap-2 bg-white px-4 py-2 border border-green-700 rounded-lg text-gray-700 text-sm hover:scale-105 transition-transform">
                <img
                  src="/icons/google-logo-2.png"
                  alt="Google"
                  className="w-5 h-5"
                />{" "}
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSignup;

// import React from "react";
// import { FaFacebookF, FaGoogle, FaUpload, FaApple } from "react-icons/fa";

// const SignupProvider = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Left Side - Image + Testimonial */}
//       <div className="hidden lg:flex flex-col justify-center items-center bg-green-100 p-10 w-1/2">
//         <div className="flex justify-center items-center space-x-4 bg-image bg-cover bg-center shadow-lg mt-6 mb-6 rounded-lg w-full h-48">
//           <img
//             src="/images/illustration or abstract image depicting hiring artisans or service providers for a web app signup page.png"
//             alt="Abstract"
//           />
//         </div>

{
  /* <div className="flex items-center space-x-4 mb-6">
          <img
            src="/images/skill-find logo.svg"
            alt="SkillFind Logo"
            className="h-10"
          />
          <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
        </div>
        <img
          src="/images/uche.jpg"
          alt="Work Showcase"
          className="shadow-lg rounded-lg w-96 h-auto"
        />
        <blockquote className="mt-6 max-w-md text-blue-950 text-lg text-center italic">
          "SkillFind helped me grow my business 10x in 6 months. The platform is
          seamless, trustworthy, and packed with real opportunities!"
        </blockquote>
        <p className="mt-2 text-gray-700 text-sm">
          – Mary, Certified Electrician
        </p> */
}
// </div>

//       {/* Right Side - Form */}
//       <div className="flex flex-col justify-center p-10 w-full lg:w-1/2">
//         <div className="flex items-center space-x-4 mb-6">
//           <img
//             src="/images/skill-find logo.svg"
//             alt="SkillFind Logo"
//             className="h-10"
//           />
//           <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
//         </div>
//         <div className="mx-auto w-full max-w-md">
//           <h2 className="mb-6 font-semibold text-blue-950 text-2xl">
//             Become a Service Provider
//           </h2>

//           <div className="mb-1">
//             <label className="block font-medium text-blue-950">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter Full Name"
//               className="mb-2 p-2 border border-green-700 rounded-lg w-full input-style"
//             />
//           </div>
//           <div className="mb-1">
//             <label className="block font-medium text-blue-950">Email</label>
//             <input
//               type="email"
//               placeholder="janedoe@memail.com"
//               className="mb-2 p-2 border border-green-700 rounded-lg w-full input-style"
//             />
//           </div>
//           <div className="mb-1">
//             <label className="block font-medium text-blue-950">Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               className="mb-2 p-2 border border-green-700 rounded-lg"
//             />
//           </div>

//           {/* Upload ID, Certs, etc. */}
//           <div className="mb-1">
//             <label className="block mb-1 font-medium">
//               Upload Valid ID (e.g., NIN, Voter's Card, Driver's License)
//             </label>
//             <input
//               type="file"
//               className="mb-2 p-2 border border-green-700 rounded-lg input-style"
//             />
//             {/* <FaUpload /> */}
//           </div>
//           <div className="mb-1">
//             <label className="block mb-1 font-medium">
//               Certifications (Optional)
//             </label>
//             <input
//               type="file"
//               className="mb-2 p-2 border border-green-700 rounded-lg input-style"
//             />
//             {/* <FaUpload /> */}
//           </div>
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Bank Detail</label>
//             <input
//               type="text"
//               placeholder="Bank Account Details"
//               className="mb-2 p-2 border border-green-700 rounded-lg input-style"
//             />
//           </div>

//           <button className="bg-green-600 hover:bg-green-700 py-3 rounded-md w-full font-semibold text-white">
//             Sign Up
//           </button>

//           {/* Social Login */}
//           <div className="flex gap-4 mt-4 mb-6">
//             <button className="flex flex-1 justify-center items-center hover:bg-gray-100 py-2 border border-gray-300 rounded-md">
//               <FaGoogle className="mr-2" /> Google
//             </button>
//             <button className="flex flex-1 justify-center items-center hover:bg-gray-100 py-2 border border-gray-300 rounded-md">
//               <FaFacebookF className="mr-2" /> Facebook
//             </button>
//           </div>
//           <p className="mt-4 text-gray-600 text-sm text-center">
//             Already have an account?{" "}
//             <a href="/login" className="font-medium text-green-600">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupProvider;

// import { useState } from "react";

// const SignupProvider = () => {
//   const [role, setRole] = useState("");
//   return (
//     <div>
//       <h1>Signup as a Provider</h1>
//       {/* Your signup form here */}
//       <div className="flex justify-center items-center bg-gray-100 min-h-screen">
//         <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
//           <h2 className="font-bold text-gray-700 text-2xl text-center">
//             Sign Up
//           </h2>

//           {/* Role Toggle */}
//           <div className="flex justify-center my-4">
//             <button
//               onClick={() => setRole("serviceProvider")}
//               className={`px-4 py-2 rounded-r-lg ${
//                 role === "serviceProvider"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Service Provider
//             </button>
//           </div>

//           {/* Sign-Up Form */}
//           <form className="mt-4">
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-600 text-sm">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your full name"
//                 className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               />
//             </div>

//             {role === "serviceProvider" && (
//               <>
//                 <div className="mb-4">
//                   <label className="block mb-2 text-gray-600 text-sm">
//                     Business Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your business name"
//                     className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block mb-2 text-gray-600 text-sm">
//                     Service Category
//                   </label>
//                   <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
//                     <option>Freelancer</option>
//                     <option>Business Owner</option>
//                     <option>Contractor</option>
//                     <option>Vendor</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             <div className="mb-4">
//               <label className="block mb-2 text-gray-600 text-sm">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-2 text-gray-600 text-sm">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 py-2 rounded-lg w-full text-white transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="mt-4 text-gray-500 text-sm text-center">
//             Already have an account?{" "}
//             <a href="/signin" className="text-blue-500">
//               Sign In
//             </a>
//           </p>
//         </div>
//       </div>
//       );
//     </div>
//   );
// };

// export default SignupProvider;

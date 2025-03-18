import React from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const serviceProviders = [
  {
    id: 1,
    name: "John Olanrewaju Plumbing",
    category: "plumbing", // Make sure this matches exactly with categorySlug
    location: "Lagos, Nigeria",
    rating: 4.7,
    phone: "+234 801 234 5678",
    image: "/images/plumber.jpg",
  },
  {
    id: 2,
    name: "Fix-It Electricians",
    category: "electrician",
    location: "Abuja, Nigeria",
    rating: 4.5,
    phone: "+234 902 345 6789",
    image: "/images/electrician.jpg",
  },
  {
    id: 3,
    name: "Elite Car Repairs",
    category: "mechanic",
    location: "Kano, Nigeria",
    rating: 4.8,
    phone: "+234 803 456 7890",
    image: "/images/mechanic.jpg",
  },
];

const ServicesPage = () => {
  const { categorySlug } = useParams();
  console.log("category slug from URL:", categorySlug);

  const filteredProviders = serviceProviders.filter(
    (provider) => provider.category.toLowerCase() === categorySlug.toLowerCase()
  );

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="mx-auto px-6 max-w-6xl">
        <h1 className="mb-6 font-bold text-blue-950 text-3xl text-center">
          {categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Service
          Providers
        </h1>

        {filteredProviders.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300 transform"
              >
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="font-semibold text-blue-950 text-xl">
                    {provider.name}
                  </h2>
                  <p className="flex items-center mt-2 text-gray-600">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    {provider.location}
                  </p>
                  <p className="flex items-center mt-2 text-yellow-500">
                    <FaStar className="mr-1" /> {provider.rating} / 5
                  </p>
                  <p className="flex items-center mt-2 text-gray-700">
                    <FaPhone className="mr-2 text-green-600" />
                    {provider.phone}
                  </p>
                  <button className="bg-green-600 hover:bg-yellow-500 mt-4 py-2 rounded-lg w-full font-semibold text-white transition">
                    Contact Provider
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center">
            No service providers found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;

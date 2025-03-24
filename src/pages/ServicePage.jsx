import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ServiceProvidersModal from "../components/ServiceProvidersModal";

const serviceProviders = [
  {
    id: 1,
    name: "John Olanrewaju Plumbing",
    category: "plumbing",
    location: "Lagos, Nigeria",
    rating: 4.7,
    phone: "+234 801 234 5678",
    image: "/images/plumber2.jpg",
  },
  {
    id: 2,
    name: "Fix-It Electricians",
    category: "electrical-repairs",
    location: "Abuja, Nigeria",
    rating: 4.5,
    phone: "+234 902 345 6789",
    image: "/images/electricalRepair.jpg",
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
  {
    id: 4,
    name: "Naija Sparkle Cleaning",
    category: "cleaning-services",
    location: "Lagos, Nigeria",
    rating: 4.7,
    phone: "+234 801 234 5678",
    image: "/images/cleaning.jpg",
  },
  {
    id: 5,
    name: "TopNotch Cleaners",
    category: "cleaning-services",
    location: "Abuja, Nigeria",
    rating: 4.6,
    phone: "+234 802 345 6789",
    image: "/images/cleaning.jpg",
  },
  {
    id: 6,
    name: "SwiftShine Cleaning Services",
    category: "cleaning-services",
    location: "Port Harcourt, Nigeria",
    rating: 4.8,
    phone: "+234 803 456 7890",
    image: "/images/cleaning.jpg",
  },
  {
    id: 7,
    name: "EverBright Hygiene",
    category: "cleaning-services",
    location: "Ibadan, Nigeria",
    rating: 4.5,
    phone: "+234 804 567 8901",
    image: "/images/cleaning.jpg",
  },
  {
    id: 8,
    name: "SharpGuy Barbers",
    category: "barber",
    location: "Lagos, Nigeria",
    rating: 4.9,
    phone: "+234 805 678 9012",
    image: "/images/barber.jpg",
  },
  {
    id: 9,
    name: "Fade Masters NG",
    category: "barber",
    location: "Abuja, Nigeria",
    rating: 4.8,
    phone: "+234 806 789 0123",
    image: "/images/barber.jpg",
  },
  {
    id: 10,
    name: "Naija Cuts & Styles",
    category: "barber",
    location: "Kano, Nigeria",
    rating: 4.7,
    phone: "+234 807 890 1234",
    image: "/images/barber.jpg",
  },
  {
    id: 11,
    name: "Elite Grooming Lounge",
    category: "barber",
    location: "Ibadan, Nigeria",
    rating: 4.6,
    phone: "+234 808 901 2345",
    image: "/images/barber.jpg",
  },
  {
    id: 12,
    name: "PowerFix Electricians",
    category: "electrical-repairs",
    location: "Lagos, Nigeria",
    rating: 4.8,
    phone: "+234 809 012 3456",
    image: "/images/electricalRepair2.jpg",
  },
  {
    id: 13,
    name: "SwiftSpark Electricals",
    category: "electrical-repairs",
    location: "Abuja, Nigeria",
    rating: 4.7,
    phone: "+234 810 123 4567",
    image: "/images/electrician.jpg",
  },
  {
    id: 14,
    name: "LightUp Repairs",
    category: "electrical-repairs",
    location: "Port Harcourt, Nigeria",
    rating: 4.6,
    phone: "+234 811 234 5678",
    image: "/images/electrician.jpg",
  },
  {
    id: 15,
    name: "Current Masters",
    category: "electrical-repairs",
    location: "Kano, Nigeria",
    rating: 4.5,
    phone: "+234 812 345 6789",
    image: "/images/electrician.jpg",
  },
  {
    id: 16,
    name: "HomeFix Nigeria",
    category: "home-repair",
    location: "Lagos, Nigeria",
    rating: 4.7,
    phone: "+234 813 456 7890",
    image: "/images/homeRepair.jpg",
  },
  {
    id: 17,
    name: "Naija HandyPro",
    category: "home-repair",
    location: "Abuja, Nigeria",
    rating: 4.6,
    phone: "+234 814 567 8901",
    image: "/images/homeRepair2.jpg",
  },
  {
    id: 18,
    name: "QuickFix Homes",
    category: "home-repair",
    location: "Port Harcourt, Nigeria",
    rating: 4.8,
    phone: "+234 815 678 9012",
    image: "/images/homeRepair3.jpg",
  },
  {
    id: 19,
    name: "HouseRescue Repairs",
    category: "home-repair",
    location: "Kano, Nigeria",
    rating: 4.5,
    phone: "+234 816 789 0123",
    image: "/images/home-repairs.jpg",
  },
  {
    id: 20,
    name: "Splash & Shine Car Wash",
    category: "car-wash",
    location: "Lagos, Nigeria",
    rating: 4.9,
    phone: "+234 817 890 1234",
    image: "/images/car-wash.jpg",
  },
  {
    id: 21,
    name: "AutoFresh Car Spa",
    category: "car-wash",
    location: "Abuja, Nigeria",
    rating: 4.8,
    phone: "+234 818 901 2345",
    image: "/images/car-wash.jpg",
  },
  {
    id: 22,
    name: "Naija Clean Rides",
    category: "car-wash",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    phone: "+234 819 012 3456",
    image: "/images/car-wash.jpg",
  },
  {
    id: 23,
    name: "Premium Touch Car Wash",
    category: "car-wash",
    location: "Ibadan, Nigeria",
    rating: 4.6,
    phone: "+234 820 123 4567",
    image: "/images/car-wash.jpg",
  },
  {
    id: 24,
    name: "AquaFlow Plumbers",
    category: "plumbing",
    location: "Lagos, Nigeria",
    rating: 4.8,
    phone: "+234 821 234 5678",
    image: "/images/plumber3.jpg",
  },
  {
    id: 25,
    name: "PipeFix NG",
    category: "plumbing",
    location: "Abuja, Nigeria",
    rating: 4.7,
    phone: "+234 822 345 6789",
    image: "/images/plumber.jpg",
  },
  {
    id: 26,
    name: "SwiftDrain Plumbing",
    category: "plumbing",
    location: "Port Harcourt, Nigeria",
    rating: 4.6,
    phone: "+234 823 456 7890",
    image: "/images/plumber.jpg",
  },
  {
    id: 27,
    name: "Naija Leak Solutions",
    category: "plumbing",
    location: "Ibadan, Nigeria",
    rating: 4.5,
    phone: "+234 824 567 8901",
    image: "/images/plumber.jpg",
  },
  {
    id: 28,
    name: "Naija Prime Properties",
    category: "real-estate",
    location: "Lagos, Nigeria",
    rating: 4.9,
    phone: "+234 825 678 9012",
    image: "/images/real-estate.jpg",
  },
  {
    id: 29,
    name: "Royal Haven Realty",
    category: "real-estate",
    location: "Abuja, Nigeria",
    rating: 4.8,
    phone: "+234 826 789 0123",
    image: "/images/real-estate.jpg",
  },
  {
    id: 30,
    name: "SwiftLand Realtors",
    category: "real-estate",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    phone: "+234 827 890 1234",
    image: "/images/real-estate.jpg",
  },
  {
    id: 31,
    name: "Elite Homes NG",
    category: "real-estate",
    location: "Ibadan, Nigeria",
    rating: 4.6,
    phone: "+234 828 901 2345",
    image: "/images/real-estate.jpg",
  },
  {
    id: 32,
    name: "TimberCraft Carpentry",
    category: "carpentry",
    location: "Lagos, Nigeria",
    rating: 4.8,
    phone: "+234 829 012 3456",
    image: "/images/carpentry.jpg",
  },
  {
    id: 33,
    name: "Elite Woodworks",
    category: "carpentry",
    location: "Abuja, Nigeria",
    rating: 4.7,
    phone: "+234 830 123 4567",
    image: "/images/carpentry2.jpg",
  },
  {
    id: 34,
    name: "Naija MasterCarpenter",
    category: "carpentry",
    location: "Port Harcourt, Nigeria",
    rating: 4.6,
    phone: "+234 831 234 5678",
    image: "/images/carpentry3.jpg",
  },
  {
    id: 35,
    name: "Precision Woodworks",
    category: "carpentry",
    location: "Ibadan, Nigeria",
    rating: 4.5,
    phone: "+234 832 345 6789",
    image: "/images/carpentry.jpg",
  },
  {
    id: 36,
    name: "Fix-It Appliance Repairs",
    category: "appliance-repair",
    location: "Lagos, Nigeria",
    rating: 4.9,
    phone: "+234 833 456 7890",
    image: "/images/appliance-repair.jpg",
  },
  {
    id: 37,
    name: "SwiftFix Home Appliances",
    category: "appliance-repair",
    location: "Abuja, Nigeria",
    rating: 4.8,
    phone: "+234 834 567 8901",
    image: "/images/appliance-repair.jpg",
  },
  {
    id: 38,
    name: "Gadget Doctors NG",
    category: "appliance-repair",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    phone: "+234 835 678 9012",
    image: "/images/appliance-repair.jpg",
  },
  {
    id: 39,
    name: "Naija Appliance Experts",
    category: "appliance-repair",
    location: "Ibadan, Nigeria",
    rating: 4.6,
    phone: "+234 836 789 0123",
    image: "/images/appliance-repair.jpg",
  },
  {
    id: 40,
    name: "Delish Naija Catering",
    category: "catering",
    location: "Lagos, Nigeria",
    rating: 4.9,
    phone: "+234 837 890 1234",
    image: "/images/catering.jpg",
  },
  {
    id: 41,
    name: "Royal Tastes Catering",
    category: "catering",
    location: "Abuja, Nigeria",
    rating: 4.8,
    phone: "+234 838 901 2345",
    image: "/images/catering.jpg",
  },
  {
    id: 42,
    name: "Swift Bites Events",
    category: "catering",
    location: "Port Harcourt, Nigeria",
    rating: 4.7,
    phone: "+234 839 012 3456",
    image: "/images/catering.jpg",
  },
  {
    id: 43,
    name: "Naija Feast Caterers",
    category: "catering",
    location: "Ibadan, Nigeria",
    rating: 4.6,
    phone: "+234 840 123 4567",
    image: "/images/catering.jpg",
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();
  const { categorySlug } = useParams();
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("rating");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let filteredProviders = serviceProviders.filter(
    (provider) => provider.category.toLowerCase() === categorySlug.toLowerCase()
  );

  // Apply search filter
  if (searchQuery) {
    filteredProviders = filteredProviders.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  filteredProviders.sort((a, b) => {
    if (sortOption === "rating") {
      return b.rating - a.rating;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="mx-auto px-4 py-6 pt-24 container">
      {/* Back Button */}
      <div className="flex justify-start mb-4">
        <button
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-white"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      <h1 className="mt-4 font-bold text-blue-950 text-2xl">
        {categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Providers
      </h1>

      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Search by name or location"
          className="px-4 py-2 border border-blue-950 rounded-lg w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="px-4 py-2 border border-blue-950 rounded-lg text-blue-950"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="rating" className="text-blue-950">
            Sort by Rating
          </option>
          <option value="name" className="text-blue-950">
            Sort by Name
          </option>
        </select>
      </div>

      {filteredProviders.length === 0 ? (
        <p className="mt-4 text-gray-500 text-center">
          No service providers found.
        </p>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-6">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-gray-100 shadow-lg p-4 rounded-lg hover:scale-105 transition duration-300 transform"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="rounded-lg w-full h-40 object-cover"
              />
              <h2 className="mt-2 font-semibold text-blue-950 text-lg">
                {provider.name}
              </h2>
              <p className="text-gray-600">Location: {provider.location}</p>
              <p className="text-gray-600">Rating: ⭐ {provider.rating}</p>
              <p className="text-gray-600">Phone: {provider.phone}</p>
              <button
                className="bg-green-700 hover:bg-green-600 mt-2 px-4 py-2 rounded-lg w-full text-white"
                onClick={() => setSelectedProvider(provider)}
              >
                Contact Provider
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedProvider && (
        <ServiceProvidersModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}
    </div>
  );
};

export default ServicesPage;

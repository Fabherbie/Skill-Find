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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { categorySlug } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  console.log("category slug from URL:", categorySlug);

  const filteredProviders = categorySlug
    ? serviceProviders.filter(
        (provider) =>
          provider.category.toLowerCase() === categorySlug.toLowerCase()
      )
    : [];

  const handleContactClick = (provider) => {
    console.log("Clicked provider:", provider); // Debugging
    if (!provider) {
      console.error("No provider found!");
      return;
    }
    setSelectedProvider(provider);
    setModalOpen(true);
  };

  return (
    <div className="bg-yellow-50 py-10 min-h-screen">
      <div className="mx-auto px-6 max-w-6xl">
        <h1 className="mt-20 mb-4 font-bold text-blue-950 text-3xl text-center">
          {categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)} Service
          Providers
        </h1>

        {/* Back Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#2E8B57] hover:bg-gray-400 px-4 py-2 rounded-lg text-white"
          >
            ← Back to Categories
          </button>
        </div>

        {filteredProviders.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2">
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
                  <button
                    className="bg-[#2E8B57] hover:bg-yellow-500 mt-4 py-2 rounded-lg w-full font-semibold text-white transition cursor-pointer"
                    onClick={() => handleContactClick(provider)}
                  >
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
      {/* Modal Component */}
      {modalOpen && (
        <ServiceProvidersModal
          provider={selectedProvider}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ServicesPage;

import React, { useState } from "react";
import {
  Wrench,
  Car,
  PaintRoller,
  PaintBucket,
  Hammer,
  Scissors,
  Plug,
  ShieldCheck,
  Truck,
  Home,
  Phone,
  Users,
  Utensils,
  Heart,
  Globe,
  Briefcase,
  Building,
  Sprout,
  Dumbbell,
  ShoppingCart,
  BookOpen,
  Bus,
  Monitor,
  Drill,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: "/icons/Plumbing.svg",
  },
  {
    name: "Appliance Repair",
    slug: "appliance-repair",
    icon: "/icons/appliance.svg",
  },
  {
    name: "Car Wash",
    slug: "car-wash",
    icon: "/icons/car wash.svg",
  },
  {
    name: "Cleaning Services",
    slug: "cleaning-services",
    icon: "/icons/cleaning services.svg",
  },
  {
    name: "Painting",
    slug: "painting",
    icon: "/icons/painting.svg",
  },
  {
    name: "Carpentry",
    slug: "carpentry",
    icon: "/icons/carpentry.svg",
  },
  {
    name: "Barber",
    slug: "barber",
    icon: "/icons/barber.svg",
  },
  {
    name: "Electrical Repairs",
    slug: "electrical-repairs",
    icon: "/icons/electrician.svg",
  },
  {
    name: "Security Services",
    slug: "security-services",
    icon: "/icons/security service.svg",
  },
  {
    name: "Moving Services",
    slug: "moving-services",
    icon: "/icons/moving services.svg",
  },
  {
    name: "Home Repair",
    slug: "home-repair",
    icon: "/icons/home repairs.svg",
  },
  {
    name: "Mechanic",
    slug: "mechanic",
    icon: "/icons/mechanic.svg",
  },
  {
    name: "Event Planning",
    slug: "event-planning",
    icon: "/icons/event planning.svg",
  },
  {
    name: "Catering",
    slug: "catering",
    icon: "/icons/catering.svg",
  },
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    icon: "/icons/health and wellness.svg",
  },
  {
    name: "Travel & Tours",
    slug: "travel-tours",
    icon: "/icons/travels and tours.svg",
  },
  {
    name: "Business Consulting",
    slug: "business-consulting",
    icon: "/icons/business consulting.svg",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: "/icons/real estate.svg",
  },
  {
    name: "Gardening",
    slug: "gardening",
    icon: "/icons/gardening.svg",
  },
  {
    name: "Fitness Training",
    slug: "fitness-training",
    icon: "/icons/gym and fitness.svg",
  },
  {
    name: "Shopping Assistance",
    slug: "shopping-assistance",
    icon: "/icons/shoping assistance.svg",
  },
  {
    name: "Education & Tutoring",
    slug: "education-tutoring",
    icon: "/icons/Group.svg",
  },
  {
    name: "Transportation Services",
    slug: "transportation-services",
    icon: "/icons/Transport.svg",
  },
  {
    name: "Home Entertainment Setup",
    slug: "home-entertainment",
    icon: "/icons/home setup.svg",
  },
];

// const Categories = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(serviceProviders[category] || []);
//     setModalOpen(true);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="mb-4 font-bold text-2xl">Choose a Category</h1>

//       <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
//         <button
//           onClick={() => handleCategoryClick("carpentry")}
//           className="bg-blue-500 hover:bg-blue-600 shadow-md p-4 rounded-lg text-white"
//         >
//           Carpentry
//         </button>

//         <button
//           onClick={() => handleCategoryClick("applianceRepair")}
//           className="bg-green-500 hover:bg-green-600 shadow-md p-4 rounded-lg text-white"
//         >
//           Appliance Repair
//         </button>

//         <button
//           onClick={() => handleCategoryClick("catering")}
//           className="bg-red-500 hover:bg-red-600 shadow-md p-4 rounded-lg text-white"
//         >
//           Catering
//         </button>
//       </div>

//       {/* Modal Component */}
//       <ServiceProvidersModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//         providers={selectedCategory || []}
//       />
//     </div>
//   );
// };

// const CategoryList = () => {
//   return (
//     <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
//       {categories.map((category) => (
//         <Link
//           key={category.slug}
//           to={`/services/${category.slug}`}
//           className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg text-white text-center transition"
//         >
//           {category.name}
//         </Link>
//       ))}
//     </div>
//   );
// };

export default categories;

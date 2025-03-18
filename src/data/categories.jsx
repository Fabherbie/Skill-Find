import { Link } from "react-router-dom";
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
    icon: <Wrench className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Appliance Repair",
    slug: "appliance-repair",
    icon: <Drill className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Car Wash",
    slug: "car-wash",
    icon: <Car className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Cleaning Services",
    slug: "cleaning-services",
    icon: <Sprout className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Painting",
    slug: "painting",
    icon: <PaintRoller className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Carpentry",
    slug: "carpentry",
    icon: <Hammer className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Barber",
    slug: "barber",
    icon: <Scissors className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Electrical Repairs",
    slug: "electrical-repairs",
    icon: <Plug className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Security Services",
    slug: "security-services",
    icon: <ShieldCheck className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Moving Services",
    slug: "moving-services",
    icon: <Truck className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Home Repair",
    slug: "home-repair",
    icon: <Home className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Tech Support",
    slug: "tech-support",
    icon: <Phone className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Event Planning",
    slug: "event-planning",
    icon: <Users className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Catering",
    slug: "catering",
    icon: <Utensils className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    icon: <Heart className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Travel & Tours",
    slug: "travel-tours",
    icon: <Globe className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Business Consulting",
    slug: "business-consulting",
    icon: <Briefcase className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: <Building className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Gardening",
    slug: "gardening",
    icon: <Sprout className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Fitness Training",
    slug: "fitness-training",
    icon: <Dumbbell className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Shopping Assistance",
    slug: "shopping-assistance",
    icon: <ShoppingCart className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Education & Tutoring",
    slug: "education-tutoring",
    icon: <BookOpen className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Transportation Services",
    slug: "transportation-services",
    icon: <Bus className="w-12 h-12 text-[#2E8B57]" />,
  },
  {
    name: "Home Entertainment Setup",
    slug: "home-entertainment",
    icon: <Monitor className="w-12 h-12 text-[#2E8B57]" />,
  },
];

export default categories;

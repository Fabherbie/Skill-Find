import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaWheelchair,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

const Footer = ({ theme = "dark" }) => {
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("₦");

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "FR" : "EN");
  };

  const toggleCurrency = () => {
    const currencies = ["₦", "$", "€", "£"];
    const currentIndex = currencies.indexOf(currency);
    setCurrency(currencies[(currentIndex + 1) % currencies.length]);
  };

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-900" : "bg-green-700"
      } text-white py-8 px-6`}
    >
      <div className="gap-6 grid grid-cols-2 md:grid-cols-4 mx-auto container">
        {/* Categories Section */}
        <div>
          <h3 className="mb-3 font-bold text-lg">Categories</h3>
          <ul className="space-y-2">
            {[
              "Plumbing",
              "Carpentry",
              "Electrical Services",
              "Painting",
              "Cleaning",
              "More Services",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:underline">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Clients */}
        <div>
          <h3 className="mb-3 font-bold text-lg">For Clients</h3>
          <ul className="space-y-2">
            {[
              "Post a Job",
              "Hire an Expert",
              "Browse Services",
              "Manage Jobs",
            ].map((client) => (
              <li key={client}>
                <a href="#" className="hover:underline">
                  {client}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* For Artisans */}
        <div>
          <h3 className="mb-3 font-bold text-lg">For Artisans</h3>
          <ul className="space-y-2">
            {["Find Work", "Bid for Jobs", "Manage Bids"].map((artisan) => (
              <li key={artisan}>
                <a href="#" className="hover:underline">
                  {artisan}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="mb-3 font-bold text-lg">Company</h3>
          <ul className="space-y-2">
            {["About", "FAQs", "Help & Support", "Careers"].map((company) => (
              <li key={company}>
                <a href="#" className="hover:underline">
                  {company}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-4 mt-6 pt-4 border-gray-700 border-t">
        {/* Logo & Social Media */}
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-3">
            <img
              src="/images/skill-find logo.svg"
              alt="SkillFind Logo"
              className="w-10 h-10"
            />
            <h1 className="font-bold text-green-600 text-2xl">SkillFind</h1>
            <span>© SkillFind Ltd. {new Date().getFullYear()}</span>
          </div>
        </div>

        <div className="flex gap-x-3 text-lg">
          <a href="#" className="hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <IoLogoWhatsapp />
          </a>
        </div>

        {/* Language & Currency Switcher */}
        <div className="flex items-center gap-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-x-1 hover:underline"
          >
            <FaGlobe /> <span>{language}</span>
          </button>
          <button
            onClick={toggleCurrency}
            className="flex items-center gap-x-1 hover:underline"
          >
            <MdAttachMoney /> <span>{currency}</span>
          </button>
        </div>

        {/* Accessibility Menu */}
        <button className="flex items-center gap-x-1 hover:underline">
          <FaWheelchair /> <span>Accessibility</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

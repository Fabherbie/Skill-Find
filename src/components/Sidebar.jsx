import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaEnvelope,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: "/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    { to: "/dashboard/jobs", icon: <FaBriefcase />, label: "Jobs" },
    { to: "/dashboard/messages", icon: <FaEnvelope />, label: "Messages" },
    { to: "/dashboard/payments", icon: <FaMoneyBillWave />, label: "Payments" },
    { to: "/dashboard/profile", icon: <FaUser />, label: "Profile" },
  ];

  return (
    <div className="flex flex-col bg-green-600 p-6 w-64 h-full min-h-screen text-white">
      <h1 className="flex items-center gap-2 mb-6 font-bold text-white text-xl">
        <img
          src="../images/Group.svg"
          alt="SkillFind Logo"
          className="w-6 h-6"
        />
        SkillFind
      </h1>
      <hr className="mb-4" />
      <nav className="flex flex-col gap-4">
        {links.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-2 p-3 rounded-md shadow-md transition 
              ${
                location.pathname === to
                  ? "bg-green-500 text-white"
                  : "bg-green-700 hover:bg-green-500"
              }
            `}
          >
            {icon} {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

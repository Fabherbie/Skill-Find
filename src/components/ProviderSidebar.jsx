import { Link, useLocation } from "react-router-dom";
import {
  FaBriefcase,
  FaCheckCircle,
  FaCalendarAlt,
  FaWallet,
  FaUser,
  FaChartBar,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa";

const ProviderSidebar = () => {
  const location = useLocation();

  const links = [
    {
      to: "/provider-dashboard",
      icon: <FaChartBar />,
      label: "Dashboard",
    },
    {
      to: "/provider-dashboard/requests",
      icon: <FaBriefcase />,
      label: "Job Requests",
    },
    {
      to: "/provider-dashboard/accepted",
      icon: <FaCheckCircle />,
      label: "Accepted Jobs",
    },
    {
      to: "/provider-dashboard/completed",
      icon: <FaCheckCircle />,
      label: "Completed Jobs",
    },
    {
      to: "/provider-dashboard/calendar",
      icon: <FaCalendarAlt />,
      label: "Calendar",
    },
    {
      to: "/provider-dashboard/financials",
      icon: <FaWallet />,
      label: "Financials",
    },
    {
      to: "/provider-dashboard/profile",
      icon: <FaUser />,
      label: "Profile & Portfolio",
    },
    {
      to: "/provider-dashboard/messages",
      icon: <FaEnvelope />,
      label: "Messages",
    },
    {
      to: "/provider-dashboard/analytics",
      icon: <FaChartLine />,
      label: "Analytics",
    },
  ];

  return (
    <div className="top-0 left-0 fixed bg-green-600 p-6 w-64 h-full text-white">
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
            className={`flex items-center gap-3 p-3 rounded-md ${
              location.pathname === to ? "bg-green-700" : "hover:bg-green-500"
            }`}
          >
            {icon} {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default ProviderSidebar;

import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaEnvelope,
  FaMoneyBillWave,
  FaUser,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-green-600 p-6 w-64 min-h-screen text-white">
      <h1 className="flex items-center gap-2 mb-6 font-bold text-white text-xl">
        <img
          src="../images/Group.svg"
          alt="SkillFind Logo"
          className="w-6 h-6"
        />{" "}
        SkillFind
      </h1>
      <hr className="mb-4" />
      <nav className="flex flex-col gap-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 bg-green-700 hover:bg-green-500 shadow-md p-3 rounded-md transition"
        >
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link
          to="/dashboard/jobs" // Keep this as is
          className="flex items-center gap-2 bg-green-700 hover:bg-green-500 shadow-md p-3 rounded-md transition"
        >
          <FaBriefcase /> Jobs
        </Link>
        <Link
          to="/dashboard/messages" // Keep this as is
          className="flex items-center gap-2 bg-green-700 hover:bg-green-500 shadow-md p-3 rounded-md transition"
        >
          <FaEnvelope /> Messages
        </Link>
        <Link
          to="/dashboard/payments" // Keep this as is
          className="flex items-center gap-2 bg-green-700 hover:bg-green-500 shadow-md p-3 rounded-md transition"
        >
          <FaMoneyBillWave /> Payments
        </Link>
        <Link
          to="/dashboard/profile" // Keep this as is
          className="flex items-center gap-2 bg-green-700 hover:bg-green-500 shadow-md p-3 rounded-md transition"
        >
          <FaUser /> Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

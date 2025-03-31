import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-green-600 p-6 w-64 text-white">
      <h1 className="mb-6 font-bold text-white text-xl">Dashboard</h1>
      <hr className="mb-15" />
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard/jobs" className="hover:text-green-400">
          Jobs
        </Link>
        <Link to="/dashboard/messages" className="hover:text-green-400">
          Messages
        </Link>
        <Link to="/dashboard/payments" className="hover:text-green-400">
          Payments
        </Link>
        <Link to="/dashboard/profile" className="hover:text-green-400">
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

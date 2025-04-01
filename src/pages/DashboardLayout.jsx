import { Outlet, Routes, Route } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import Jobs from "../pages/Jobs";
import CustomerDashboard from "../pages/CustomerDashboard";
import Messages from "../pages/Messages";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        <DashboardHeader /> {/* Dashboard-specific Header */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<CustomerDashboard />} />
            <Route path="jobs" element={<Jobs />} /> {/* Jobs Page */}
            <Route path="messages" element={<Messages />} />{" "}
            {/* Messages Page */}
            <Route path="payments" element={<Payments />} />{" "}
            {/* Payments Page */}
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

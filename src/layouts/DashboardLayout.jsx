import { Outlet, Routes, Route } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";
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
      <div className="fixed w-64 h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow ml-64">
        <DashboardHeader /> {/* Dashboard-specific Header */}
        <div className="flex-1 p-6">
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
        <DashboardFooter /> {/* Dashboard-specific Footer */}
      </div>
    </div>
  );
};

export default DashboardLayout;

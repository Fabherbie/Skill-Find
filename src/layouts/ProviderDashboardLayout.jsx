import React from "react";
import { Link } from "react-router-dom";
import { Outlet, Routes, Route } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";
import ProviderSidebar from "../components/ProviderSidebar";
// import JobRequests from "../pages/JobRequests";
// import AcceptedJobs from "../pages/AcceptedJobs";
// import CompletedJobs from "../pages/CompletedJobs";
// import Calendar from "../pages/Calendar";
// import Financials from "../pages/Financials";
// import ProviderProfile from "../pages/ProviderProfile";
// import Messages from "../pages/Messages";

const ProviderDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ProviderSidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-grow ml-64">
        <DashboardHeader />
        <div className="flex-grow p-6">
          <Outlet />{" "}
          {/* This will load the appropriate page based on the route */}
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default ProviderDashboardLayout;

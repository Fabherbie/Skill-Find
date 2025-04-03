import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { useState } from "react";
import jobRequests from "../data/jobRequests";
import DashboardFooter from "../components/DashboardFooter";
import ProviderSidebar from "../components/ProviderSidebar";
import { FaSearch, FaFilter, FaMoneyBillWave } from "react-icons/fa";

const ProviderDashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const availableBalance = 2345;
  const totalEarnings = 15000;
  const totalJobs = 5;
  const totalEscrow = 5000;
  const totalCompletedJobs = 3;
  const totalPendingJobs = 2;
  const totalReferrals = 2;
  const totalReferralsEarnings = 1000;
  const totalReferralsCount = 3;

  console.log("jobRequests:", jobRequests);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ProviderSidebar />

      {/* Main Content */}
      <main className="flex flex-col flex-grow bg-gray-100 p-6 min-h-screen">
        <div>
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <p className="text-gray-600">
            Manage your jobs, earnings, and profile efficiently.
          </p>

          {/* Summary Cards */}
          <div className="gap-6 grid grid-cols-3 mt-6">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Total Earnings</h3>
              <p className="font-bold text-green-600 text-xl">₦150,000</p>
              <button className="flex items-center gap-2 bg-blue-600 mt-2 px-4 py-2 rounded text-white">
                <FaMoneyBillWave /> Request Withdrawal
              </button>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Escrow Balance</h3>
              <p className="font-bold text-green-600 text-xl">₦35,000</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="font-semibold text-lg">New Job Requests</h3>
              <p className="font-bold text-red-600 text-xl">5</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex justify-between items-center bg-white shadow-md mt-6 p-4 rounded-lg">
            <div className="flex items-center px-3 py-2 border rounded-lg w-2/3">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="ml-2 outline-none w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border rounded-lg"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Jobs</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Job Requests with Progress Bars */}
          <div className="mt-6">
            <h3 className="font-semibold text-xl">Job Requests</h3>
            {/* <div className="bg-white shadow-md mt-3 p-4 rounded-lg"> */}
            <div className="mt-3">
              <p>Customer: Pelumi Adekunmbi</p>
              <p>Service: Plumbing</p>
              <p>Date: April 10, 2025</p>
              <div className="flex gap-4 mt-2">
                <button className="bg-green-600 px-4 py-2 rounded text-white">
                  Accept
                </button>
                <button className="bg-red-500 px-4 py-2 rounded text-white">
                  Decline
                </button>
              </div>
            </div>

            {jobRequests
              .filter(
                (job) => filter === "all" || job.status.toLowerCase() === filter
              )
              .filter(
                (job) =>
                  job.customer &&
                  job.customer.toLowerCase().includes(search.toLowerCase())
              )
              .map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-md mb-4 p-4 rounded-lg"
                >
                  <p>
                    <strong>Customer:</strong> {job.customer}
                  </p>
                  <p>
                    <strong>Service:</strong> {job.service}
                  </p>
                  <p>
                    <strong>Status:</strong> {job.status}
                  </p>

                  {/* Progress Indicator */}
                  <div className="bg-gray-300 mt-2 rounded-full w-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        job.progress === 100 ? "bg-green-600" : "bg-yellow-500"
                      }`}
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>

                  {/* Actionable Buttons */}
                  <div className="flex gap-4 mt-2">
                    <button className="bg-green-600 px-4 py-2 rounded text-white">
                      Accept
                    </button>
                    <button className="bg-blue-500 px-4 py-2 rounded text-white">
                      Update Status
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProviderDashboard;

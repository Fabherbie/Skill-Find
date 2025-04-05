import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { useState } from "react";
import jobRequests from "../data/jobRequests";
import EarningsChart from "../components/EarningsChart";
import earningsData from "../data/earningsData";
import DashboardFooter from "../components/DashboardFooter";
import ProviderSidebar from "../components/ProviderSidebar";
import {
  FaSearch,
  FaFilter,
  FaMoneyBillWave,
  FaLock,
  FaBriefcase,
} from "react-icons/fa";

<EarningsChart earningsData={earningsData} />;

const ProviderDashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const availableBalance = 2345;
  const totalEarnings = 150000;
  const escrowBalance = 35000;
  const newJobs = 5;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ProviderSidebar />

      {/* Main Content */}
      <main className="flex flex-col flex-grow bg-gray-100 p-6">
        <h2 className="mb-1 font-bold text-blue-950 text-3xl tracking-tight">
          Dashboard
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Manage your gigs, earnings and customer flow like a pro. 💼
        </p>

        {/* Summary Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
          {/* Total Earnings */}
          <div className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg p-4 rounded-xl transition">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <FaMoneyBillWave size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-blue-950 text-lg">
                Total Earnings
              </h3>
              <p className="font-bold text-green-600 text-xl">
                ₦{totalEarnings.toLocaleString()}
              </p>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 mt-2 px-4 py-2 rounded text-white text-sm transition cursor-pointer">
                <FaMoneyBillWave /> Request Withdrawal
              </button>
            </div>
          </div>

          {/* Escrow Balance */}
          <div className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg p-4 rounded-xl transition">
            <div className="bg-purple-100 p-3 rounded-full text-purple-600">
              <FaLock size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-blue-950 text-lg">
                Escrow Balance
              </h3>
              <p className="font-bold text-green-600 text-xl">
                ₦{escrowBalance.toLocaleString()}
              </p>
            </div>
          </div>

          {/* New Jobs */}
          <div className="flex items-center gap-4 bg-white shadow-md hover:shadow-lg p-4 rounded-xl transition">
            <div className="bg-red-100 p-3 rounded-full text-red-600">
              <FaBriefcase size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-blue-950 text-lg">
                New Job Requests
              </h3>
              <p className="font-bold text-red-600 text-xl">{newJobs}</p>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 bg-white shadow-md mt-6 p-4 rounded-lg">
          <div className="flex items-center px-3 py-2 border border-green-700 rounded-lg w-full md:w-2/3">
            <FaSearch className="text-green-600" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="ml-2 outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-green-700 rounded-lg w-full md:w-auto cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Jobs</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Job Requests */}
        <div className="mt-8">
          <h3 className="mb-4 font-semibold text-blue-950 text-xl">
            Job Requests
          </h3>

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
                className="bg-white shadow-md hover:shadow-lg mb-5 p-6 rounded-xl transition-all"
              >
                <div className="flex justify-between items-center">
                  {/* Avatar + Details */}
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-blue-100 rounded-full w-10 h-10 font-bold text-blue-600 uppercase">
                      {job.customer?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{job.customer}</p>
                      <p className="text-gray-500 text-sm">{job.service}</p>
                    </div>
                  </div>

                  {/* Status Pill */}
                  <span
                    className={`text-xs px-3 py-1 rounded-full capitalize font-medium ${
                      job.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : job.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-200 mt-4 rounded-full w-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      job.progress === 100 ? "bg-green-600" : "bg-yellow-500"
                    }`}
                    style={{ width: `${job.progress}%` }}
                  ></div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition cursor-pointer">
                    Accept
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition cursor-pointer">
                    Update Status
                  </button>
                </div>
                {/* Earnings Chart */}
                <div className="mt-6"></div>
              </div>
            ))}
          <EarningsChart />
        </div>
      </main>
    </div>
  );
};

export default ProviderDashboard;

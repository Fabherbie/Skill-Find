import React from "react";
import { FaMoneyBillWave, FaHistory, FaArrowRight } from "react-icons/fa";

const Financials = () => {
  return (
    <div className="mx-auto p-6 container">
      <h2 className="mb-4 font-bold text-blue-950 text-xl">Financials</h2>

      {/* Financial Overview Section */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        {/* Total Earnings Card */}
        <div className="bg-white shadow-md p-6 border border-green-700 rounded-lg">
          <h3 className="font-semibold text-lg">Total Earnings</h3>
          <p className="font-bold text-green-600 text-2xl">₦50,000</p>
          <div className="mt-4">
            <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg text-white cursor-pointer">
              <FaMoneyBillWave /> Request Withdrawal
            </button>
          </div>
        </div>

        {/* Escrow Balance Card */}
        <div className="bg-white shadow-md p-6 border border-green-700 rounded-lg">
          <h3 className="font-semibold text-lg">Escrow Balance</h3>
          <p className="font-bold text-yellow-600 text-2xl">₦20,000</p>
          <div className="mt-4">
            <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white cursor-pointer">
              <FaArrowRight /> Release Escrow
            </button>
          </div>
        </div>

        {/* Pending Payments Card */}
        <div className="bg-white shadow-md p-6 border border-green-700 rounded-lg">
          <h3 className="font-semibold text-lg">Pending Payments</h3>
          <p className="font-bold text-red-600 text-2xl">₦10,000</p>
          <div className="mt-4">
            <button className="bg-gray-600 px-4 py-2 rounded-lg text-white cursor-pointer">
              View Payment History
            </button>
          </div>
        </div>
      </div>

      {/* Earnings Breakdown Section */}
      <div className="bg-white shadow-md mt-6 p-6 border border-green-700 rounded-lg">
        <h3 className="font-semibold text-lg">Earnings Breakdown</h3>
        <ul className="mt-4 list-none">
          <li className="flex justify-between py-2">
            <span>Job Fees</span>
            <span className="font-semibold">₦30,000</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Referrals Earnings</span>
            <span className="font-semibold">₦5,000</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Bonuses</span>
            <span className="font-semibold">₦15,000</span>
          </li>
        </ul>
      </div>

      {/* Transaction History Section */}
      <div className="bg-white shadow-md mt-6 p-6 border border-green-700 rounded-lg">
        <h3 className="font-semibold text-lg">Transaction History</h3>
        <ul className="mt-4 list-none">
          <li className="flex justify-between py-2">
            <span>Payment from Job 1</span>
            <span className="font-semibold text-green-600">₦10,000</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Payment from Job 2</span>
            <span className="font-semibold text-green-600">₦12,000</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Referral Bonus</span>
            <span className="font-semibold text-green-600">₦5,000</span>
          </li>
        </ul>
        <div className="flex justify-center items-center mt-4">
          <button className="flex items-center gap-2 bg-blue-700 px-6 py-2 rounded-lg text-white cursor-pointer">
            View Full History <FaHistory />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financials;

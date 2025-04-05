import React, { useState, useEffect } from "react";
import { FaMoneyBillWave, FaHistory, FaArrowRight } from "react-icons/fa";

const Financials = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [financialData, setFinancialData] = useState({
    totalEarnings: "₦50,000",
    escrowBalance: "₦20,000",
    pendingPayments: "₦10,000",
    earningsBreakdown: [
      { label: "Job Fees", amount: "₦30,000" },
      { label: "Referrals Earnings", amount: "₦5,000" },
      { label: "Bonuses", amount: "₦15,000" },
    ],
    transactionHistory: [
      { label: "Payment from Job 1", amount: "₦10,000" },
      { label: "Payment from Job 2", amount: "₦12,000" },
      { label: "Referral Bonus", amount: "₦5,000" },
    ],
  });

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false); // Data is ready
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 mx-auto p-6 min-h-screen container">
      <h2 className="mb-6 font-semibold text-blue-950 text-3xl">Financials</h2>

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center space-x-2 mb-6">
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-200"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-400"></div>
        </div>
      ) : (
        <>
          {/* Financial Overview Section */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {/* Total Earnings Card */}
            <div className="bg-white shadow-lg p-6 border border-green-700 rounded-lg">
              <h3 className="font-semibold text-lg">Total Earnings</h3>
              <p className="font-bold text-green-600 text-2xl">
                {financialData.totalEarnings}
              </p>
              <div className="mt-4">
                <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg text-white cursor-pointer">
                  <FaMoneyBillWave /> Request Withdrawal
                </button>
              </div>
            </div>

            {/* Escrow Balance Card */}
            <div className="bg-white shadow-lg p-6 border border-green-700 rounded-lg">
              <h3 className="font-semibold text-lg">Escrow Balance</h3>
              <p className="font-bold text-yellow-600 text-2xl">
                {financialData.escrowBalance}
              </p>
              <div className="mt-4">
                <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white cursor-pointer">
                  <FaArrowRight /> Release Escrow
                </button>
              </div>
            </div>

            {/* Pending Payments Card */}
            <div className="bg-white shadow-lg p-6 border border-green-700 rounded-lg">
              <h3 className="font-semibold text-lg">Pending Payments</h3>
              <p className="font-bold text-red-600 text-2xl">
                {financialData.pendingPayments}
              </p>
              <div className="mt-4">
                <button className="bg-gray-600 px-4 py-2 rounded-lg text-white cursor-pointer">
                  View Payment History
                </button>
              </div>
            </div>
          </div>

          {/* Earnings Breakdown Section */}
          <div className="bg-white shadow-lg mt-6 p-6 border border-green-700 rounded-lg">
            <h3 className="font-semibold text-lg">Earnings Breakdown</h3>
            <ul className="mt-4 list-none">
              {financialData.earningsBreakdown.map((item) => (
                <li key={item.label} className="flex justify-between py-2">
                  <span>{item.label}</span>
                  <span className="font-semibold">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transaction History Section */}
          <div className="bg-white shadow-lg mt-6 p-6 border border-green-700 rounded-lg">
            <h3 className="font-semibold text-lg">Transaction History</h3>
            <ul className="mt-4 list-none">
              {financialData.transactionHistory.map((item) => (
                <li key={item.label} className="flex justify-between py-2">
                  <span>{item.label}</span>
                  <span className="font-semibold text-green-600">
                    {item.amount}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center mt-4">
              <button className="flex items-center gap-2 bg-blue-700 px-6 py-2 rounded-lg text-white cursor-pointer">
                View Full History <FaHistory />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Financials;

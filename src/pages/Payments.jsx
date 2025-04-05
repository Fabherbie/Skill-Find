import React, { useState } from "react";
import { paymentMethods, paymentHistory } from "../data/paymentsData";
import { FaHistory } from "react-icons/fa";

const Payments = () => {
  const [paymentStatus, setPaymentStatus] = useState("pending"); // pending, completed, instructions
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="bg-gray-50 px-6 py-4 min-h-screen">
      <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
        Payment History
      </h2>

      {/* Payment Status */}
      {paymentStatus === "completed" ? (
        <div className="bg-green-100 shadow-xl p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Payment Successful</h3>
          <p>Your payment has been processed successfully.</p>
        </div>
      ) : paymentStatus === "pending" ? (
        <div className="bg-yellow-100 shadow-xl p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Payment Pending</h3>
          <p>Your payment is being processed. Please complete the payment.</p>
        </div>
      ) : (
        <div className="bg-gray-100 shadow-xl p-4 rounded-lg">
          <h3 className="font-semibold text-gray-800">How to Make Payment</h3>
          <p>Select a method below to proceed with your payment.</p>
        </div>
      )}

      {/* Payment Methods */}
      <div className="space-y-4 mt-6">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon; // Dynamically render icon

          return (
            <div
              key={method.id}
              className={`flex items-center p-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
                selectedMethod === method.id
                  ? "bg-green-600 text-white"
                  : "bg-white hover:bg-green-50"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <IconComponent
                size={24}
                className={`mr-3 ${
                  selectedMethod === method.id ? "text-white" : "text-green-600"
                }`}
              />
              <span className="font-semibold">{method.name}</span>
            </div>
          );
        })}
      </div>

      {/* Proceed Button */}
      {selectedMethod && (
        <button
          className="bg-green-600 hover:bg-green-700 mt-6 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
          onClick={() => setPaymentStatus("completed")}
        >
          Proceed with{" "}
          {paymentMethods.find((m) => m.id === selectedMethod)?.name}
        </button>
      )}

      {/* Payment History Section */}
      <div className="mt-6">
        <h3 className="flex items-center mb-4 font-semibold text-blue-950 text-xl">
          <FaHistory className="mr-2 text-green-600" /> Payment History
        </h3>
        {paymentHistory.length > 0 ? (
          <ul className="space-y-4">
            {paymentHistory.map((history) => (
              <li
                key={history.id}
                className="flex justify-between items-center bg-white shadow-lg hover:shadow-2xl p-4 rounded-lg transition-all duration-300"
              >
                <div>
                  <p className="font-semibold text-blue-950">
                    {history.method}
                  </p>
                  <p className="text-gray-600 text-sm">{history.date}</p>
                </div>
                <p
                  className={`font-semibold ${
                    history.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {history.amount}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No payment history available.</p>
        )}
      </div>
    </div>
  );
};

export default Payments;

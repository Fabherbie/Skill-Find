import React, { useState, useEffect } from "react";
import { jobRequests } from "../data/jobRequests";
import { FaCheck, FaTimes } from "react-icons/fa";

const JobRequests = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRequests(jobRequests);
      setIsLoading(false);
    }, 2000); // Simulating API call delay
  }, []);

  // Handle Accepting a Job Request
  const acceptJob = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "Accepted" } : request
    );
    setRequests(updatedRequests);
  };

  // Handle Declining a Job Request
  const declineJob = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id ? { ...request, status: "Declined" } : request
    );
    setRequests(updatedRequests);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
        Job Requests
      </h2>

      {/* Loading Spinner (Pulsing Dot) */}
      {isLoading ? (
        <div className="flex justify-center space-x-2 mb-6">
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-200"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-400"></div>
        </div>
      ) : requests.length === 0 ? (
        <p className="text-gray-600">No job requests at the moment.</p>
      ) : (
        <div className="space-y-6">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white shadow-lg p-6 border-green-500 border-l-4 rounded-lg hover:scale-105 transition-transform transform"
            >
              <h3 className="font-bold text-gray-900 text-xl">
                {request.customerName}
              </h3>
              <p className="mt-2 text-gray-600">
                <strong>Service:</strong> {request.service}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {request.location}
              </p>
              <p className="text-gray-600">
                <strong>Requested Time:</strong>{" "}
                {new Date(request.requestedTime).toLocaleString()}
              </p>
              <p className="text-gray-600">
                <strong>Description:</strong> {request.description}
              </p>
              <p className="mt-2 font-medium text-gray-600 text-sm">
                <strong>Status:</strong>
                <span
                  className={`${
                    request.status === "Accepted"
                      ? "text-green-500"
                      : request.status === "Declined"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {request.status}
                </span>
              </p>

              {/* Accept/Decline Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition-all duration-300 ease-in-out"
                  onClick={() => acceptJob(request.id)}
                  disabled={request.status === "Accepted"}
                >
                  <FaCheck />
                  Accept
                </button>
                <button
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white transition-all duration-300 ease-in-out"
                  onClick={() => declineJob(request.id)}
                  disabled={request.status === "Declined"}
                >
                  <FaTimes />
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobRequests;

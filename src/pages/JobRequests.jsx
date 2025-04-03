import React, { useState } from "react";
import { jobRequests } from "../data/jobRequests";
import { FaCheck, FaTimes } from "react-icons/fa";

const JobRequests = () => {
  const [requests, setRequests] = useState(jobRequests);

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
    <div className="job-requests">
      <h2 className="mb-4 font-bold text-2xl">Job Requests</h2>

      {/* Job Requests List */}
      {requests.length === 0 ? (
        <p>No job requests at the moment.</p>
      ) : (
        <div className="job-list">
          {requests.map((request) => (
            <div
              key={request.id}
              className="shadow-lg mb-4 p-4 border rounded-lg job-item"
            >
              <h3 className="font-semibold text-xl">{request.customerName}</h3>
              <p>
                <strong>Service:</strong> {request.service}
              </p>
              <p>
                <strong>Location:</strong> {request.location}
              </p>
              <p>
                <strong>Requested Time:</strong>{" "}
                {new Date(request.requestedTime).toLocaleString()}
              </p>
              <p>
                <strong>Description:</strong> {request.description}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>

              {/* Accept/Decline Buttons */}
              <div className="flex gap-4 mt-4 actions">
                <button
                  className="bg-green-500 px-4 py-2 rounded text-white accept-btn"
                  onClick={() => acceptJob(request.id)}
                  disabled={request.status === "Accepted"}
                >
                  <FaCheck /> Accept
                </button>
                <button
                  className="bg-red-500 px-4 py-2 rounded text-white decline-btn"
                  onClick={() => declineJob(request.id)}
                  disabled={request.status === "Declined"}
                >
                  <FaTimes /> Decline
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

import React, { useState, useEffect } from "react";

// Sample data for accepted jobs
const acceptedJobsData = [
  { id: 1, title: "Plumbing job in Lagos", status: "Accepted" },
  { id: 2, title: "Car repair in Kano", status: "Accepted" },
  { id: 3, title: "Electrical installation in Abuja", status: "Accepted" },
  { id: 4, title: "House cleaning in Port Harcourt", status: "Accepted" },
  { id: 5, title: "Painting job in Ibadan", status: "Accepted" },
  { id: 6, title: "Gardening in Enugu", status: "Accepted" },
  { id: 7, title: "Plumbing job in Lagos", status: "Accepted" },
  { id: 8, title: "Car repair in Kano", status: "Accepted" },
  { id: 9, title: "Electrical installation in Abuja", status: "Accepted" },
  { id: 10, title: "House cleaning in Port Harcourt", status: "Accepted" },
  { id: 11, title: "Painting job in Ibadan", status: "Accepted" },
  { id: 12, title: "Gardening in Enugu", status: "Accepted" },
  { id: 13, title: "Plumbing job in Lagos", status: "Accepted" },
  { id: 14, title: "Car repair in Kano", status: "Accepted" },
  { id: 15, title: "Electrical installation in Abuja", status: "Accepted" },
];

const AcceptedJobs = () => {
  const [acceptedJobs, setAcceptedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAcceptedJobs(acceptedJobsData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
        Accepted Jobs
      </h2>

      {/* Loading State: Pulsing Dots */}
      {isLoading ? (
        <div className="flex justify-center space-x-2">
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-200"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-400"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {acceptedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-lg p-6 border-green-500 border-l-4 rounded-lg hover:scale-105 transition-transform transform"
            >
              <h3 className="font-bold text-blue-950 text-xl">{job.title}</h3>
              <p className="mt-2 text-gray-600">
                <strong>Status:</strong>{" "}
                <span className="text-green-500">{job.status}</span>
              </p>

              {/* View Details Button */}
              <div className="mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition-all duration-300 ease-in-out">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AcceptedJobs;

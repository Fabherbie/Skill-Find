import React, { useState, useEffect } from "react";

const CompletedJobs = () => {
  // Dummy data for completed jobs
  const [completedJobs, setCompletedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulating a fetch delay
  useEffect(() => {
    setTimeout(() => {
      setCompletedJobs([
        { id: 1, title: "Home cleaning in Lagos", status: "Completed" },
        { id: 2, title: "Electrical wiring in Abuja", status: "Completed" },
        { id: 3, title: "Painting the house", status: "Completed" },
        { id: 4, title: "Car repairs in Kano", status: "Completed" },
        { id: 5, title: "Gardening in Ibadan", status: "Completed" },
        { id: 6, title: "Gardening in Lagos", status: "Completed" },
        { id: 7, title: "Gardening in Kano", status: "Completed" },
        { id: 8, title: "Gardening in Abuja", status: "Completed" },
        { id: 9, title: "Gardening in Ibadan", status: "Completed" },
        { id: 10, title: "Gardening in Lagos", status: "Completed" },
        { id: 11, title: "Gardening in Kano", status: "Completed" },
        { id: 12, title: "Gardening in Abuja", status: "Completed" },
      ]);
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
        Completed Jobs
      </h2>

      {/* Loading Spinner (Pulsing Dot) */}
      {isLoading ? (
        <div className="flex justify-center space-x-2 mb-6">
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-200"></div>
          <div className="bg-blue-500 rounded-full w-4 h-4 animate-pulse delay-400"></div>
        </div>
      ) : completedJobs.length === 0 ? (
        <p className="text-gray-600">No completed jobs yet.</p>
      ) : (
        <div className="space-y-6">
          {completedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-xl p-6 border-green-500 border-l-4 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out transform"
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

export default CompletedJobs;

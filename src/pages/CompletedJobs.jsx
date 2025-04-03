import React from "react";

const CompletedJobs = () => {
  // Dummy data for completed jobs
  const completedJobs = [
    { id: 1, title: "Home cleaning in Lagos", status: "Completed" },
    { id: 2, title: "Electrical wiring in Abuja", status: "Completed" },
  ];

  return (
    <div className="container">
      <h2 className="mb-4 font-bold text-xl">Completed Jobs</h2>
      <div className="job-list">
        {completedJobs.map((job) => (
          <div key={job.id} className="mb-2 p-4 border rounded-md job-item">
            <h3 className="font-semibold">{job.title}</h3>
            <p>Status: {job.status}</p>
            <button className="bg-blue-500 mt-2 px-4 py-2 rounded-md text-white">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedJobs;

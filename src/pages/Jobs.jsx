import { useState } from "react";
import jobData from "../data/jobData"; // Import job data
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaClipboardList,
  FaStar,
  FaDollarSign,
} from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const Jobs = () => {
  const [jobs] = useState(jobData);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Your Jobs</h2>

      {/* Pending Jobs */}
      <section className="bg-white shadow-md mb-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <FaHourglassHalf className="text-yellow-500" /> Pending Job Requests
        </h3>
        {jobs.filter((job) => job.status === "Pending").length > 0 ? (
          jobs
            .filter((job) => job.status === "Pending")
            .map((job) => (
              <div key={job.id} className="flex justify-between p-3 border-b">
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No pending jobs.</p>
        )}
      </section>

      {/* Jobs In Progress */}
      <section className="bg-white shadow-md mb-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <FaClipboardList className="text-blue-500" /> Jobs In Progress
        </h3>
        {jobs.filter((job) => job.status === "In Progress").length > 0 ? (
          jobs
            .filter((job) => job.status === "In Progress")
            .map((job) => (
              <div key={job.id} className="flex justify-between p-3 border-b">
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No ongoing jobs.</p>
        )}
      </section>

      {/* Completed Jobs */}
      <section className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <FaCheckCircle className="text-green-500" /> Finished Jobs
        </h3>
        {jobs.filter((job) => job.status === "Completed").length > 0 ? (
          jobs
            .filter((job) => job.status === "Completed")
            .map((job) => (
              <div key={job.id} className="p-3 border-b">
                <div className="flex justify-between">
                  <span>{job.title}</span>
                  <span className="text-gray-500">₦{job.price}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                  {[...Array(Math.round(job.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-600">({job.rating} stars)</span>
                </div>
                <p className="text-gray-600 italic">"{job.feedback}"</p>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No completed jobs yet.</p>
        )}
      </section>

      {/* Earnings Summary */}
      <section className="bg-white shadow-md mt-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <FaNairaSign className="text-green-700" /> Total Spent on Jobs
        </h3>
        <p className="font-bold text-gray-700 text-xl">
          ₦
          {jobs
            .filter(
              (job) =>
                job.status === "Completed" || job.status === "In Progress"
            )
            .reduce((total, job) => total + job.price, 0)}
        </p>
      </section>
    </div>
  );
};

export default Jobs;

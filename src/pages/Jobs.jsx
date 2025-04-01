import { useState } from "react";
import jobData from "../data/jobData";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaClipboardList,
  FaStar,
  FaFileInvoice,
  FaMoneyBillWave,
} from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

const Jobs = () => {
  const [jobs, setJobs] = useState(jobData);

  // Function to make escrow payment
  const payEscrow = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId
          ? { ...job, awaitingEscrow: false, status: "In Progress" }
          : job
      )
    );
  };

  // Function to approve job completion
  const approveJob = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: "Completed", approved: true } : job
      )
    );
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Your Jobs</h2>

      {/* Jobs Awaiting Escrow */}
      <section className="bg-white shadow-md mb-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <FaMoneyBillWave className="text-red-500" /> Jobs Awaiting Escrow
          Payment
        </h3>
        {jobs.filter((job) => job.awaitingEscrow).length > 0 ? (
          jobs
            .filter((job) => job.awaitingEscrow)
            .map((job) => (
              <div key={job.id} className="flex justify-between p-3 border-b">
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
                <button
                  className="bg-green-600 px-4 py-2 rounded-lg text-white"
                  onClick={() => payEscrow(job.id)}
                >
                  Pay Escrow
                </button>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No jobs awaiting escrow payment.</p>
        )}
      </section>

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
                <button
                  className="bg-blue-600 px-4 py-2 rounded-lg text-white"
                  onClick={() => approveJob(job.id)}
                >
                  Approve Job
                </button>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No ongoing jobs.</p>
        )}
      </section>

      {/* Completed Jobs & Invoices */}
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
                  {[...Array(Math.round(job.rating || 0))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-gray-600">
                    ({job.rating || "No Rating"} stars)
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  "{job.feedback || "No feedback provided"}"
                </p>
                <button className="flex items-center gap-2 bg-gray-700 mt-2 px-4 py-2 rounded-lg text-white">
                  <FaFileInvoice /> Download Invoice
                </button>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No completed jobs yet.</p>
        )}
      </section>

      {/* Total Spent */}
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

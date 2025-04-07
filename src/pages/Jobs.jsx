import { useState } from "react";
import jobData from "../data/jobData";
import {
  FaCheckCircle,
  FaHourglassHalf,
  FaClipboardList,
  FaStar,
  FaFileInvoice,
  FaMoneyBillWave,
  FaPhoneAlt,
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
    <div className="flex flex-col items-center bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-6 font-bold text-blue-950 text-3xl">Your Jobs</h2>

      {/* Job Statistics */}
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="mb-4 font-semibold text-blue-950 text-xl">
          Job Statistics
        </h3>
        <div className="flex justify-between text-gray-700">
          <p>Total Jobs: {jobs.length}</p>
          <p>
            Completed Jobs:{" "}
            {jobs.filter((job) => job.status === "Completed").length}
          </p>
          <p>
            Pending Jobs:{" "}
            {jobs.filter((job) => job.status === "Pending").length}
          </p>
          <p>
            Jobs In Progress:{" "}
            {jobs.filter((job) => job.status === "In Progress").length}
          </p>
        </div>
      </section>

      {/* Jobs Awaiting Escrow */}
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-red-500 text-lg">
          <FaMoneyBillWave /> Jobs Awaiting Escrow Payment
        </h3>
        {jobs.filter((job) => job.awaitingEscrow).length > 0 ? (
          jobs
            .filter((job) => job.awaitingEscrow)
            .map((job) => (
              <div
                key={job.id}
                className="flex justify-between hover:bg-gray-50 p-3 border-b transition duration-300"
              >
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
                <button
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white transition duration-300"
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
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-yellow-500 text-lg">
          <FaHourglassHalf /> Pending Job Requests
        </h3>
        {jobs.filter((job) => job.status === "Pending").length > 0 ? (
          jobs
            .filter((job) => job.status === "Pending")
            .map((job) => (
              <div
                key={job.id}
                className="flex justify-between hover:bg-gray-50 p-3 border-b transition duration-300"
              >
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No pending jobs.</p>
        )}
      </section>

      {/* Jobs In Progress */}
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-blue-500 text-lg">
          <FaClipboardList /> Jobs In Progress
        </h3>
        {jobs.filter((job) => job.status === "In Progress").length > 0 ? (
          jobs
            .filter((job) => job.status === "In Progress")
            .map((job) => (
              <div
                key={job.id}
                className="flex justify-between hover:bg-gray-50 p-3 border-b transition duration-300"
              >
                <span>{job.title}</span>
                <span className="text-gray-500">₦{job.price}</span>
                <button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition duration-300"
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
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-green-500 text-lg">
          <FaCheckCircle /> Finished Jobs
        </h3>
        {jobs.filter((job) => job.status === "Completed").length > 0 ? (
          jobs
            .filter((job) => job.status === "Completed")
            .map((job) => (
              <div
                key={job.id}
                className="hover:bg-gray-50 p-3 border-b transition duration-300"
              >
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
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 mt-2 px-4 py-2 rounded-lg text-white transition duration-300">
                  <FaFileInvoice /> Download Invoice
                </button>
              </div>
            ))
        ) : (
          <p className="mt-2 text-gray-500">No completed jobs yet.</p>
        )}
      </section>

      {/* Total Spent */}
      <section className="bg-white shadow-lg mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-green-700 text-lg">
          <FaNairaSign /> Total Spent on Jobs
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

      {/* Customer Support */}
      <section className="bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 font-semibold text-blue-800 text-lg">
          <FaPhoneAlt /> Customer Support
        </h3>
        <p className="text-gray-700">
          Need help? Get in touch with our support team.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 mt-4 px-4 py-2 rounded-lg text-white transition duration-300">
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default Jobs;

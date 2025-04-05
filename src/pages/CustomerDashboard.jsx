import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaPaperPlane,
  FaStar,
  FaClipboardList,
  FaRegCommentDots,
} from "react-icons/fa";

const CustomerDashboard = () => {
  const [newJob, setNewJob] = useState("");
  const [pendingRatings, setPendingRatings] = useState([
    { id: 1, title: "Plumbing Repair", rating: 0, feedback: "" },
  ]);

  // Handle Job Posting
  const postJob = () => {
    if (newJob.trim()) {
      alert(`Job posted: ${newJob}`);
      setNewJob("");
    }
  };

  // Handle Star Rating
  const handleRating = (jobId, stars) => {
    setPendingRatings((prevRatings) =>
      prevRatings.map((job) =>
        job.id === jobId ? { ...job, rating: stars } : job
      )
    );
  };

  // Handle Feedback Submission
  const submitReview = (jobId) => {
    setPendingRatings((prevRatings) =>
      prevRatings.filter((job) => job.id !== jobId)
    );
    alert("Review submitted successfully!");
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h2 className="mb-6 font-bold text-blue-950 text-3xl">Your Dashboard</h2>

      {/* Post a Job */}
      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
          <FaPlus className="text-green-600" /> Post a New Job
        </h3>
        <textarea
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
          placeholder="Describe the job you need..."
          className="mt-2 p-4 border border-green-700 rounded-lg w-full text-gray-800"
        />
        <button
          onClick={postJob}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 mt-4 px-6 py-3 rounded-lg text-white transition duration-300"
        >
          <FaPaperPlane /> Post Job
        </button>
      </section>

      {/* Pending Ratings & Reviews */}
      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
          <FaStar className="text-yellow-500" /> Pending Job Ratings
        </h3>
        {pendingRatings.length > 0 ? (
          pendingRatings.map((job) => (
            <div
              key={job.id}
              className="hover:bg-gray-50 p-4 border-b transition duration-300"
            >
              <span className="font-semibold text-gray-800">{job.title}</span>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`cursor-pointer ${
                      i < job.rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleRating(job.id, i + 1)}
                  />
                ))}
                <span className="text-gray-600">({job.rating} stars)</span>
              </div>
              <textarea
                placeholder="Leave a review..."
                value={job.feedback}
                onChange={(e) =>
                  setPendingRatings((prev) =>
                    prev.map((j) =>
                      j.id === job.id ? { ...j, feedback: e.target.value } : j
                    )
                  )
                }
                className="mt-4 p-3 border border-green-700 rounded-lg w-full text-gray-800"
              />
              <button
                onClick={() => submitReview(job.id)}
                className="bg-blue-600 hover:bg-blue-700 mt-4 px-6 py-3 rounded-lg text-white transition duration-300"
              >
                Submit Review
              </button>
            </div>
          ))
        ) : (
          <p className="mt-2 text-gray-500">No jobs awaiting ratings.</p>
        )}
      </section>

      {/* Messages - Clickable Link */}
      <Link to="/dashboard/messages">
        <section className="bg-white hover:bg-gray-50 shadow-lg mx-auto mb-6 p-6 rounded-lg w-full max-w-4xl transition duration-300 cursor-pointer">
          <h3 className="flex items-center gap-2 mb-2 font-semibold text-blue-950 text-xl">
            <FaRegCommentDots className="text-blue-600" /> Recent Messages
          </h3>
          <p className="text-gray-800">You have 2 new messages.</p>
        </section>
      </Link>

      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full max-w-4xl">
        <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
          <FaClipboardList className="text-green-700" /> Quick Links
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              to="/dashboard/jobs"
              className="text-green-600 hover:underline"
            >
              View Your Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="text-green-600 hover:underline"
            >
              Account Settings
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CustomerDashboard;

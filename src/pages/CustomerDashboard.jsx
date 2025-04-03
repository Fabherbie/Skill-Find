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
    <div className="bg-gray-100 p-6 min-h-screen">
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Your Dashboard</h2>

      {/* Post a Job */}
      <section className="bg-white shadow-md mb-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-blue-950 text-xl">
          <FaPlus className="text-green-600" /> Post a New Job
        </h3>
        <textarea
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
          placeholder="Describe the job you need..."
          className="mt-2 p-3 border rounded-lg w-full text-gray-800"
        />
        <button
          onClick={postJob}
          className="flex items-center gap-2 bg-green-600 mt-2 px-4 py-2 rounded-lg text-white"
        >
          <FaPaperPlane /> Post Job
        </button>
      </section>

      {/* Pending Ratings & Reviews */}
      <section className="bg-white shadow-md mb-4 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-blue-950 text-xl">
          <FaStar className="text-yellow-500" /> Pending Job Ratings
        </h3>
        {pendingRatings.length > 0 ? (
          pendingRatings.map((job) => (
            <div key={job.id} className="p-3 border-b">
              <span className="font-semibold">{job.title}</span>
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
                className="mt-2 p-2 border rounded-lg w-full"
              />
              <button
                onClick={() => submitReview(job.id)}
                className="bg-blue-600 mt-2 px-4 py-2 rounded-lg text-white"
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
        <section className="bg-white hover:bg-gray-50 shadow-md p-6 rounded-lg transition cursor-pointer">
          <h3 className="flex items-center gap-2 font-semibold text-blue-950 text-xl">
            <FaRegCommentDots className="text-blue-600" /> Recent Messages
          </h3>
          <p className="text-gray-800">You have 2 new messages.</p>
        </section>
      </Link>
    </div>
  );
};

export default CustomerDashboard;

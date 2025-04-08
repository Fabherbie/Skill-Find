import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import serviceProviders from "../data/serviceProviders";
import ServiceProvidersModal from "../components/ServiceProvidersModal";
import SearchAndFilterBar from "../components/SearchAndFilterBar";
import {
  FaPlus,
  FaPaperPlane,
  FaStar,
  FaRegCommentDots,
  FaClipboardList,
} from "react-icons/fa";

const CustomerDashboard = () => {
  const [filteredServiceProviders, setFilteredServiceProviders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("rating");
  const [newJob, setNewJob] = useState("");
  const [pendingRatings, setPendingRatings] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showCategories, setShowCategories] = useState(false); // Controls whether categories are shown
  const [viewAllCategories, setViewAllCategories] = useState(false);

  // This function handles searching and filtering the service providers
  const handleSearchAndFilter = (searchTerm, appliedFilters) => {
    let updatedProviders = [...serviceProviders];

    if (searchTerm) {
      updatedProviders = updatedProviders.filter(
        (provider) =>
          provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          provider.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (appliedFilters.category) {
      updatedProviders = updatedProviders.filter((provider) =>
        provider.category
          .toLowerCase()
          .includes(appliedFilters.category.toLowerCase())
      );
    }

    if (appliedFilters.location) {
      updatedProviders = updatedProviders.filter((provider) =>
        provider.location
          .toLowerCase()
          .includes(appliedFilters.location.toLowerCase())
      );
    }

    if (appliedFilters.price) {
      const [minPrice, maxPrice] = appliedFilters.price.split("-").map(Number);
      updatedProviders = updatedProviders.filter((provider) => {
        if (!provider.price) return true;
        if (maxPrice) {
          return provider.price >= minPrice && provider.price <= maxPrice;
        } else {
          return provider.price >= minPrice;
        }
      });
    }

    if (appliedFilters.rating) {
      updatedProviders = updatedProviders.filter(
        (provider) => provider.rating >= Number(appliedFilters.rating)
      );
    }

    updatedProviders.sort((a, b) => {
      if (sortOption === "rating") return b.rating - a.rating;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    setFilteredServiceProviders(updatedProviders);
  };

  const postJob = () => {
    if (newJob.trim()) {
      alert("Job posted successfully!");
      setNewJob("");
    }
  };

  const handleRating = (providerId, rating) => {
    setPendingRatings((prev) =>
      prev.map((provider) =>
        provider.id === providerId ? { ...provider, rating } : provider
      )
    );
  };

  const submitReview = (providerId) => {
    alert("Review submitted!");
    setPendingRatings((prev) =>
      prev.map((provider) =>
        provider.id === providerId ? { ...provider, feedback: "" } : provider
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="flex justify-start mb-4">
        <h3 className="mb-6 font-semibold text-blue-950 text-3xl">
          Your Dashboard
        </h3>
      </div>

      {/* View All Categories Button */}
      {/* <button
        onClick={() => {
          setSearchQuery("");
          setFilters({});
          setViewAllCategories(true); // Mark that "View All Categories" was clicked
          setShowCategories(true); // Show categories when "View All Categories" is clicked
          handleSearchAndFilter("", { category: "" }); // Reset the filter and display all
        }}
        className="bg-green-600 hover:bg-green-500 mb-4 px-4 py-2 rounded-lg text-white"
      >
        View All Categories
      </button> */}

      {/* Search and Filter */}
      <SearchAndFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={(query, incomingFilters) => {
          setSearchQuery(query);
          setFilters(incomingFilters);
          handleSearchAndFilter(query, incomingFilters);

          setShowCategories(query.trim() !== "" || viewAllCategories);
        }}
      />

      {(showCategories || searchQuery.trim()) &&
      filteredServiceProviders.length === 0 ? (
        <p className="mt-4 text-gray-500 text-center">
          No service providers found.
        </p>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mt-6">
          {filteredServiceProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-gray-100 shadow-lg p-4 rounded-lg hover:scale-105 transition duration-300 transform"
            >
              <h2 className="mt-2 font-semibold text-blue-950 text-lg">
                {provider.name}
              </h2>
              <p className="text-gray-600">Location: {provider.location}</p>
              <p className="text-gray-600">Rating: ⭐ {provider.rating}</p>
              <p className="text-gray-600">Price: ₦{provider.price || "N/A"}</p>
              <button
                className="bg-green-700 hover:bg-green-600 mt-2 px-4 py-2 rounded-lg w-full text-white"
                onClick={() => setSelectedProvider(provider)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProvider && (
        <ServiceProvidersModal
          provider={selectedProvider}
          onClose={() => setSelectedProvider(null)}
        />
      )}

      {/* Post a Job */}
      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full container">
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

      {/* Pending Ratings */}
      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full">
        <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
          <FaStar className="text-yellow-500" /> Pending Job Ratings
        </h3>
        {pendingRatings.length > 0 ? (
          pendingRatings.map((provider) => (
            <div
              key={provider.id}
              className="hover:bg-gray-50 p-4 border-b transition duration-300"
            >
              <span className="font-semibold text-gray-800">
                {provider.name}
              </span>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`cursor-pointer ${
                      i < provider.rating ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => handleRating(provider.id, i + 1)}
                  />
                ))}
                <span className="text-gray-600">({provider.rating} stars)</span>
              </div>
              <textarea
                placeholder="Leave a review..."
                value={provider.feedback || ""}
                onChange={(e) =>
                  setPendingRatings((prev) =>
                    prev.map((p) =>
                      p.id === provider.id
                        ? { ...p, feedback: e.target.value }
                        : p
                    )
                  )
                }
                className="mt-4 p-3 border border-green-700 rounded-lg w-full text-gray-800"
              />
              <button
                onClick={() => submitReview(provider.id)}
                className="bg-blue-600 hover:bg-blue-700 mt-4 px-6 py-3 rounded-lg text-white transition duration-300"
              >
                Submit Review
              </button>
            </div>
          ))
        ) : (
          <p className="mt-2 text-gray-500">No providers awaiting ratings.</p>
        )}
      </section>

      {/* Messages */}
      <Link to="/dashboard/messages">
        <section className="bg-white hover:bg-gray-50 shadow-lg mx-auto mb-6 p-6 rounded-lg w-full transition duration-300 cursor-pointer">
          <h3 className="flex items-center gap-2 mb-2 font-semibold text-blue-950 text-xl">
            <FaRegCommentDots className="text-blue-600" /> Recent Messages
          </h3>
          <p className="text-gray-800">You have 2 new messages.</p>
        </section>
      </Link>

      {/* Quick Links */}
      <section className="bg-white shadow-lg mx-auto mb-6 p-6 rounded-lg w-full">
        <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
          <FaClipboardList className="text-green-700" /> Quick Links
        </h3>
        <ul className="space-y-3">
          <li>
            <Link
              to="/dashboard/services"
              className="text-green-600 hover:underline"
            >
              View Your Services
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

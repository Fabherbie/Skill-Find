import React, { useState } from "react";
import { FaPen, FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ProviderProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Olanrewaju Plumbing",
    location: "Lagos, Nigeria",
    phone: "+234 801 234 5678",
    rating: 4.7,
    idNumber: "",
    bankAccount: "",
    certifications: [],
    availability: "Online",
    image: "", // Placeholder for profile image
  });

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic (e.g., store file URL, etc.)
      console.log("File uploaded: ", file);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prevState) => ({ ...prevState, image: imageUrl }));
    }
  };

  const handleAvailabilityChange = (status) => {
    setProfile((prevState) => ({
      ...prevState,
      availability: status,
    }));
  };

  return (
    <div className="container">
      <h2 className="mb-4 font-bold text-blue-950 text-xl">Profile</h2>

      <div className="bg-gray-100 p-6 rounded-lg">
        {/* Profile Info Section */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            {/* Profile Image */}
            <div className="mr-4 border-2 border-green-600 rounded-full w-16 h-16 overflow-hidden">
              <img
                src={profile.image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl">{profile.name}</h3>
              <p>Location: {profile.location}</p>
              <p>Rating: ⭐ {profile.rating}</p>
              <p>Phone: {profile.phone}</p>
              <p>Availability: {profile.availability}</p>
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-md text-white text-sm"
          >
            <FaPen /> {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Editable Form Section */}
        {isEditing && (
          <div className="mt-6">
            <div className="mb-4">
              <label className="block font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Location</label>
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">
                Bank Account Details
              </label>
              <input
                type="text"
                name="bankAccount"
                value={profile.bankAccount}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block font-semibold">Identity Number</label>
              <input
                type="text"
                name="idNumber"
                value={profile.idNumber}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            {/* Image Upload Section */}
            <div className="mb-4">
              <label className="block font-semibold">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="p-2 border border-green-600 rounded-md w-full"
              />
            </div>

            {/* Certifications Upload */}
            <div className="mb-4">
              <label className="block font-semibold">
                Certifications (if any)
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="p-2 border border-green-600 rounded-md w-full"
                />
                <FaUpload className="ml-2 text-green-600" />
              </div>
            </div>

            {/* Availability Status */}
            <div className="mb-4">
              <label className="block font-semibold">Set Availability</label>
              <div className="flex gap-4">
                <button
                  onClick={() => handleAvailabilityChange("Online")}
                  className={`px-4 py-2 rounded-md ${
                    profile.availability === "Online"
                      ? "bg-green-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  Online
                </button>
                <button
                  onClick={() => handleAvailabilityChange("Offline")}
                  className={`px-4 py-2 rounded-md ${
                    profile.availability === "Offline"
                      ? "bg-red-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  Offline
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Actions */}
        <div className="mt-4">
          <button className="bg-blue-600 px-6 py-2 rounded-lg text-white cursor-pointer">
            View Full Profile
          </button>
          <button className="bg-green-600 ml-4 px-6 py-2 rounded-lg text-white cursor-pointer">
            Submit Profile for Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;

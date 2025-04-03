import React, { useState } from "react";
import { FaPen, FaUpload, FaCheckCircle, FaCamera } from "react-icons/fa";

const ProviderProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Olanrewaju Plumbing",
    location: "Lagos, Nigeria",
    phone: "+234 801 234 5678",
    rating: 4.7,
    availability: "Online", // Availability dropdown between "Online" or "Offline"
    image: "", // Placeholder for profile image
    reviewStatus: "",
  });

  const [notification, setNotification] = useState("");

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prevState) => ({ ...prevState, image: imageUrl }));
    }
  };

  const handleSubmitForReview = () => {
    setNotification("Your profile is awaiting approval.");
    // Simulate profile approval after a short delay
    setTimeout(() => {
      setNotification("Your profile has been approved.");
    }, 3000);
  };

  return (
    <div className="py-4 container">
      <h2 className="mb-4 font-bold text-blue-950 text-xl">Provider Profile</h2>

      {/* Notification */}
      {notification && (
        <div className="bg-blue-600 mb-4 p-2 rounded-md text-white">
          {notification}
        </div>
      )}

      <div className="bg-gray-100 px-6 py-4 rounded-lg">
        {/* Profile Info Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            {/* Profile Image with Camera Icon for Image Upload */}
            <div className="relative w-24 h-24">
              <img
                src={profile.image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="border border-gray-300 rounded-full w-full h-full object-cover"
              />
              {/* Camera Icon for Upload */}
              <label className="right-0 bottom-0 absolute bg-green-600 p-2 rounded-full text-white cursor-pointer">
                <FaCamera />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="pl-4">
              <h3 className="font-semibold text-xl">{profile.name}</h3>
              <p>Location: {profile.location}</p>
              <p>Rating: ⭐ {profile.rating}</p>
              <p>Phone: {profile.phone}</p>
              <p>Availability: {profile.availability}</p>
            </div>
          </div>
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md text-white text-sm"
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

            {/* Availability Dropdown */}
            <div className="mb-4">
              <label className="block font-semibold">Availability</label>
              <select
                name="availability"
                value={profile.availability}
                onChange={handleChange}
                className="p-2 border border-green-600 rounded-md w-full"
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>
        )}

        {/* Profile Actions */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => alert("Detailed Profile View")}
            className="bg-blue-600 px-4 py-2 rounded-lg text-white cursor-pointer"
          >
            View Full Profile
          </button>
          <button
            onClick={handleSubmitForReview}
            className="bg-green-600 px-4 py-2 rounded-lg text-white cursor-pointer"
          >
            Submit Profile for Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;

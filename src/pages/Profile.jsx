import { useState } from "react";
import profileData from "../data/profile"; // Import user profile data
import {
  FaEdit,
  FaCamera,
  FaCreditCard,
  FaSave,
  FaBell,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Profile = () => {
  const [profile, setProfile] = useState(profileData);
  const [isEditing, setIsEditing] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [editedProfile, setEditedProfile] = useState(profile);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  // Handle profile edits toggle
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  // Handle saving changes
  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex justify-center bg-gray-50 px-4 py-8 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl">
        <h2 className="mb-6 font-semibold text-blue-950 text-3xl">
          Your Profile
        </h2>

        {/* Profile Picture Section */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="relative w-40 h-40">
            <img
              src={newImage || profile.profilePic || "/default-avatar.png"}
              alt="Profile"
              className="border-4 border-green-600 rounded-full w-full h-full object-cover"
            />
            <label className="right-0 bottom-0 absolute bg-green-600 p-2 rounded-full text-white cursor-pointer">
              <FaCamera />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <button
            className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-lg text-white"
            onClick={handleEditProfile}
          >
            <FaEdit /> {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-800">Name:</p>
            {isEditing ? (
              <input
                type="text"
                name="name"
                className="p-3 border rounded-md focus:ring-2 focus:ring-green-500 w-full"
                value={editedProfile.name}
                onChange={handleChange}
              />
            ) : (
              <p className="text-gray-700">{profile.name}</p>
            )}
          </div>

          <div>
            <p className="font-semibold text-gray-800">Email:</p>
            <p className="text-gray-700">{profile.email}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800">Phone:</p>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                className="p-3 border rounded-md focus:ring-2 focus:ring-green-500 w-full"
                value={editedProfile.phone}
                onChange={handleChange}
              />
            ) : (
              <p className="text-gray-700">{profile.phone}</p>
            )}
          </div>
        </div>

        {/* Job Statistics Section */}
        <div className="bg-gray-100 shadow-md mt-6 p-6 rounded-lg">
          <h3 className="mb-4 font-semibold text-blue-950 text-xl">
            Job Statistics
          </h3>
          <p>
            Total Jobs:{" "}
            <span className="text-gray-700">{profile.totalJobs}</span>
          </p>
          <p>
            Completed Jobs:{" "}
            <span className="text-green-600">{profile.completedJobs}</span>
          </p>
          <p>
            Pending Jobs:{" "}
            <span className="text-yellow-600">{profile.pendingJobs}</span>
          </p>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-gray-100 shadow-md mt-6 p-6 rounded-lg">
          <h3 className="mb-4 font-semibold text-blue-950 text-xl">
            Recent Activity
          </h3>
          <p className="text-gray-700">You completed a job 3 days ago.</p>
          <p className="text-gray-700">
            Your payment is pending for the job completed last week.
          </p>
        </div>

        {/* Notifications Section */}
        <div className="bg-gray-100 shadow-md mt-6 p-6 rounded-lg">
          <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
            <FaBell /> Notifications
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>Your payment was processed successfully.</li>
            <li>You have a new message from support.</li>
            <li>Your job application has been reviewed.</li>
          </ul>
        </div>

        {/* Payment Method Section */}
        <div className="bg-gray-100 shadow-md mt-6 p-6 rounded-lg">
          <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
            <FaCreditCard /> Payment Method
          </h3>
          <p>Card Number: {profile.paymentMethod.cardNumber}</p>
          <p>Expiry Date: {profile.paymentMethod.expiryDate}</p>
          {isEditing && (
            <button className="flex items-center gap-2 bg-green-600 mt-2 px-4 py-2 rounded-lg text-white">
              <FaEdit /> Edit Payment Details
            </button>
          )}
        </div>

        {/* Security Settings Section */}
        <div className="bg-gray-100 shadow-md mt-6 p-6 rounded-lg">
          <h3 className="flex items-center gap-2 mb-4 font-semibold text-blue-950 text-xl">
            <FaLock /> Security Settings
          </h3>
          <p>
            Change your password and enable two-factor authentication for
            enhanced security.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 mt-2 px-4 py-2 rounded-lg text-white">
            <FaEdit /> Change Password
          </button>
        </div>

        {/* Save Changes Button */}
        {isEditing && (
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-blue-600 mt-6 px-6 py-2 rounded-lg text-white"
          >
            <FaSave /> Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;

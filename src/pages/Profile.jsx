import { useState } from "react";
import profileData from "../data/profile"; // Import user profile data
import { FaEdit, FaCamera, FaCreditCard, FaSave } from "react-icons/fa";

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
    <div className="bg-white shadow-md mx-auto p-6 rounded-lg max-w-2xl">
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Your Profile</h2>

      {/* Profile Picture Section */}
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24">
          <img
            src={newImage || profile.profilePic || "/default-avatar.png"}
            alt="Profile"
            className="border border-gray-300 rounded-full w-full h-full object-cover"
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
      <div className="mt-6">
        <p className="font-semibold">Name:</p>
        {isEditing ? (
          <input
            type="text"
            name="name"
            className="p-2 border rounded w-full"
            value={editedProfile.name}
            onChange={handleChange}
          />
        ) : (
          <p className="text-gray-700">{profile.name}</p>
        )}

        <p className="mt-2 font-semibold">Email:</p>
        <p className="text-gray-700">{profile.email}</p>

        <p className="mt-2 font-semibold">Phone:</p>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            className="p-2 border rounded w-full"
            value={editedProfile.phone}
            onChange={handleChange}
          />
        ) : (
          <p className="text-gray-700">{profile.phone}</p>
        )}
      </div>

      {/* Job Statistics */}
      <div className="bg-gray-100 mt-6 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-950 text-xl">Job Statistics</h3>
        <p>Total Jobs: {profile.totalJobs}</p>
        <p>Completed Jobs: {profile.completedJobs}</p>
        <p>Pending Jobs: {profile.pendingJobs}</p>
      </div>

      {/* Payment Details */}
      <div className="bg-gray-100 mt-6 p-4 rounded-lg">
        <h3 className="flex items-center gap-2 font-semibold text-blue-950 text-xl">
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

      {/* Save Button */}
      {isEditing && (
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-blue-600 mt-4 px-6 py-2 rounded-lg text-white"
        >
          <FaSave /> Save Changes
        </button>
      )}
    </div>
  );
};

export default Profile;

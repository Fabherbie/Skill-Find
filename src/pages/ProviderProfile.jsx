import React, { useState } from "react";
import {
  FaPen,
  FaUpload,
  FaCamera,
  FaPlus,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaCalendarAlt,
} from "react-icons/fa";

const ProviderProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    comment: "",
  });
  const [newBooking, setNewBooking] = useState("");
  const [showBookingModal, setShowBookingModal] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Olanrewaju Plumbing",
    location: "Lagos, Nigeria",
    phone: "+234 801 234 5678",
    rating: 4.7,
    availability: "Online",
    image: "",
    idNumber: "",
    bankAccount: "",
    bio: "Experienced plumbing professional specializing in residential and commercial projects.",
    services:
      "Pipe repairs, Leak detection, Drain cleaning, Water heater installation",
    portfolio: [
      {
        src: "https://img.freepik.com/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990698.jpg",
        caption: "Bathroom renovation",
      },
      {
        src: "https://img.freepik.com/free-photo/plumber-man-fixing-kitchen-sink_53876-27.jpg",
        caption: "Pipe fitting",
      },
    ],
    videos: [
      {
        src: "https://videocdn.cdnpk.net/videos/0ca95a5e-bd14-464d-94a8-f6253813a36f/horizontal/previews/watermarked/small.mp4",
        caption: "Water heater setup",
      },
    ],
    testimonials: [
      {
        name: "Alice Johnson",
        comment: "Great service, very professional!",
        rating: 5,
      },
      {
        name: "Mike Ade",
        comment: "Fixed my leaking pipes in no time!",
        rating: 4,
      },
    ],

    certifications: [],
    socialLinks: {
      whatsapp: "https://wa.me/2348012345678",
      instagram: "https://instagram.com/yourhandle",
      linkedin: "https://linkedin.com/in/yourprofile",
    },
    bookings: ["Mon-Fri: 9am - 5pm", "Sat: 10am - 2pm"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      },
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  const handlePortfolioUpload = (e) => {
    const files = Array.from(e.target.files);
    const newItems = files.map((file) => ({
      src: URL.createObjectURL(file),
      caption: "New upload",
    }));
    setProfile((prev) => ({
      ...prev,
      portfolio: [...prev.portfolio, ...newItems],
    }));
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newVideos = files.map((file) => ({
      src: URL.createObjectURL(file),
      caption: "New video",
    }));
    setProfile((prev) => ({
      ...prev,
      videos: [...prev.videos, ...newVideos],
    }));
  };

  const handleCertificationUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const certUrl = URL.createObjectURL(file);
      setProfile((prev) => ({
        ...prev,
        certifications: [...prev.certifications, certUrl],
      }));
    }
  };

  const handleAddTestimonial = () => {
    const { name, comment, rating } = newTestimonial;
    if (!name || !comment || rating < 1) return;

    setProfile((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, newTestimonial],
    }));

    setNewTestimonial({ name: "", comment: "", rating: 0 });

    setNewTestimonial({ name: "", comment: "", rating: 0 });
  };

  const handleAddBooking = () => {
    if (!newBooking) return;
    setProfile((prev) => ({
      ...prev,
      bookings: [...prev.bookings, newBooking],
    }));
    setNewBooking("");
    setShowBookingModal(false);
  };

  return (
    <div className="py-6 container">
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">My Profile</h2>

      {/* Profile Card */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-start">
          <div className="flex gap-6">
            <div className="relative w-24 h-24">
              <img
                src={
                  profile.image ||
                  "https://img.freepik.com/free-photo/young-african-american-builder-man-wearing-construction-uniform-safety-helmet-pointing-with-palm-hand-with-smile-standing_141793-19010.jpg"
                }
                alt="Profile"
                className="border rounded-full w-full h-full object-cover"
              />
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
            <div>
              <h3 className="font-semibold text-blue-950 text-xl">
                {profile.name}
              </h3>
              <p className="mb-1">{profile.bio}</p>
              <p className="text-gray-700 text-sm">
                Location: {profile.location}
              </p>
              <p className="text-gray-700 text-sm">
                Services: {profile.services}
              </p>
              <p className="text-gray-700 text-sm">
                Rating: ⭐ {profile.rating}
              </p>
            </div>
          </div>
          <button
            className="flex items-center gap-2 text-green-700 hover:underline cursor-pointer"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaPen /> {isEditing ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>

        {isEditing && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="block font-medium text-blue-950">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                className="p-2 border border-green-700 rounded-lg w-full"
                placeholder="Edit your bio"
              />
            </div>
            <div>
              <label className="block font-medium text-blue-950">
                Services
              </label>
              <textarea
                name="services"
                value={profile.services}
                onChange={handleChange}
                className="p-2 border border-green-700 rounded-lg w-full"
                placeholder="Edit your services"
              />
            </div>

            {["whatsapp", "instagram", "linkedin"].map((platform) => (
              <div key={platform}>
                <label className="block font-medium text-blue-950">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </label>
                <input
                  name={platform}
                  value={profile.socialLinks[platform]}
                  onChange={handleSocialChange}
                  placeholder={`${platform} link`}
                  className="p-2 border border-green-700 rounded-lg w-full"
                />
              </div>
            ))}

            <button
              onClick={() => setIsEditing(false)}
              className="bg-green-700 px-4 py-2 rounded-lg text-white"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          {profile.socialLinks.whatsapp && (
            <a
              href={profile.socialLinks.whatsapp}
              className="text-green-600"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          )}
          {profile.socialLinks.instagram && (
            <a
              href={profile.socialLinks.instagram}
              className="text-pink-600"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          )}
          {profile.socialLinks.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              className="text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="bg-white shadow mt-6 p-6 rounded-lg">
        <h3 className="mb-4 font-semibold text-lg">Portfolio</h3>
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
          {profile.portfolio.map((item, index) => (
            <div key={index}>
              <img
                src={item.src}
                alt="work"
                className="rounded w-full h-32 object-cover"
              />
              <p className="mt-1 text-gray-600 text-xs">{item.caption}</p>
            </div>
          ))}
          <label className="flex justify-center items-center bg-gray-200 rounded h-32 cursor-pointer">
            <FaPlus />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePortfolioUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Videos */}
        <div className="mt-6">
          <h4 className="mb-2 font-medium">Videos</h4>
          <div className="gap-4 grid grid-cols-2">
            {profile.videos.map((vid, i) => (
              <div key={i}>
                <video
                  controls
                  src={vid.src}
                  className="rounded w-full h-32 object-cover"
                />
                <p className="text-gray-500 text-xs">{vid.caption}</p>
              </div>
            ))}
            <label className="flex justify-center items-center bg-gray-200 rounded h-32 text-center cursor-pointer">
              <FaUpload />
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={handleVideoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white shadow mt-6 p-6 rounded-lg">
        <h3 className="mb-2 font-semibold text-blue-950 text-lg">
          Customer Testimonials
        </h3>
        {profile.testimonials.map((review, index) => (
          <div key={index} className="mb-3">
            <p className="italic">
              “{review.comment}” - {review.name}
            </p>
            <p className="text-yellow-500">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </p>
          </div>
        ))}

        <div className="mt-4">
          <h4 className="mb-2 font-medium text-blue-950">Add a Testimonial</h4>
          <input
            type="text"
            placeholder="Customer Name"
            className="mb-2 p-2 border border-green-700 rounded-lg w-full"
            value={newTestimonial.name}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, name: e.target.value })
            }
          />
          <textarea
            placeholder="Comment"
            className="p-2 border border-green-700 rounded-lg w-full"
            value={newTestimonial.comment}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, comment: e.target.value })
            }
          />
          <label className="block mt-2 font-medium text-blue-950 text-sm">
            Rating
          </label>
          <div className="flex items-center space-x-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-2xl cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-125 ${
                  newTestimonial.rating >= star
                    ? "text-yellow-500 sparkle"
                    : "text-gray-300"
                }`}
                onClick={() =>
                  setNewTestimonial({ ...newTestimonial, rating: star })
                }
              >
                ★
              </span>
            ))}
          </div>

          <button
            onClick={handleAddTestimonial}
            className="bg-green-600 hover:bg-green-500 mt-2 px-4 py-2 rounded-lg text-white cursor-pointer"
          >
            Add Testimonial
          </button>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white shadow mt-6 p-6 rounded-lg">
        <h3 className="mb-2 font-semibold text-blue-950 text-lg">
          Badges & Certifications
        </h3>
        <div className="flex flex-wrap gap-4">
          {profile.certifications.map((cert, i) => (
            <img
              key={i}
              src={cert}
              className="border rounded w-24 h-24 object-cover"
            />
          ))}
          <label className="flex items-center gap-2 text-green-700 hover:text-green-500 cursor-pointer">
            <FaUpload /> Upload Certification
            <input
              type="file"
              accept="image/*"
              onChange={handleCertificationUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Booking Availability */}
      <div className="bg-white shadow mt-6 p-6 rounded-lg">
        <h3 className="flex items-center gap-2 mb-2 font-semibold text-blue-950 text-lg">
          <FaCalendarAlt /> Booking Availability
        </h3>
        <ul className="ml-6 text-gray-700 list-disc">
          {profile.bookings.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-green-600 hover:bg-green-500 mt-4 px-4 py-2 rounded-lg text-white cursor-pointer"
        >
          + Add Booking Slot
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow p-6 rounded-lg w-96">
            <h4 className="mb-4 font-semibold">Add Booking Time</h4>
            <input
              type="text"
              placeholder="e.g. Sun: 2pm - 6pm"
              className="p-2 border w-full"
              value={newBooking}
              onChange={(e) => setNewBooking(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowBookingModal(false)}
                className="bg-gray-400 px-4 py-1 rounded text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBooking}
                className="bg-green-700 px-4 py-1 rounded text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderProfile;

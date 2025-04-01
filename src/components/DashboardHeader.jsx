import { useState, useEffect, useRef } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaBell,
  FaCreditCard,
} from "react-icons/fa";
import {
  FiSettings,
  FiUser,
  FiEye,
  FiEdit2,
  FiLock,
  FiImage,
} from "react-icons/fi";

const DashboardHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Set to true if there are new notifications
  const settingsRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown if click is outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
        setIsSettingsOpen(false); // Close settings dropdown as well
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="font-bold text-green-700 text-lg">Welcome Back, Juwon!</h1>

      <div className="flex items-center gap-4">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-700 text-xl" />
          {hasNotifications && (
            <span className="top-0 right-0 absolute bg-red-500 rounded-full w-2 h-2"></span>
          )}
        </div>

        {/* Settings Icon */}
        <div className="relative" ref={settingsRef}>
          <FiSettings
            className="text-gray-700 text-2xl cursor-pointer"
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          />
          {isSettingsOpen && (
            <div className="right-0 absolute bg-white shadow-lg mt-2 p-2 rounded-lg w-72 text-blue-950">
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FiImage /> Change Profile Picture
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FiEdit2 /> Change Username
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FiEye /> Change Profile Visibility
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FiLock /> Update Password
              </button>
              {/* <hr className="my-1" /> */}
              {/* Add/Edit Payment Method with Credit Card Icon */}
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FaCreditCard /> Add/Edit Payment Method
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <FaUserCircle
            className="text-gray-700 text-2xl cursor-pointer"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="right-0 absolute bg-white shadow-lg mt-2 p-3 rounded-md w-60">
              <div className="flex items-center gap-2 p-2 border-b">
                <span className="bg-green-500 rounded-full w-2 h-2"></span>
                <span className="text-blue-950 text-sm">Online</span>
              </div>
              <button className="hover:bg-gray-100 p-2 w-full text-blue-950 text-sm text-left">
                Update Work Status
              </button>
              <button className="flex items-center gap-2 hover:bg-gray-100 p-2 w-full text-red-600 text-sm text-left">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

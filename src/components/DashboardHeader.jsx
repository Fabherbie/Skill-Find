import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import NotificationDropdown from "../components/NotificationDropdown";
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
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false); // Separate state for notification dropdown
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // Separate state for profile dropdown
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // Set to true if there are new notifications
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Close dropdowns if click is outside
  const settingsRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdowns if the click is outside of them
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target) &&
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target) &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownOpen(false);
        setIsProfileDropdownOpen(false); // Close both dropdowns
        setIsSettingsOpen(false); // Close settings dropdown as well
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dark mode class on the <body> tag
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center bg-green-50 dark:bg-gray-900 shadow-md p-4">
      <h1 className="font-bold text-green-700 dark:text-white text-xl">
        Welcome Back, Juwon!
      </h1>

      <div className="flex items-center gap-4">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer" ref={notificationDropdownRef}>
          <FaBell
            className="text-gray-700 text-xl"
            onClick={() =>
              setIsNotificationDropdownOpen(!isNotificationDropdownOpen)
            }
          />
          {hasNotifications && (
            <span className="top-0 right-0 absolute bg-red-500 rounded-full w-2 h-2"></span>
          )}
          {isNotificationDropdownOpen && <NotificationDropdown />}{" "}
          {/* Only render when dropdown is open */}
        </div>

        {/* Dark Mode Toggle */}
        <div>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
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
              <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 w-full">
                <FaCreditCard /> Add/Edit Payment Method
              </button>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileDropdownRef}>
          <FaUserCircle
            className="text-gray-700 text-2xl cursor-pointer"
            onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          />
          {isProfileDropdownOpen && (
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

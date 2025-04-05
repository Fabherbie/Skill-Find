import React from "react";

const NotificationDropdown = () => {
  return (
    <div className="top-12 right-0 absolute bg-white shadow-lg p-4 rounded-lg w-80">
      <h4 className="font-semibold text-lg">Notifications</h4>
      <div className="mt-3">
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 cursor-pointer">
          <span className="flex justify-center items-center bg-blue-100 rounded-full w-8 h-8 text-blue-600">
            📝
          </span>
          <p className="text-sm">You have a new job request!</p>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-100 p-2 cursor-pointer">
          <span className="flex justify-center items-center bg-yellow-100 rounded-full w-8 h-8 text-yellow-600">
            ⚠️
          </span>
          <p className="text-sm">Your profile is incomplete.</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;

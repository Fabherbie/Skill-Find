import React from "react";

const ServiceProvidersModal = ({ provider, onClose }) => {
  if (!provider) return null;

  return (
    <div className="top-0 left-0 fixed flex justify-center items-center bg-opacity-10 backdrop-blur-sm w-full h-full">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="font-bold text-2xl">{provider.name}</h2>
        <p className="mt-2 text-gray-600">{provider.location}</p>
        <p className="mt-2 text-yellow-500">⭐ {provider.rating} / 5</p>
        <p className="mt-2 text-gray-700">📞 {provider.phone}</p>
        <button
          className="bg-red-500 mt-4 px-4 py-2 rounded text-white cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServiceProvidersModal;

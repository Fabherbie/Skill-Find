import React, { useState } from "react";

const ServiceProvidersModal = ({ provider, onClose, onMessage }) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  if (!provider) return null;

  const handleCall = () => {
    window.location.href = `tel:${provider.phone}`;
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = { sender: "You", text: message };
      setChatHistory([...chatHistory, newMessage]);
      setMessage("");

      // Simulate provider's reply if online
      if (provider.online) {
        setTimeout(() => {
          setChatHistory((prev) => [
            ...prev,
            { sender: provider.name, text: "Hello! How can I help you?" },
          ]);
        }, 1000);
      }
    }
  };

  return (
    <div className="top-0 left-0 fixed flex justify-center items-center bg-opacity-10 backdrop-blur-sm w-full h-full">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="font-bold text-2xl">{provider.name}</h2>
        <p className="mt-2 text-gray-600">{provider.location}</p>
        <p className="mt-2 text-yellow-500">⭐ {provider.rating} / 5</p>
        <p className="mt-2 text-gray-700">📞 {provider.phone}</p>

        <div className="flex gap-4 mt-4">
          <button
            className="bg-green-500 px-4 py-2 rounded text-white cursor-pointer"
            onClick={handleCall}
          >
            Call
          </button>
          <button
            className="bg-blue-500 px-4 py-2 rounded text-white cursor-pointer"
            onClick={() => setChatOpen(true)}
          >
            Message
          </button>
        </div>

        <button
          className="bg-red-500 mt-4 px-4 py-2 rounded text-white cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      {chatOpen && (
        <div className="top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50 w-full h-full">
          <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
            <h3 className="font-bold text-xl">Chat with {provider.name}</h3>
            <div className="mt-4 p-2 border rounded h-48 overflow-y-auto">
              {chatHistory.map((msg, index) => (
                <p
                  key={index}
                  className={`p-1 ${
                    msg.sender === "You" ? "text-right" : "text-left"
                  }`}
                >
                  <strong>{msg.sender}:</strong> {msg.text}
                </p>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                className="flex-1 p-2 border rounded"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-blue-500 px-4 py-2 rounded text-white cursor-pointer"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
            <button
              className="bg-gray-500 mt-4 px-4 py-2 rounded text-white cursor-pointer"
              onClick={() => setChatOpen(false)}
            >
              Close Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceProvidersModal;

import React, { useState, useRef, useEffect } from "react";
import {
  FaPaperclip,
  FaFileImage,
  FaFileAlt,
  FaMicrophone,
  FaFile,
} from "react-icons/fa";
import messagesData from "../data/messagesData";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(messagesData);
  const [file, setFile] = useState(null);
  const [typing, setTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMessageClick = (id) => {
    const message = messages.find((msg) => msg.id === id);
    setSelectedMessage(message);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !file) return;

    const newChat = {
      sender: "Customer",
      message: newMessage,
      file: file ? URL.createObjectURL(file) : null,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = messages.map((msg) => {
      if (msg.id === selectedMessage.id) {
        return {
          ...msg,
          fullConversation: [...msg.fullConversation, newChat],
        };
      }
      return msg;
    });

    setMessages(updatedMessages);
    setNewMessage("");
    setFile(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <h2 className="mb-4 font-bold text-blue-950 text-2xl">Messages</h2>

      {!selectedMessage ? (
        <div>
          {messages.length === 0 ? (
            <p>No new messages.</p>
          ) : (
            <div className="flex flex-col space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white shadow-md hover:shadow-xl p-4 rounded-lg transition-all cursor-pointer"
                  onClick={() => handleMessageClick(msg.id)}
                >
                  <h3 className="font-semibold text-blue-950 text-lg">
                    {msg.artisanName}
                  </h3>
                  <p className="text-gray-800">{msg.messageSnippet}</p>
                  <small className="text-gray-500 text-sm">
                    {new Date(msg.timestamp).toLocaleString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3 className="mb-4 font-bold text-xl">
            Conversation with {selectedMessage.artisanName}
          </h3>

          {/* Chat Messages */}
          <div className="space-y-4 bg-white shadow-lg p-6 rounded-lg">
            {selectedMessage.fullConversation.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "Customer" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative p-3 max-w-xs md:max-w-sm lg:max-w-md text-white rounded-lg shadow-md ${
                    msg.sender === "Customer"
                      ? "bg-green-600 rounded-br-none"
                      : "bg-blue-700 rounded-bl-none"
                  }`}
                >
                  {msg.file && (
                    <img
                      src={msg.file}
                      alt="Sent file"
                      className="mb-2 rounded-md w-full"
                    />
                  )}
                  <p>{msg.message}</p>
                  <span className="block opacity-70 mt-1 text-white text-xs">
                    {msg.sender} • {msg.timestamp}
                  </span>
                  <div
                    className={`absolute w-0 h-0 border-t-[10px] border-t-transparent ${
                      msg.sender === "Customer"
                        ? "border-r-[10px] border-r-green-600 bottom-0 right-[-10px]"
                        : "border-l-[10px] border-l-blue-700 bottom-0 left-[-10px]"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
            {typing && <p className="text-gray-500">Artisan is typing...</p>}
          </div>

          {/* Message Input */}
          <div className="flex items-center space-x-2 bg-gray-100 shadow-md mt-4 p-4 rounded-lg">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full focus:outline-none text-white"
              >
                <FaPaperclip size={20} />
              </button>
              {showDropdown && (
                <div className="absolute bg-white shadow-lg mt-2 p-2 rounded-lg w-48">
                  {[
                    { icon: FaFileImage, label: "Image", accept: "image/*" },
                    {
                      icon: FaFileAlt,
                      label: "Document",
                      accept: ".pdf,.doc,.docx",
                    },
                    {
                      icon: FaMicrophone,
                      label: "Voice Message",
                      accept: "audio/*",
                    },
                    { icon: FaFile, label: "Other Files", accept: "*" },
                  ].map(({ icon: Icon, label, accept }, idx) => (
                    <label
                      key={idx}
                      className="flex items-center space-x-2 hover:bg-gray-200 p-2 cursor-pointer"
                    >
                      <Icon />
                      <span>{label}</span>
                      <input
                        type="file"
                        className="hidden"
                        accept={accept}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>
            <textarea
              className="p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600 w-full"
              rows="2"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition"
            >
              Send
            </button>
          </div>
          <button
            onClick={() => setSelectedMessage(null)}
            className="bg-blue-500 mt-4 px-4 py-2 rounded text-white"
          >
            Back to Messages
          </button>
        </div>
      )}
    </div>
  );
};

export default Messages;

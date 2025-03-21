import { useState, useEffect } from "react";
import ChatMessage from "../components/ChatMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isSender: true }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col p-4 h-screen">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} isSender={msg.isSender} />
        ))}
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 py-2 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

// 📌 What goes in it?

// A message list (shows sent/received messages).
// A text input (for typing messages).
// A send button.

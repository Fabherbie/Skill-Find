const ChatMessage = ({ message, isSender }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-3 rounded-lg ${
          isSender ? "bg-green-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;

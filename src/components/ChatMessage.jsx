const ChatMessage = ({ message, isSender }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-3 px-4 py-2 max-w-xs rounded-lg ${
          isSender ? "bg-green-700 text-white" : "bg-green-600 text-white"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;

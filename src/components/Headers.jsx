const Headers = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="font-bold text-lg">Welcome Back!</h1>
      <div className="flex gap-4">
        <span className="text-gray-700">🔔 Notifications</span>
        <button className="bg-green-600 px-4 py-2 rounded text-white">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Headers;

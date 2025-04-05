const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-600 p-2 rounded-full"
    >
      {darkMode ? "🌞" : "🌙"} {/* Switch between light and dark icons */}
    </button>
  );
};

export default DarkModeToggle;

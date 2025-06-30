const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      {/* 🔴 Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
        <h1 className="text-xl font-bold text-red-600 dark:text-white">
          RecipeGram
        </h1>
      </div>

      {/* 🟡 Center: Placeholder for future search */}
      <div className="flex-1 text-center">
        {/* Add search bar here later if needed */}
      </div>

      {/* 🟢 Right: Notifications, Theme Toggle, Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative text-gray-600 hover:text-red-500 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 8.75v5.408l-1.447 1.447A1 1 0 007 17h8z"
            />
          </svg>
          {/* Red notification dot */}
          <span className="absolute top-0 right-0 inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Dark/Light Mode Toggle */}
        <button className="text-gray-600 hover:text-yellow-500 dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-12.34l-.707.707M4.34 19.66l-.707-.707M21 12h1M2 12H1m16.95 4.95l.707.707M6.34 4.34l.707.707M12 5a7 7 0 110 14 7 7 0 010-14z"
            />
          </svg>
        </button>

        {/* Profile Dropdown */}
        <div className="relative group">
          <button className="text-gray-700 font-semibold dark:text-white">
            Hi, Janvi ⌄
          </button>
          <div className="absolute right-0 hidden group-hover:block bg-white dark:bg-gray-800 border rounded-md shadow-md mt-2 z-50">
            <ul className="text-sm text-gray-700 dark:text-white">
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 text-red-500 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

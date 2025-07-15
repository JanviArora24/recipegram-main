import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const TopNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileRef = useRef();
  const notificationRef = useRef();
  const navigate = useNavigate();

  // 💡 Apply saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // 💡 Apply/remove dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 💡 Close dropdowns when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      {/* 🔴 Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
        <h1 className="text-xl font-bold text-red-600 dark:text-white">
          RecipeGram
        </h1>
      </div>

      {/* 🟡 Center: Placeholder */}
      <div className="flex-1 text-center">{/* Search bar can go here */}</div>

      {/* 🟢 Right Section */}
      <div className="flex items-center space-x-4">
        {/* 🔔 Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            className="relative text-gray-600 hover:text-red-500 dark:text-white"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
                6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 
                7.388 8 8.75v5.408l-1.447 1.447A1 1 0 007 17h8z"
              />
            </svg>
            <span className="absolute top-0 right-0 inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border rounded shadow-lg z-50 text-sm">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  🍰 New recipe posted by @chef_janvi
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  ⭐ Your recipe got 5 new likes
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  💬 New comment on Chocolate Cake
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ☀️/🌙 Theme Toggle */}
        <button
          className="text-gray-600 hover:text-yellow-500 dark:text-white"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m8.66-12.34l-.707.707M4.34 
                19.66l-.707-.707M21 12h1M2 12H1m16.95 
                4.95l.707.707M6.34 4.34l.707.707M12 
                5a7 7 0 110 14 7 7 0 010-14z"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>

        {/* 🔵 Signup Link */}
        <Link
          to="/signup"
          className="text-blue-600 font-medium hover:underline dark:text-blue-400"
        >
          Signup
        </Link>

        {/* 👤 Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            className="text-gray-700 font-semibold dark:text-white"
            onClick={() => setShowProfileMenu((prev) => !prev)}
          >
            Hi, Janvi ⌄
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded-md shadow-md z-50">
              <ul className="text-sm text-gray-700 dark:text-white">
                <li
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate("/profile");
                  }}
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate("/settings");
                  }}
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 text-red-500 cursor-pointer"
                  onClick={() => {
                    setShowProfileMenu(false);
                    alert("Logged out");
                    // You can later add auth clear logic
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

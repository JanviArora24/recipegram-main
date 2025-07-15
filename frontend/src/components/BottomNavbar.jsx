import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-md z-50 flex justify-around md:justify-center">
      <div className="flex justify-around md:gap-10 p-2 md:p-4 text-sm w-full max-w-md mx-auto">
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <span>🏠</span>
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          to="/add-recipe"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <span>➕</span>
          <span className="text-xs">Add</span>
        </NavLink>

        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <span>⭐</span>
          <span className="text-xs">Saved</span>
        </NavLink>

        <NavLink
          to="/planner"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <span>📅</span>
          <span className="text-xs">Planner</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-blue-500" : "text-gray-600 dark:text-gray-300"
            }`
          }
        >
          <span>👤</span>
          <span className="text-xs">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;

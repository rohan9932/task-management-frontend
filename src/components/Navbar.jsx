import { useContext } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../Hooks/ThemeContextProvider.jsx";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/*Logo / Brand Title*/}
          <div>
            <NavLink to="/" className="text-xl font-bold text-gray-800 dark:text-slate-100 tracking-tight transition-colors duration-300">
              TaskFocus
            </NavLink>
          </div>

          {/*Navigation Links & Theme Toggle*/}
          <div className="flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                    : "border-transparent text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                    : "border-transparent text-gray-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`
              }
            >
              About
            </NavLink>

            {/*Theme Toggle Button*/}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-100 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg className="w-5 h-5 text-amber-500 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5 text-indigo-500 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
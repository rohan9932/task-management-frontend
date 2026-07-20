import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/*Logo / Brand Title*/}
          <div>
            <NavLink to="/" className="text-xl font-bold text-gray-800 tracking-tight">TaskFocus</NavLink>
          </div>

          {/*Navigation Links*/}
          <div className="flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gray-100 text-indigo-600"
                    : "border-transparent text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
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
                    ? "bg-gray-100 text-indigo-600"
                    : "border-transparent text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
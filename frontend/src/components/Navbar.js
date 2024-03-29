import logoIcon from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ children }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownActive(!isDropDownActive);
  };

  const closeDropDown = () => {
    setIsDropDownActive(false);
  };

  return (
    <>
      <nav className="bg-green-900 dark:bg-green-900 border-b-4 border-white">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            onClick={closeDropDown}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logoIcon}
              className="rounded-lg overflow-hidden h-12"
              alt="Car Logo"
            />
            <span className="font-bebas self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white hover:text-green-500">
              Rent-A-Ride
            </span>
          </NavLink>
          <button
            onClick={toggleDropDown}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-white"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isDropDownActive ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-900 dark:bg-gray-800 md:dark:bg-green-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/rent"
                  onClick={closeDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-green-500 rounded md:border-0 md:p-0 dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Rent
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bookings"
                  onClick={closeDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-green-500 rounded md:border-0 md:p-0 dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={closeDropDown}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-green-500 rounded md:border-0 md:p-0 dark:text-white md:dark:text-green-500"
                      : "block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <div className="h-32 w-full bg-green-900"></div>
    </>
  );
}

export default Navbar;

import { useState } from "react";
import axios from "axios";
function SearchBooking() {
  const [booking, setBooking] = useState(null);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const fetchData = () => {
    // try{
    //     const bookingData = axios.get(url);
    // }catch(e){
    //     //something went wrong
    // }
  };

  return (
    <div className="w-full h-full pt-16 pb-24">
      {booking ? (
        <div></div>
      ) : (
        <div className="w-full flex flex-col items-center ">
          <div className="w-1/2 min-w-96 p-16 bg-green-900 rounded-xl">
            <div className="p-5 mb-5 font-bebas text-white text-center text-5xl bg-green-700 rounded-xl">
              Bookings
            </div>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Booking Number"
                value={search}
                onChange={handleChange}
              />
              <button className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBooking;

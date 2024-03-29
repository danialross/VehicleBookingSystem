import { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";
import { useLocation } from "react-router-dom";

function SearchBooking() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const url = "http://localhost:3001/bookings";
  const [search, setSearch] = useState("");
  //booking init to null
  const [bookings, setBookings] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const fetchData = async () => {
    try {
      // search should be the drivers license
      const result = await axios.get(url + "/" + search);
      console.log(result.data.bookings);
      setBookings(result.data.bookings);
    } catch (e) {
      console.error({ error: e });
      //something went wrong
    }
  };

  useEffect(() => {
    if (location.search !== "") {
      setSearch(queryParams.get("license_id"));
    }
  }, []);

  return (
    <div className="w-full h-full pt-16 pb-24">
      {bookings ? (
        <>
          <div className="w-full flex flex-col items-center">
            <div className="w-1/2 min-w-96 px-12 pt-8 pb-12 bg-green-900 rounded-xl">
              <div className="p-2 font-bebas text-white text-2xl">
                Result for '{search}'
              </div>
              <button
                type="button"
                className="mb-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => setBookings(null)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                  transform="scale(-1,1)"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
              {bookings.length !== 0 ? (
                bookings.map((booking) => {
                  return (
                    <BookingCard booking={booking} key={booking.plate_id} />
                  );
                })
              ) : (
                <div className=" w-full p-4 text-white  font-bebas border-white border-2 rounded-xl bg-green-700">
                  <p className="text-4xl">No Bookings Found</p>
                  <p className="text-md">Try A Different License Number</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center ">
          <div className="w-1/2 min-w-96 p-12 bg-green-900 rounded-xl">
            <div className="p-4 mb-8 font-bebas text-white text-center text-5xl bg-green-700 rounded-xl">
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
                placeholder="Search Drivers License"
                value={search}
                onChange={handleChange}
              />
              <button
                className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={fetchData}
              >
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

import { useState } from "react";
import axios from "axios";
import BookingCard from "./BookingCard";
function SearchBooking() {
  const url = "localhost:3001/bookings";
  const [search, setSearch] = useState("");
  //booking init to null
  const [bookings, setBookings] = useState(null);
  // {
  //   rentals: {
  //     id: "1",
  //     license: "DL012345",
  //     plate: "ABC123",
  //     start: "2023-08-01 08:00:00",
  //     end: "2023-08-05 18:00:00",
  //   },
  //   cars: {
  //     plate: "ABC123",
  //     make: "Toyota",
  //     model: "Camry",
  //     fuel: "Gasoline",
  //     year: "2022",
  //     category: "Sedan",
  //     mileage: "15000",
  //     color: "green",
  //     transmission: "Automatic",
  //     rate: "30",
  //   },
  //   gallery: {
  //     make: "Toyota",
  //     model: "Camry",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018-Chevrolet-Camaro-ZL1-1LE-001-01.jpg/800px-2018-Chevrolet-Camaro-ZL1-1LE-001-01.jpg",
  //   },
  // },
  // {
  //   rentals: {
  //     id: "2",
  //     license: "DL112223",
  //     plate: "ABC456",
  //     start: "2023-08-10 12:30:00",
  //     end: "2023-08-15 15:45:00",
  //   },
  //   cars: {
  //     plate: "ABC456",
  //     make: "Honda",
  //     model: "Civic",
  //     fuel: "Hybrid",
  //     year: "2023",
  //     category: "Compact",
  //     mileage: "9000",
  //     color: "Green",
  //     transmission: "CVT",
  //     rate: "20",
  //   },
  //   gallery: {
  //     make: "Honda",
  //     model: "Civic",
  //     image:
  //       "https://media.ed.edmunds-media.com/honda/civic/2023/oem/2023_honda_civic_sedan_si_fq_oem_1_1280.jpg",
  //   },
  // },

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const fetchData = async () => {
    try {
      const bookingData = axios.get(url + "/" + s);
    } catch (e) {
      //something went wrong
    }
    //testing
    // setBookings([]);
  };

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
                    <BookingCard
                      bookingData={booking}
                      key={booking.cars.plate}
                    />
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

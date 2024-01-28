import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";

function WelcomeBanner() {
  const phrases = [
    "Turning Miles into Smiles",
    "Explore. Drive. Repeat.",
    "Your Journey Starts Here",
    "Your Dream Car Is Waiting",
  ];

  const cars = [car1, car2, car3, car4];
  const randomNumber = Math.floor(Math.random() * 4);

  return (
    <>
      <div className="flex pt-10 flex-col justify-center items-center">
        <div className="font-bebas text-white text-8xl text-center px-5">
          {phrases[randomNumber]}
        </div>
        <div className="w-1/4 min-w-72 py-10">
          <form>
            <label
              htmlFor="default-search"
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
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Reservations"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="max-w-3xl min-w-md p-5">
          <img src={cars[randomNumber]} alt={"Car"} />
        </div>
      </div>
    </>
  );
}

export default WelcomeBanner;

import axios from "axios";
import { useState, useEffect } from "react";

function SearchAndView() {
  const url = "http://localhost:8080/images";
  const [search, setSearch] = useState("");
  const [inputField, setInputField] = useState("");
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(true);
  }, []);

  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  const validateSearch = () => {
    if (inputField === search || inputField === "") {
      return false;
    }

    setSearch(inputField);
    return true;
  };

  //   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // testing for loading bar

  const fetchData = async (isInitLoad) => {
    let criteria = "";

    if (!isInitLoad) {
      //using search bar
      if (validateSearch() === false) {
        return;
      }
      criteria = "/" + inputField.replace(" ", "/");
    }

    try {
      setIsLoading(true);
      //   await delay(5000); // testing for loading bar
      const result = await axios.get(url + criteria);

      const newCars = [];
      for (let object of result.data) {
        newCars.push(object);
      }
      setCars(newCars);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDefault = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault(); // Prevent form submission
      fetchData();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-4/5 px-4 ">
        <div className="flex py-10">
          <form className=" flex justify-center bg-green-900 p-2 rounded-xl">
            <div className="relative">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search Car "
                value={inputField}
                onChange={handleChange}
                onKeyDown={handleDefault}
              />
            </div>
            <button
              type="button"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleDefault}
            >
              <svg
                className="w-4 h-4"
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
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {search.length !== 0 ? (
          <div className="h-10 pb-10 flex justify-start items-center">
            <div className="text-white text-xl font-bebas">
              Results for '{search}'
            </div>
          </div>
        ) : null}
        <div className="flex justify-center pb-5 flex-wrap gap-4">
          {cars.map((car) => {
            return (
              <div
                className="flex flex-col justify-end bg-green-900 p-2 rounded-2xl"
                key={car.image}
              >
                {isLoading ? (
                  <div
                    className="flex justify-center items-center"
                    role="status"
                  >
                    <svg
                      aria-hidden="true"
                      className="inline w-60 h-60 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <>
                    <div className="w-80 h-52 flex justify-center bg-black rounded-xl border-4 border-white">
                      <img
                        className={"w-full object-cover rounded-xl "}
                        src={car.image}
                        alt={"Car"}
                      />
                    </div>
                    <div className="font-bebas text-white text-center pt-5 pb-3 text-3xl">
                      {car.id.make + " " + car.id.model}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchAndView;

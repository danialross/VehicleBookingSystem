import { useState } from "react";

function SearchAndView() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = () => {
    setQuery(search);
    // get data from db
  };

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      fetchData();
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-2/3 px-4">
        <div className="flex justify-start py-10">
          <form className="flex items-center bg-green-900 p-5 rounded-xl">
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search"
                value={search}
                onChange={changeSearch}
                onKeyDown={handleEnterDown}
              />
            </div>
            <button
              type="button"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={fetchData}
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
        <div className="flex items-center text-white font-bebas px-5 pb-10 text-xl">
          {query.length !== 0 ? "Results for '" + query + "'" : null}
        </div>
      </div>
    </div>
  );
}

export default SearchAndView;

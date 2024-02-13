import { useState, useRef, useEffect } from "react";

//category is the default value, options is all the choices the user can select, and setter is the function to pass the choice to the parent function
function FilterDropDown({ choice, options, setter, isDisabled, placeholder }) {
  //by default it is the category
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const blankValue = "\u00A0";
  const dropDownRef = useRef(null);

  const toggleDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleSelect = (e) => {
    if (e.target.value === blankValue) {
      e.target.value = placeholder;
    }
    setter(e.target.value);
    toggleDropdown();
  };

  useEffect(() => {
    const handleClick = (e) => {
      console.log("dropid : " + dropDownRef.current.id);
      console.log("targetid : " + e.target.id);

      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target) &&
        isDropDownOpen
      ) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isDropDownOpen]);

  return (
    <div className="flex flex-row lg:flex-col">
      <div className="relative flex flex-col items-center justify-center p-2">
        <button
          id="dropdownRadioBgHoverButton"
          data-dropdown-toggle="dropdownRadioBgHover"
          className={
            isDisabled
              ? " w-40 text-gray-500 bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center"
              : "w-40 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          }
          type="button"
          onClick={toggleDropdown}
          disabled={isDisabled}
        >
          {choice}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          ref={dropDownRef}
          id="dropdownRadioBgHover"
          className={`z-10 ${
            isDropDownOpen ? "" : "hidden"
          } w-48 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            id={placeholder + "-dropdown"}
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRadioBgHoverButton"
          >
            {options.map((item) => {
              return (
                <li key={item}>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={
                        item === blankValue
                          ? `default-radio-${placeholder}-blank`
                          : `default-radio-${item}`
                      }
                      type="radio"
                      value={item}
                      name="default-radio-category"
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      checked={choice === item}
                      onChange={handleSelect}
                    />
                    <label
                      htmlFor={
                        item === blankValue
                          ? `default-radio-${placeholder}-blank`
                          : `default-radio-${item}`
                      }
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {item}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterDropDown;

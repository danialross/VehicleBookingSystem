import { useEffect, useState } from "react";

//placeholder is the category to filter, options is all the choices the user can select, and setter is the function to pass the reset to the parent function
function FilterDropDown({ category, setter, options, resetter }) {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    setter(e.target.value);
  };

  useEffect(() => {
    const reset = () => {
      setSelected(options[0]);
    };

    resetter(() => reset);
  }, [resetter]);

  return (
    <div className="p-2">
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {options.map((item) => {
          return (
            <li
              key={item}
              className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id={`list-${category}-${item}`}
                  type="radio"
                  value={item}
                  name={`list-${category}`}
                  checked={selected === item}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={handleChange}
                />
                <label
                  htmlFor={`list-${category}-${item}`}
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterDropDown;

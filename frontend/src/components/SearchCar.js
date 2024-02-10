import CategoryDropDown from "./CategoryDropDown";
import { useState, useEffect } from "react";
import CategorySlider from "./CategorySlider";

function SearchCar() {
  //model
  //make
  //year
  //category
  //mileage
  //color
  //transmission
  //rate

  const fuel = ["Gasoline", "Hybrid", "Electric"];
  const [selectedFuel, setSelectedFuel] = useState("Fuel");
  const category = ["Sedan", "Compact", "Truck", "Sport", "SUV"];
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const color = ["Red", "Green", "green", "Yellow"];
  const [selectedColor, setSelectedColor] = useState("Color");
  const transmission = ["Automatic", "Manual"];
  const [selectedTransmission, setSelectedTransmission] =
    useState("Transmission");

  const handleReset = () => {
    setSelectedFuel("Fuel");
    setSelectedCategory("Category");
  };

  useEffect(() => {
    //get options from server
  }, []);

  return (
    <div className="flex justify-center items-center bg-green-700 p-5 sm:p-10 ">
      <div className="flex flex-col lg:flex-row w-4/5 h-2/3 p-5 rounded-xl bg-green-900 border-white border-4 ">
        <div className=" flex flex-col items-center justify-start min-w-44 lg:min-w-80 h-full p-5 mb-5 lg:mr-5 lg:mb-0 border-4 rounded-xl border-white bg-green-900 ">
          <input
            type="search"
            id="search"
            className="mb-2 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search"
          />
          <div className="flex justify-center flex-wrap">
            <CategorySlider />
            <CategoryDropDown
              choice={selectedCategory}
              options={category}
              setter={setSelectedCategory}
            />
            <CategoryDropDown
              choice={selectedFuel}
              options={fuel}
              setter={setSelectedFuel}
            />
            <CategoryDropDown
              choice={selectedColor}
              options={color}
              setter={setSelectedColor}
            />
            <CategoryDropDown
              choice={selectedTransmission}
              options={transmission}
              setter={setSelectedTransmission}
            />
          </div>

          <button
            type="button"
            className="mt-2 focus:outline-none text-white bg-gray-700 hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="button"
            className="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
          >
            Apply
          </button>
        </div>
        <div className="w-full h-60 border-4 rounded-xl border-white bg-green-900"></div>
      </div>
    </div>
  );
}

export default SearchCar;

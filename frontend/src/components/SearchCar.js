import CategoryDropDown from "./CategoryDropDown";
import { useState, useEffect, useRef } from "react";

function SearchCar() {
  //model
  //make
  //fuel
  //year
  //category
  //mileage
  //color
  //transmission
  //rate

  const [selectedMake, setSelectedMake] = useState("Make");
  const makeRef = useRef(false);
  const make = [
    "\u00A0",
    "Toyota",
    "Honda",
    "Chevrolet",
    "Tesla",
    "Ford",
    "Jeep",
    "Hyundai",
    "Dodge",
    "Mazda",
  ];

  const [selectedModel, setSelectedModel] = useState("Model");
  const modelRef = useRef(null);
  const model = [
    "\u00A0",
    "Camry",
    "Civic",
    "Silverado",
    "Model 3",
    "Accord",
    "Mustang",
    "Rav4",
    "Grand Cherokee",
    "F-150",
    "Escape",
    "Prius",
    "Wrangler",
    "Equinox",
    "Corolla",
    "Elantra",
    "Avalon",
    "Cherokee",
    "Model Y",
    "Charger",
    "Sonata",
    "Tacoma",
    "CX-5",
    "Explorer",
    "Camaro",
    "Focus",
  ];

  const [selectedFuel, setSelectedFuel] = useState("Fuel");
  const fuel = ["\u00A0", "Gasoline", "Hybrid", "Electric"];

  const [selectedYear, setSelectedYear] = useState(0);
  const [onYearFocus, setOnYearFocus] = useState(false);
  const yearRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("Category");
  const categoryRef = useRef(null);
  const category = ["\u00A0", "Sedan", "Compact", "Truck", "Sport", "SUV"];

  const [selectedColor, setSelectedColor] = useState("Color");
  const colorRef = useRef(null);
  const color = ["\u00A0", "Red", "Green", "green", "Yellow"];

  const [selectedTransmission, setSelectedTransmission] =
    useState("Transmission");
  const transmissionRef = useRef(null);
  const transmission = ["\u00A0", "Automatic", "Manual"];

  const [minRate, setMinRate] = useState(0);
  const [maxRate, setMaxRate] = useState(0);

  const handleReset = () => {
    setSelectedFuel("Fuel");
    setSelectedYear(0);
    setSelectedCategory("Category");
    setSelectedColor("Color");
    setSelectedTransmission("Transmission");
    setMinRate(0);
    setMaxRate(0);
  };

  useEffect(() => {
    //get options from server
  }, []);

  const handleInput = (setter) => {
    return (e) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        setter(value);
      }
    };
  };

  const selectAllValue = (e) => {
    setOnYearFocus(true);
    const element = e.target;
    const value = element.value;

    const isAllSelected =
      element.selectionStart === 0 && element.selectionEnd === value.length;
    console.log(isAllSelected);

    if (!onYearFocus) {
      element.select();
    }
  };

  return (
    <div className="flex justify-center items-center bg-green-700 p-5 sm:p-10 ">
      <div className="flex flex-col lg:flex-row w-4/5 h-2/3 p-5 rounded-xl bg-green-900 border-white border-4 ">
        <div className=" flex flex-col items-center justify-start min-w-44 lg:min-w-80 h-full p-5 mb-5 lg:mr-5 lg:mb-0 border-4 rounded-xl border-white bg-green-900 ">
          <div className="text-white text-sm p-5">
            Leave Blank To Search For All
          </div>
          <div className="flex justify-center flex-wrap">
            {/* make */}
            <CategoryDropDown
              choice={selectedMake}
              options={make}
              setter={setSelectedMake}
              placeholder={"Make"}
            />
            {/* model */}
            <CategoryDropDown
              choice={selectedModel}
              options={model}
              setter={setSelectedModel}
              isDisabled={selectedMake === "Make" ? true : false}
              placeholder={"Model"}
            />
            {/* year */}
            <div className="flex items-center w-44 p-2 ">
              <label htmlFor="Year" className="text-white mr-4 text-sm">
                Year
              </label>
              <input
                htmlFor="Year"
                value={selectedYear}
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onInput={handleInput(setSelectedYear)}
                onClick={selectAllValue}
                onBlur={() => setOnYearFocus(false)}
              />
            </div>
            {/* category */}
            <CategoryDropDown
              choice={selectedCategory}
              options={category}
              setter={setSelectedCategory}
              placeholder={"Category"}
            />
            {/* fuel */}
            <CategoryDropDown
              choice={selectedFuel}
              options={fuel}
              setter={setSelectedFuel}
              placeholder={"Fuel"}
            />
            {/* color */}
            <CategoryDropDown
              choice={selectedColor}
              options={color}
              setter={setSelectedColor}
              placeholder={"Color"}
            />
            {/* transmission */}
            <CategoryDropDown
              choice={selectedTransmission}
              options={transmission}
              setter={setSelectedTransmission}
              placeholder={"Transmission"}
            />
            {/* rate */}
            <div className="flex items-center p-2 w-44 ">
              <label
                htmlFor="minRate"
                className="text-white mr-1 text-xs text-center"
              >
                Min ($)
              </label>
              <input
                htmlFor="minRate"
                value={minRate}
                type="text"
                className=" bg-gray-50 border border-gray-300 text-sm text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onInput={handleInput(setMinRate)}
                onClick={selectAllValue}
              />
              <label className="text-white m-1 text-xs text-center">- </label>
              <input
                htmlFor="maxRate"
                value={maxRate}
                type="text"
                className="bg-gray-50 border border-gray-300 text-sm text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onInput={handleInput(setMaxRate)}
                onClick={selectAllValue}
              />
              <label
                htmlFor="maxRate"
                className="text-white ml-1 text-xs text-center"
              >
                Max ($)
              </label>
            </div>
          </div>

          <button
            type="button"
            className="mt-2 focus:outline-none text-white bg-gray-700 hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="w-full h-60 border-4 rounded-xl border-white bg-green-900"></div>
      </div>
    </div>
  );
}

export default SearchCar;

import AccordionItem from "./AccordionItem";
import CarCard from "./CarCard";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import mysteryCar from "../assets/mysteryCar.png";
import axios from "axios";

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

  const [resetMake, setResetMake] = useState(() => {});
  const [selectedMake, setSelectedMake] = useState("\u00A0");
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
  const [makeOptions, setMakeOptions] = useState(make);

  const [resetModel, setResetModel] = useState(() => {});
  const [selectedModel, setSelectedModel] = useState("\u00A0");
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
  const [modelOptions, setModelOptions] = useState(model);

  const [resetFuel, setResetFuel] = useState(() => {});
  const [selectedFuel, setSelectedFuel] = useState("\u00A0");
  const fuel = ["\u00A0", "Gasoline", "Hybrid", "Electric"];
  const [fuelOptions, setFuelOptions] = useState(fuel);

  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(0);
  const [onYearFocus, setOnYearFocus] = useState(false);

  const [resetCategory, setResetCategory] = useState(() => {});
  const [selectedCategory, setSelectedCategory] = useState("\u00A0");
  const category = ["\u00A0", "Sedan", "Compact", "Truck", "Sport", "SUV"];
  const [categoryOptions, setCategoryOptions] = useState(category);

  const [resetColor, setResetColor] = useState(() => {});
  const [selectedColor, setSelectedColor] = useState("\u00A0");
  const color = ["\u00A0", "Red", "Green", "Yellow"];
  const [colorOptions, setColorOptions] = useState(color);

  const [resetTransmission, setResetTransmission] = useState(() => {});
  const [selectedTransmission, setSelectedTransmission] = useState("\u00A0");
  const transmission = ["\u00A0", "Automatic", "Manual"];
  const [transmissionOptions, setTransmissionOptions] = useState(transmission);

  const [minRate, setMinRate] = useState(0);
  const [maxRate, setMaxRate] = useState(0);

  const [searchResult, setSearchResult] = useState([
    // {
    //   image:
    //     "https://www.gtplanet.net/wp-content/uploads/2023/06/image-3-28.jpg",
    //   make: "Toyota",
    //   model: "Corolla",
    //   fuel: "Gasoline",
    //   year: 2023,
    //   category: "Hatchback",
    //   color: "Red",
    //   transmission: "Manual",
    //   rate: 20,
    // },
    // {
    //   image:
    //     "https://www.motortrend.com/uploads/sites/5/2020/01/2020-Honda-Civic-Type-R-front.jpg?fit=around%7C875:492",
    //   make: "Honda",
    //   model: "Civic",
    //   fuel: "Gasoline",
    //   year: 2022,
    //   category: "Hatchback",
    //   color: "White",
    //   transmission: "Manual",
    //   rate: 30,
    // },
  ]);

  useEffect(() => {
    //get options from server
  }, [
    selectedMake,
    selectedModel,
    selectedFuel,
    minYear,
    maxYear,
    selectedCategory,
    selectedColor,
    selectedTransmission,
    minRate,
    maxRate,
  ]);

  const handleReset = () => {
    resetMake();
    resetModel();
    resetFuel();
    setMinYear(0);
    setMaxYear(0);
    resetCategory();
    resetColor();
    resetTransmission();
    setMinRate(0);
    setMaxRate(0);
  };

  const handleInput = (setter) => {
    return (e) => {
      const value = e.target.value;
      if (/^\d*$/.test(value)) {
        setter(value);
      }
    };
  };

  const fetchData = async () => {
    const url = "localhost:3001/";
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
    <div className="flex justify-center items-center p-5 sm:p-10">
      <div className="flex flex-col lg:flex-row w-4/5 h-2/3 p-5 rounded-xl bg-green-900 border-white border-4 ">
        <div className=" flex flex-col items-center justify-start min-w-44 lg:min-w-80 h-full p-2 mb-5 lg:mr-5 lg:mb-0 border-4 rounded-xl border-white bg-green-900 ">
          <div className="max-w-5xl w-full lg:max-w-2xl flex justify-center flex-wrap ">
            <div
              className="w-full -mt-3 "
              id="accordion-flush"
              data-accordion="collapse"
            >
              {/* make */}
              <AccordionItem
                title={"make"}
                content={
                  <Filter
                    options={makeOptions}
                    setter={setSelectedMake}
                    category={"make"}
                    resetter={setResetMake}
                  />
                }
              />
              {/* model */}
              <AccordionItem
                title={"model"}
                content={
                  <Filter
                    options={modelOptions}
                    setter={setSelectedModel}
                    category={"model"}
                    resetter={setResetModel}
                  />
                }
              />
              {/* category */}
              <AccordionItem
                title={"category"}
                content={
                  <Filter
                    options={categoryOptions}
                    setter={setSelectedCategory}
                    category={"category"}
                    resetter={setResetCategory}
                  />
                }
              />
              {/* fuel */}
              <AccordionItem
                title={"fuel"}
                content={
                  <Filter
                    options={fuelOptions}
                    setter={setSelectedFuel}
                    category={"fuel"}
                    resetter={setResetFuel}
                  />
                }
              />
              {/* color */}
              <AccordionItem
                title={"color"}
                content={
                  <Filter
                    options={colorOptions}
                    setter={setSelectedColor}
                    category={"color"}
                    resetter={setResetColor}
                  />
                }
              />
              {/* transmission */}
              <AccordionItem
                title={"transmission"}
                content={
                  <Filter
                    options={transmissionOptions}
                    setter={setSelectedTransmission}
                    category={"transmission"}
                    resetter={setResetTransmission}
                  />
                }
              />
              {/* year */}
              <AccordionItem
                title={"year"}
                content={
                  <div className="flex items-center w-52 py-3">
                    <label
                      htmlFor="minRate"
                      className="text-white mr-1 text-xs text-center"
                    >
                      Min (Year)
                    </label>
                    <input
                      htmlFor="minYear"
                      value={minYear}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-xs text-gray-900  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      onInput={handleInput(setMinYear)}
                      onClick={selectAllValue}
                    />
                    <label
                      htmlFor="minYear"
                      className="text-white m-1 text-sm text-center"
                    >
                      -
                    </label>
                    <input
                      htmlFor="maxYear"
                      value={maxYear}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-xs text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      onInput={handleInput(setMaxYear)}
                      onClick={selectAllValue}
                    />
                    <label
                      htmlFor="maxYear"
                      className="text-white ml-1 text-xs text-center"
                    >
                      Max (Year)
                    </label>
                  </div>
                }
              />
              {/* rate */}
              <AccordionItem
                title={"price"}
                content={
                  <div className="flex items-center w-52 py-3">
                    <label
                      htmlFor="minRate"
                      className="text-white mr-1 text-sm text-center"
                    >
                      Min ($)
                    </label>
                    <input
                      htmlFor="minRate"
                      value={minRate}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-sm text-gray-900  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      onInput={handleInput(setMinRate)}
                      onClick={selectAllValue}
                    />
                    <label
                      htmlFor="minRate"
                      className="text-white m-1 text-sm text-center"
                    >
                      -
                    </label>
                    <input
                      htmlFor="maxRate"
                      value={maxRate}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      onInput={handleInput(setMaxRate)}
                      onClick={selectAllValue}
                    />
                    <label
                      htmlFor="maxRate"
                      className="text-white ml-1 text-sm text-center"
                    >
                      Max ($)
                    </label>
                  </div>
                }
              />
              <div className="flex justify-center p-3">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly p-5 w-full h-full border-4 rounded-xl border-white bg-green-900">
          {searchResult.length !== 0 ? (
            searchResult.map((car) => (
              <div key={car.model} className="p-2">
                <CarCard car={car} />
              </div>
            ))
          ) : (
            <div className=" flex flex-col text-white font-bebas items-center max-w-lg rounded-xl bg-green-700 ">
              <img src={mysteryCar} alt="missing car" />

              <div className="text-4xl pb-10 -mt-8 ">No Results Found</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchCar;

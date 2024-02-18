import AccordionItem from "./AccordionItem";
import CarCard from "./CarCard";
import Filter from "./Filter";
import { useState, useEffect } from "react";

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

  const [selectedYear, setSelectedYear] = useState(0);
  const [onYearFocus, setOnYearFocus] = useState(false);

  const [resetCategory, setResetCategory] = useState(() => {});
  const [selectedCategory, setSelectedCategory] = useState("\u00A0");
  const category = ["\u00A0", "Sedan", "Compact", "Truck", "Sport", "SUV"];
  const [categoryOptions, setCategoryOptions] = useState(category);

  const [resetColor, setResetColor] = useState(() => {});
  const [selectedColor, setSelectedColor] = useState("\u00A0");
  const color = ["\u00A0", "Red", "Green", "green", "Yellow"];
  const [colorOptions, setColorOptions] = useState(color);

  const [resetTransmission, setResetTransmission] = useState(() => {});
  const [selectedTransmission, setSelectedTransmission] = useState("\u00A0");
  const transmission = ["\u00A0", "Automatic", "Manual"];
  const [transmissionOptions, setTransmissionOptions] = useState(transmission);

  const [minRate, setMinRate] = useState(0);
  const [maxRate, setMaxRate] = useState(0);

  const [searchResult, setSearchResult] = useState([
    {
      image:
        "https://www.gtplanet.net/wp-content/uploads/2023/06/image-3-28.jpg",
      make: "Toyota",
      model: "Corolla",
      fuel: "Gasoline",
      year: 2023,
      category: "Hatchback",
      color: "Red",
      transmission: "Manual",
      rate: 20,
    },
    {
      image:
        "https://www.motortrend.com/uploads/sites/5/2020/01/2020-Honda-Civic-Type-R-front.jpg?fit=around%7C875:492",
      make: "Honda",
      model: "Civic",
      fuel: "Gasoline",
      year: 2022,
      category: "Hatchback",
      color: "White",
      transmission: "Manual",
      rate: 30,
    },
  ]);

  const handleReset = () => {
    resetMake();
    resetModel();
    resetFuel();
    setSelectedYear(0);
    resetCategory();
    resetColor();
    resetTransmission();
    setMinRate(0);
    setMaxRate(0);
  };

  useEffect(() => {
    //get options from server
  }, [
    selectedMake,
    selectedModel,
    selectedFuel,
    selectedYear,
    selectedCategory,
    selectedColor,
    selectedTransmission,
    minRate,
    maxRate,
  ]);

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
    <div className="flex justify-center items-center bg-green-700 p-5 sm:p-10">
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
                    options={make}
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
                    options={model}
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
                    options={category}
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
                    options={fuel}
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
                    options={color}
                    setter={setSelectedColor}
                    placeholder={"color"}
                    resetter={setResetColor}
                  />
                }
              />
              {/* transmission */}
              <AccordionItem
                title={"transmission"}
                content={
                  <Filter
                    options={transmission}
                    setter={setSelectedTransmission}
                    placeholder={"transmission"}
                    resetter={setResetTransmission}
                  />
                }
              />

              {/* year */}
              <AccordionItem
                title={"year"}
                content={
                  <div className="flex items-center w-52 py-3">
                    <label htmlFor="Year" className="text-white mr-2 text-sm">
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
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly p-5 w-full h-full border-4 rounded-xl border-white bg-green-900">
          {searchResult.map((car) => (
            <div key={car.model} className="p-2">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchCar;

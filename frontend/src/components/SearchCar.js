import AccordionItem from "./AccordionItem";
import CarCard from "./CarCard";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import mysteryCar from "../assets/mysteryCar.png";
import axios from "axios";

function SearchCar() {
  const url = "http://localhost:3001/rent";
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
  const [makeOptions, setMakeOptions] = useState([]);

  const [resetModel, setResetModel] = useState(() => {});
  const [selectedModel, setSelectedModel] = useState("\u00A0");
  const [modelOptions, setModelOptions] = useState([]);

  const [resetFuel, setResetFuel] = useState(() => {});
  const [selectedFuel, setSelectedFuel] = useState("\u00A0");
  const [fuelOptions, setFuelOptions] = useState([]);

  const [resetYear, setResetYear] = useState(() => {});
  const [selectedYear, setSelectedYear] = useState("\u00A0");
  const [yearOptions, setYearOptions] = useState([]);

  const [resetCategory, setResetCategory] = useState(() => {});
  const [selectedCategory, setSelectedCategory] = useState("\u00A0");
  const [categoryOptions, setCategoryOptions] = useState([]);

  const [resetColor, setResetColor] = useState(() => {});
  const [selectedColor, setSelectedColor] = useState("\u00A0");
  const [colorOptions, setColorOptions] = useState([]);

  const [resetTransmission, setResetTransmission] = useState(() => {});
  const [selectedTransmission, setSelectedTransmission] = useState("\u00A0");
  const [transmissionOptions, setTransmissionOptions] = useState([]);

  const [resetRate, setResetRate] = useState(() => {});
  const [rateOptions, setRateOptions] = useState([
    "\u00A0",
    "High To Low",
    "Low To High",
  ]);
  const [selectedRate, setSelectedRate] = useState("\u00A0");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchOptions = async (query) => {
      try {
        const result = await axios.get(url + "/options" + query);
        setMakeOptions(result.data.make);
        setModelOptions(result.data.model);
        setFuelOptions(result.data.fuel);
        setCategoryOptions(result.data.category);
        setColorOptions(result.data.color);
        setTransmissionOptions(result.data.transmission);
        setYearOptions(result.data.year);
      } catch (e) {
        console.error(e);
      }
    };

    // generate query for backend
    let query = "";
    if (selectedMake !== "\u00A0") {
      query += "make=" + selectedMake + "&";
    }
    if (selectedModel !== "\u00A0") {
      query += "model=" + selectedModel + "&";
    }
    if (selectedFuel !== "\u00A0") {
      query += "fuel=" + selectedFuel + "&";
    }
    if (selectedCategory !== "\u00A0") {
      query += "category=" + selectedCategory + "&";
    }
    if (selectedColor !== "\u00A0") {
      query += "color=" + selectedColor + "&";
    }
    if (selectedTransmission !== "\u00A0") {
      query += "transmission=" + selectedTransmission + "&";
    }

    if (selectedYear !== "\u00A0") {
      query += "year=" + selectedYear + "&";
    }

    if (query !== "") {
      query = "?" + query.slice(0, query.length - 1);
    }
    console.log(query);
    fetchCars(query);

    // update options
    fetchOptions(query);
  }, [
    selectedMake,
    selectedModel,
    selectedFuel,
    selectedCategory,
    selectedColor,
    selectedTransmission,
    selectedRate,
    selectedYear,
  ]);

  const handleReset = (setter) => {
    resetMake();
    resetModel();
    resetFuel();
    resetCategory();
    resetYear();
    resetColor();
    resetTransmission();
    resetRate();
  };

  const fetchCars = async (query) => {
    try {
      const result = await axios.get(url + "/cars/" + query);
      console.log(result.data.cars);
      setSearchResult(result.data.cars);
    } catch (err) {
      console.error(err);
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
              {selectedMake !== "\u00A0" && (
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
              )}
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
                  <Filter
                    options={yearOptions}
                    setter={setSelectedYear}
                    category={"year"}
                    resetter={setResetYear}
                  />
                }
              />
              {/* rate */}
              <AccordionItem
                title={"rate"}
                content={
                  <Filter
                    options={rateOptions}
                    setter={setSelectedRate}
                    category={"rate"}
                    resetter={setResetTransmission}
                  />
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
              <div key={car.plate_id} className="p-2">
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

import { useState } from "react";
function CarCard({ car }) {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  //model
  //make
  //fuel
  //year
  //category
  //color
  //transmission
  //rate

  const toggleDetails = () => setIsDetailsOpened(!isDetailsOpened);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <img
        className="w-96 h-48 rounded-t-lg object-cover"
        src={car.image}
        alt="car"
      />

      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {car.year + " " + car.make + " " + car.model}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${car.rate + "/Day"}
        </p>
        {isDetailsOpened && (
          <>
            <h1 className="mb-2 text-2xl underline font-bold tracking-tight text-gray-900 dark:text-white">
              Specifications
            </h1>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              <span className="text-white">Fuel : </span>
              {car.fuel}
            </p>

            <p className="mb-3  text-gray-700 dark:text-gray-400">
              <span className="text-white">Body : </span>
              {car.category}
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              <span className="text-white">Color : </span>
              {car.color}
            </p>
            <p className="mb-3  text-gray-700 dark:text-gray-400">
              <span className="text-white">Transmission : </span>
              {car.transmission}
            </p>
          </>
        )}
        <button onClick={toggleDetails} className="text-white underline">
          {isDetailsOpened ? "Less" : "More"}
        </button>

        <div className="flex justify-center">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

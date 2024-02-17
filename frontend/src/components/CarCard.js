function CarCard({ car }) {
  //model
  //make
  //fuel
  //year
  //category
  //color
  //transmission
  //rate
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <img class="rounded-t-lg" src={car.image} alt="car" />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {car.make + " " + car.model}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {car.fuel}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {car.year}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {car.category}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {car.color}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {car.transmission}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${car.rate}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${car.rate}
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;

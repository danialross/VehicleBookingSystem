import { useState } from "react";

function BookingCard({ bookingData }) {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);

  return (
    <div className="flex flex-wrap w-full p-5 mb-4 bg-green-600 rounded-xl justify-center">
      <div className="m-2 max-w-lg min-w-64 object-contain  border-white border-4 rounded-xl">
        <img
          className="rounded-lg "
          src={bookingData.gallery.image}
          alt="car"
        />
      </div>
      <div className="p-4 m-2 flex flex-col items-center font-bebas w-70 min-w-64 text-white border-4 rounded-xl bg-green-900">
        <div className="text-3xl">
          {bookingData.cars.year +
            " " +
            bookingData.cars.make +
            " " +
            bookingData.cars.model}
        </div>
        <div className="flex flex-col items-start">
          {isDetailsOpened && (
            <>
              <p className="">
                <span className="text-white">Fuel : </span>
                {bookingData.cars.fuel}
              </p>

              <p className="">
                <span className="text-white">Body : </span>
                {bookingData.cars.category}
              </p>
              <p className=" ">
                <span className="text-white">Color : </span>
                {bookingData.cars.color}
              </p>
              <p className="">
                <span className="text-white">Transmission : </span>
                {bookingData.cars.transmission}
              </p>
            </>
          )}
          <button
            className="text-white underline"
            onClick={() => setIsDetailsOpened(!isDetailsOpened)}
          >
            {isDetailsOpened ? "Less" : "Details"}
          </button>
        </div>
        <div className="text-xl">Pick Up : {bookingData.rental.start}</div>
        <div className="text-xl">Drop Off : {bookingData.rental.end}</div>
        <div className="flex justify-center pt-3 w-full">
          <button className="text-white end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Modify
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;

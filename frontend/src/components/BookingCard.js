import { useState } from "react";

function BookingCard({ booking }) {
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  console.log(booking);

  return (
    <div className="flex flex-wrap w-full p-5 mb-4 bg-green-600 rounded-xl justify-center">
      <div className="m-2 max-w-md min-w-64 object-contain  border-white border-4 rounded-xl">
        <img className="rounded-lg " src={booking.image} alt="car" />
      </div>
      <div className="p-4 m-2 flex flex-col items-center font-bebas w-70 min-w-64 text-white border-4 rounded-xl bg-green-900">
        <div className="text-3xl">
          {booking.year + " " + booking.make + " " + booking.model}
        </div>
        <div className="flex flex-col items-start">
          {isDetailsOpened && (
            <>
              <p className="">
                <span className="text-white">Fuel : </span>
                {booking.fuel}
              </p>

              <p className="">
                <span className="text-white">Body : </span>
                {booking.category}
              </p>
              <p className=" ">
                <span className="text-white">Color : </span>
                {booking.color}
              </p>
              <p className="">
                <span className="text-white">Transmission : </span>
                {booking.transmission}
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
        <div className="text-xl">
          Pick Up : {new Date(booking.start_date).toLocaleString()}
        </div>
        <div className="text-xl">
          Drop Off : {new Date(booking.end_date).toLocaleString()}
        </div>
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

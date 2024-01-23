import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";
import { NavLink } from "react-router-dom";

function WelcomeBanner() {
  const phrases = [
    "Turning Miles into Smiles",
    "Explore. Drive. Repeat.",
    "Your Journey Starts Here",
    "Your Dream Car Is Waiting",
  ];

  const cars = [car1, car2, car3, car4];

  const randomNumber = Math.floor(Math.random() * 4);

  return (
    <div className="relative flex justify-center">
      <div className="z-0 flex justify-center items-center bg-green-600">
        <img
          src={cars[randomNumber]}
          alt={"Car"}
          className="z-0 max-w-2xl w-full m-12"
        />
      </div>
      <div className="font-bebas absolute top-12 z-1 text-white text-6xl">
        {phrases[randomNumber]}
      </div>
      <div className="absolute z-2 bottom-8">
        <NavLink
          to="/reserve"
          className="text-white bg-green-700 hover:bg-green-800 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-800 dark:hover:bg-green-900"
        >
          Reserve A Car
        </NavLink>
      </div>
    </div>
  );
}

export default WelcomeBanner;

import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";

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
    <div className=" pt-12 flex flex-col justify-center items-center">
      <div className="font-bebas text-white text-6xl">
        {phrases[randomNumber]}
      </div>
      <div className="bg-green-600">
        <img src={cars[randomNumber]} alt={"Car"} className="max-w-3xl" />
      </div>
    </div>
  );
}

export default WelcomeBanner;

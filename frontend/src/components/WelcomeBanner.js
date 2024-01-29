import car1 from "../assets/F-150.webp";
import car2 from "../assets/Porsche.jpg";
import car3 from "../assets/Range.jpg";
import car4 from "../assets/corolla.webp";

function WelcomeBanner() {
  const phrases = [
    "Explore. Drive. Repeat.",
    "Your Dream Car Is Waiting",
    "Your Journey Starts Here",
    "Turning Miles into Smiles",
  ];

  const cars = [car1, car2, car3, car4];
  const randomNumber = Math.floor(Math.random() * 4);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="relative max-w-4xl min-w-md flex justify-center">
          <img src={cars[randomNumber]} alt={"Car"} />
          <div className="absolute top-1/3 font-bebas text-5xl text-white sm:text-7xl md:text-7xl lg:text-7xl text-nowrap">
            {phrases[randomNumber]}
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeBanner;

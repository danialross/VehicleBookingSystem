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
      <div className="pt-10 flex flex-col justify-center items-center px-12">
        <div className="p-2 relative max-w-4xl min-w-md flex justify-center rounded-2xl bg-green-900">
          <img src={cars[randomNumber]} alt={"Car"} className="rounded-xl" />
          <div className="p-4 absolute top-1/3 font-bebas text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl text-nowrap">
            {phrases[randomNumber]}
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeBanner;

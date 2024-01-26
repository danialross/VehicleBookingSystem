import electric from "../assets/car5.png";
import truck from "../assets/car6.png";
import sport from "../assets/car7.png";
import compact from "../assets/car8.png";

function Category() {
  const sections = [
    {
      image: electric,
      phrase: "Green Power\n Pure Performance",
      category: "Electric Cars",
    },
    { image: truck, phrase: "Master of All Terrains", category: "Trucks" },
    {
      image: sport,
      phrase: "Engineered for Excitement",
      category: "Sports Cars",
    },
    {
      image: compact,
      phrase: "Proper\n Pocket Rocket",
      category: "Compact Cars",
    },
  ];

  return (
    <div className="flex py-10 justify-center">
      <div className="flex flex-col py-8 w-4/5 bg-green-900 rounded-xl">
        <div className="flex flex-wrap justify-center">
          {sections.map((section, index) => {
            return (
              <div
                className=" w-80 flex flex-col justify-between items-center m-4"
                key={index}
              >
                <div className="p-6 w-72 text-center font-bebas text-white text-4xl border-2 border-solid border-white rounded-lg whitespace-pre-line">
                  {section.phrase}
                </div>
                <img
                  className="object-contain max-w-sm p-8"
                  src={section.image}
                  alt={section.category}
                />
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  {`Browse ${section.category}`}
                </button>
              </div>
            );
          })}
          {/* <div className="flex flex-col justify-between items-center">
            <div className="font-bebas text-white text-4xl pb-10">
              Master of All Terrains
            </div>
            <img
              className="object-contain max-w-lg"
              src={truck}
              alt={"Truck"}
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              green
            </button>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="font-bebas text-white text-4xl pb-10">
              Engineered for Excitement
            </div>
            <img
              className="object-contain max-w-lg"
              src={sports}
              alt={"Sports Car"}
            />
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              green
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Category;

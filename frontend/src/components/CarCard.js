import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CarCard({ car }) {
  let navigate = useNavigate();
  const [isDetailsOpened, setIsDetailsOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");

  //model
  //make
  //fuel
  //year
  //category
  //color
  //transmission
  //rate

  const toggleDetails = () => setIsDetailsOpened(!isDetailsOpened);
  const openModal = () => setIsModalOpened(true);

  const closeModal = () => {
    setIsModalOpened(!isModalOpened);
    resetStates();
  };

  const resetStates = () => {
    setName("");
    setLicenseNumber("");
    setAge("");
    setContactNumber("");
    setGender("");
  };

  const sendData = async (event) => {
    event.preventDefault();

    const url = "http://localhost:3001/rent";
    const body = {
      plate_id: car.plate_id,
      license_id: licenseNumber,
      name: name,
      age: age,
      contact_info: contactNumber,
      gender: gender,
    };
    console.log(body);

    try {
      await axios.post(url, body);
    } catch (err) {
      console.error(err);
    }

    navigate("/bookings?license_id=" + licenseNumber);
  };

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
            onClick={openModal}
          >
            Rent
          </button>

          {/* modal */}
          {isModalOpened && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"></div>
              <div
                id="default-modal"
                tabIndex="-1"
                aria-hidden="true"
                className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Contact Information
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                        onClick={closeModal}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>

                    <form className="pt-5 pb-10 px-10" onSubmit={sendData}>
                      <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            License Number
                          </label>
                          <input
                            type="text"
                            id="license"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please enter a valid license number starting with DL followed by 6 digits."
                              )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                            pattern="^DL\d{6}$"
                            placeholder="DL123456"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="company"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Age
                          </label>
                          <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            id="age"
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please enter a valid age."
                              )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            pattern="^\d+$"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please enter a 10 digit phone number."
                              )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                            placeholder="0123456789"
                            pattern="[0-9]{10}"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="gender"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Gender
                          </label>
                          <div className="flex flex-col border border-gray-600 rounded-lg p-4 gap-2">
                            <label className="text-white">
                              <input
                                className="mr-2"
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={() => setGender("Male")}
                                required
                              />
                              Male
                            </label>
                            <label className="text-white">
                              <input
                                className="mr-2"
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={() => setGender("Female")}
                                required
                              />
                              Female
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex justify-end">
                        <button
                          type="submit"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarCard;

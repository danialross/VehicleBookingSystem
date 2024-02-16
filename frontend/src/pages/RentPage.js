import SearchCar from "../components/SearchCar";
import Banner from "../components/Banner";
import banner from "../assets/RentBanner.jpg";

function RentPage() {
  return (
    <div className=" bg-green-600">
      <Banner img={banner} text={"Your Adventure, Our Fleet\n\n\n"} />
      <SearchCar />
    </div>
  );
}

export default RentPage;

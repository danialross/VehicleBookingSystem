import Banner from "../components/Banner";
import SearchAndView from "../components/SearchAndView";
import banner from "../assets/GalleryBanner.jpg";

function GalleryPage() {
  return (
    <div className="bg-green-600">
      <Banner
        img={banner}
        text={
          "From the Garage to the Open Road\nWitness Our Cars in Their Element"
        }
      />
      <SearchAndView />
    </div>
  );
}

export default GalleryPage;

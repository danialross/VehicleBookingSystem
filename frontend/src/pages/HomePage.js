import Category from "../components/Category";
import WelcomeBanner from "../components/WelcomeBanner";

function HomePage() {
  return (
    <div className=" bg-green-700">
      <WelcomeBanner />
      <Category />
    </div>
  );
}

export default HomePage;

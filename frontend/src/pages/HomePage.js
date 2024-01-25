import Category from "../components/Category";
import WelcomeBanner from "../components/WelcomeBanner";

function HomePage() {
  return (
    <div className=" bg-green-600">
      <WelcomeBanner />
      <Category />
    </div>
  );
}

export default HomePage;

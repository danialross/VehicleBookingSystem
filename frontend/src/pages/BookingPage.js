import Banner from "../components/Banner";
import bookingBanner from "../assets/bookingBanner.jpeg";
import SearchBooking from "../components/SearchBooking";

function BookingPage() {
  return (
    <div className="bg-green-700">
      <Banner img={bookingBanner} text={"View Bookings, Start Journeys"} />
      <SearchBooking />
    </div>
  );
}

export default BookingPage;

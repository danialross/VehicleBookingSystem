import Banner from "../components/Banner";
import bookingBanner from "../assets/bookingBanner.jpeg";
import SearchBooking from "../components/SearchBooking";

function BookingPage() {
  return (
    <div className="bg-green-700">
      <Banner img={bookingBanner} text={"Shift Gears, Control Your Bookings"} />
      <SearchBooking />
    </div>
  );
}

export default BookingPage;

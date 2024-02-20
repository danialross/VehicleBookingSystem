import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import RentPage from "./pages/RentPage";
import BookingPage from "./pages/BookingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Navbar>
              <HomePage />
            </Navbar>
          }
        ></Route>
        <Route
          path="/rent"
          element={
            <Navbar>
              <RentPage />
            </Navbar>
          }
        ></Route>
        <Route
          path="/bookings"
          element={
            <Navbar>
              <BookingPage />
            </Navbar>
          }
        ></Route>
        <Route
          path="/gallery"
          element={
            <Navbar>
              <GalleryPage />
            </Navbar>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

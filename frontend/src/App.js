import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
        <Route path="/rent" element={<Navbar></Navbar>}></Route>
        <Route path="/return" element={<Navbar></Navbar>}></Route>
        <Route path="/bookings" element={<Navbar></Navbar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

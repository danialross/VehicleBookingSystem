import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navbar></Navbar>}></Route>
        <Route path="/reserve" element={<Navbar></Navbar>}></Route>
        <Route path="/return" element={<Navbar></Navbar>}></Route>
        <Route path="/bookings" element={<Navbar></Navbar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

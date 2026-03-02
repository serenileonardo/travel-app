import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-trip" element={<AddTrip />} />
      </Routes>
    </>
  );
}

export default App;

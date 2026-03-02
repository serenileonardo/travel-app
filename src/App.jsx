import Header from "./components/Header";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-trip" element={<AddTrip />} />
        </Routes>
      </div>

      <footer className="bg-primary text-white text-center py-3">
        Travel
      </footer>

    </div>
  );
}

export default App;

import Header from "./components/Header";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./layouts/DefaultLayouts";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      <div className="flex-grow-1">
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-trip" element={<AddTrip />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <footer className="bg-primary text-white text-center py-3">
        Travel
      </footer>

    </div>
  );
}

export default App;

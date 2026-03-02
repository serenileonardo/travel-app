import Header from "./components/Header";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts";

function App() {
  return (
    
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-trip" element={<AddTrip />} />
            </Route>
          </Routes>
        </BrowserRouter>
  
  );
}

export default App;

import Header from "./components/Header";
import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";

function App() {
  return (
    
        
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/add-trip" element={<AddTrip />} />
            </Route>
          </Routes>
       
  
  );
}

export default App;

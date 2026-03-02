import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DefaultLayouts from "./layouts/DefaultLayouts";
import RubricaViaggio from "./pages/RubricaViaggio";


function App() {
  return (
    
        
          <Routes>
            <Route element={<DefaultLayouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/viaggio/:id" element={<RubricaViaggio />} />
            </Route>
          </Routes>
       
  
  );
}

export default App;

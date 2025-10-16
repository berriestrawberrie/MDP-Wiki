import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllPony from "./pages/pony/allpony";
import Breeding from "./pages/breeding";
import About from "./pages/about";
import PonyCustom from "./pages/pony/customization";
import PonyDesign from "./pages/pony/design";
import Glimmerpane from "./pages/pony/glimmerpane";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allponies" element={<AllPony />} />
      <Route path="/breeding" element={<Breeding />} />
      <Route path="/about" element={<About />} />
      <Route path="/ponyCustom" element={<PonyCustom />} />
      <Route path="/ponyDesign" element={<PonyDesign />} />
      <Route path="/glimmerpane" element={<Glimmerpane />} />
    </Routes>
  );
}

export default App;

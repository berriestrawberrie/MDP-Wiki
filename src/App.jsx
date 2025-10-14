import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllPony from "./pages/pony/allpony";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allponies" element={<AllPony />} />
    </Routes>
  );
}

export default App;

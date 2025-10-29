import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllPony from "./pages/pony/allpony";
import Breeding from "./pages/breeding";
import About from "./pages/about";
import PonyCustom from "./pages/pony/customization";
import PonyDesign from "./pages/pony/design";
import Glimmerpane from "./pages/pony/glimmerpane";
import Avatars from "./pages/players/avatars";
import PlayerSkills from "./pages/players/skills";
import Contest from "./pages/contes";
import Social from "./pages/NPC/social";
import Commun from "./pages/players/communicate";
import Characters from "./pages/NPC/characters";
import NotFound from "./pages/NotFound";
import Roadmap from "./pages/roadmap";
import Ponyware from "./pages/pony/ponyware";
import Explore from "./pages/explore";
import Subscribe from "./pages/subscribe";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allponies" element={<AllPony />} />
      <Route path="/breeding" element={<Breeding />} />
      <Route path="/about" element={<About />} />
      <Route path="/ponyStickers" element={<PonyCustom />} />
      <Route path="/ponyDesign" element={<PonyDesign />} />
      <Route path="/glimmerpane" element={<Glimmerpane />} />
      <Route path="/avatars" element={<Avatars />} />
      <Route path="/playerSkills" element={<PlayerSkills />} />
      <Route path="/competitions" element={<Contest />} />
      <Route path="/socializing" element={<Social />} />
      <Route path="/communication" element={<Commun />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/ponyware" element={<Ponyware />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/sign-up" element={<Subscribe />} />
      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import ProjectSweetHome from "./pages/ProjectSweetHome";
import ProjectOrbit from "./pages/ProjectOrbit";
import ProjectPriscille from "./pages/ProjectPriscille";
import HowIWork from "./pages/HowIWork";

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="projets/sweethome" element={<ProjectSweetHome />} />
        <Route path="projets/orbit" element={<ProjectOrbit />} />
        <Route path="projets/priscille" element={<ProjectPriscille />} />
        <Route path="comment-je-travaille" element={<HowIWork />} />
      </Route>
    </Routes>
  );
}

export default App;

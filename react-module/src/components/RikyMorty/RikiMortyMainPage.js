import { NavLink, Route, Routes } from "react-router-dom";
import { EpisodesRoutes } from "./Episodes/EpisodesRoutes";
import { Home } from "./Home";
import { CharactersRoutes } from "./Characters/CharactersRoutes";
import { NotFound } from "./NotFound";
import { LocationRoutes } from "./Locations/LocationRoutes";

function RikyMortyMainPage() {
  return (
    <>
      <ul>
        <li><NavLink to='/'>Main</NavLink></li>
        <li><NavLink to='/characters'>Characters</NavLink></li>
        <li><NavLink to='/episodes'> Episodes</NavLink></li>
        <li><NavLink to='/location'>Location</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters/*" element={<CharactersRoutes/>}/>
        <Route path="/episodes/*" element={<EpisodesRoutes/>}/>
        <Route path="/location/*" element={<LocationRoutes/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default RikyMortyMainPage;

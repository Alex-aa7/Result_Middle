import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { characters } from "../data/characters";
import { Character } from "./Character";
import { CharactersLayout } from "./CharactersLayout";

export function CharactersRoutes() {
  const nav = useNavigate();
  const id=useParams();
  console.log(id)
    


  const navHandler = (index) => {
    console.log(index);
    if (index > characters.length) {
      index = characters.length;
    }
    if (index < 1) {
      index = 1;
    }
    return nav(`/characters/${index}`);
  };

  return (
    <>
      <form>
        <input
          type="number"
          name="id"
          placeholder="введите"
          onChange={(e) => navHandler(e.target.value)}
        ></input>
      </form>
      <Routes>
        <Route index element={<CharactersLayout />} />
        <Route element={<CharactersLayout />}>
          <Route path=":id" element={<Character />} />
        </Route>
      </Routes>
    </>
  );
}

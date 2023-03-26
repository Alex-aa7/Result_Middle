import { Route, Routes, useNavigate } from "react-router-dom";
import { Character } from "./Character";
import { CharactersLayout } from "./CharactersLayout";

export function CharactersRoutes() {
  const nav = useNavigate();
  const navHandler = (e) => {
    let index = e.target.value;
    console.log(index);
    //дописать ограничения для index
    return nav(`/characters/${index}`);
  };
  return (
    <>
      <input
        type="number"
        name="id"
        placeholder="введите"
        onChange={(e) => navHandler(e)}
      ></input>
      <Routes>
        <Route index element={<CharactersLayout />} />
        <Route element={<CharactersLayout />}>
          <Route path=":id" element={<Character />} />
        </Route>
      </Routes>
    </>
  );
}

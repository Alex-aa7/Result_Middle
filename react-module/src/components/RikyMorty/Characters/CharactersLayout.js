import { Outlet } from "react-router-dom";
import { ListLinkComponent } from "../../ListLinkComponent";
import { characters } from "../data/characters";

const charList = (e) => {
  console.log(e);
  return (
    <div>
      {characters
        .filter((characters) => characters.name.includes(""))
        .map((el) => (
          <ListLinkComponent key={el.id} el={el} />
        ))}
    </div>
  );
};

export function CharactersLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="list">
          <h1>Characters List</h1>
          <form onSubmit={(e) => charList(e)}>
            <input type="text" placeholder="" name="name"></input>
          </form>
          <ul>{charList()}</ul>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

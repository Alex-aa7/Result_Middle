
import { Link, Outlet } from "react-router-dom";
import { characters } from "../data/characters";

const charList = (e) => {
 console.log(e)
  return (
    <div>
      {characters
        .filter((characters) => characters.name.includes(''))
        .map((el) => (
          <Link key={el.id} to={`/characters/${el.id}`}>
            <li>
              {el.name} {" - "} {el.species}
            </li>
          </Link>
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
          <form onSubmit={(e)=>charList(e)}>
          <input type='text' placeholder="" name='name'></input>
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

import { Link, Outlet } from "react-router-dom";
import { episodes } from "../data/episodes";

export function EpisodesLayout() {
  return (
    <>
    <div className="wrapper">
      <div className="list">
      <h1>Episodes List</h1>
      <ul>
        {episodes.map((el) => (
          <Link key={el.id} to={`/episodes/${el.id}`}>
            <li>{el.name}</li>
          </Link>
        ))}
      </ul></div>
      <div className="outlet">
      <Outlet/></div>
      </div>
    </>
  );
}

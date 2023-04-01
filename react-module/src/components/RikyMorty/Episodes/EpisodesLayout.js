import { Outlet } from "react-router-dom";
import { ListLinkComponent } from "../../ListLinkComponent";
import { episodes } from "../data/episodes";

export function EpisodesLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="list">
          <h1>Episodes List</h1>
          <ul>
            {episodes.map((el) => (
              <ListLinkComponent key={el.id} el={el} />
            ))}
          </ul>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

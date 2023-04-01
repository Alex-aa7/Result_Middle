import { Outlet } from "react-router-dom";
import { ListLinkComponent } from "../../ListLinkComponent";
import { locations } from "../data/locations";

export function LocationLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="list">
          <h1>Location List</h1>
          <ul>
            {locations.map((el) => (
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

import { Link, Outlet } from "react-router-dom";
import { locations } from "../data/locations";

export function LocationLayout() {
  return (
    <>
      <div className="wrapper">
        <div className="list">
          <h1>Location List</h1>
          <ul>
            {locations.map((el) => (
              <Link to={`${el.id}`}>
                <li>{el.name}</li>
              </Link>
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

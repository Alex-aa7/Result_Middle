import { useParams } from "react-router-dom";
import { locations } from "../data/locations";

export function Location() {
  const { id } = useParams();
  return (
    <>
      <h1>Location {id}</h1>
      <p>{locations[id - 1].name}</p>
      <p>{locations[id - 1].type}</p>
      <p>{locations[id - 1].dimension}</p>
      <p>{locations[id - 1].created}</p>
    </>
  );
}

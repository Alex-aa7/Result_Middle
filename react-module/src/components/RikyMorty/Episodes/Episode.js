import { useParams } from "react-router-dom";
import { episodes } from "../data/episodes";

export function Episode() {
  const {id}= useParams();
  return (
    <>
      <h1>Episode: {id}</h1>
      <p>{episodes[id-1].name}</p>
      <p>{episodes[id-1].air_date}</p>
      <p>{episodes[id-1].episode}</p>
      <p>{episodes[id-1].created}</p>
    </>
  );
}

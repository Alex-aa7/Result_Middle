import { useParams } from "react-router-dom";
import { characters } from "../data/characters";

export function Character() {
  const {id}= useParams();
  const name = characters[id-1].name;
  return (
    <>
      <h1>Character: {id}</h1>
      <div>
        <img src={characters[id-1].image} alt={name}></img>
      </div>
      <h2>{characters[id-1].species}</h2>
    </>
  );
}

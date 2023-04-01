import { useParams } from "react-router-dom";
import { characters } from "../data/characters";

export function Character() {
  let {id}= useParams();
  console.log(id)
  const name = characters[id-1].name;

  return (
    <>
      <button type="button" >Next</button>
      <h1>Character: {id}</h1>
      <div>
        <img src={characters[id-1].image} alt={name}></img>
      </div>
      <h2>{characters[id-1].species}</h2>
    </>
  );
}

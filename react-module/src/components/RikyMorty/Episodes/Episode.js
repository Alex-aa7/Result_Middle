import { useParams } from "react-router-dom";
import { episodes } from "../data/episodes";
import { EpisodeCurrent } from "./EpisodeCurrent";

export function Episode() {
  const { id } = useParams();
  const item=episodes[id];
  return <EpisodeCurrent item={item} />;
}

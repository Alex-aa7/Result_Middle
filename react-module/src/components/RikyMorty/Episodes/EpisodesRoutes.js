import { Route, Routes } from "react-router-dom";
import { EpisodesLayout } from "../Episodes/EpisodesLayout";
import { Episode } from "./Episode";

export function EpisodesRoutes() {
  return (
    <Routes>
      <Route index element={<EpisodesLayout />} />
      <Route element={<EpisodesLayout />}>
        <Route path=":id" element={<Episode />} />
      </Route>
    </Routes>
  );
}

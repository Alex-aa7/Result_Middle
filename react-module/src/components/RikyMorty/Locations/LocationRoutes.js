import { Route, Routes } from "react-router-dom";
import { Location } from "./Location";
import { LocationLayout } from "./LocationLayout";

export function LocationRoutes() {
  return (
    <Routes>
      <Route index element={<LocationLayout />} />
      <Route element={<LocationLayout />}>
        <Route path=":id" element={<Location />} />
      </Route>
    </Routes>
  );
}

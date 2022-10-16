import React from "react";
import { Route, Routes } from "react-router-dom";
import CategorizedAnimalsPage from "./Pages/CategorizedAnimals/CategorizedAnimals";
import Homepage from "./Pages/Homepage/Homepage";
import PetProfilePage from "./Pages/PetProfile/PetProfilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Homepage />} />
        <Route path=":category">
          <Route index element={<CategorizedAnimalsPage />} />
          <Route index={false} path=":id" element={<PetProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;

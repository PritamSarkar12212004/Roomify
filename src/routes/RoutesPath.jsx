import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import Admin from "../components/MainComponents/adminPage/Admin";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default RoutesPath;

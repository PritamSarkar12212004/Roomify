import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/mainPage/MainPage";
import Admin from "../components/MainComponents/adminPage/Admin";
import LoginPage from "../components/LoginPage/LoginPage";
function RoutesPath() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default RoutesPath;

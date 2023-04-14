import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;

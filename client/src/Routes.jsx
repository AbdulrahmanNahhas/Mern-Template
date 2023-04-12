import React from "react";
import { Routes, Route } from "react-router-dom";

// import pages here
import Home from "./pages/Home.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;

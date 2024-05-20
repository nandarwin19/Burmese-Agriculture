import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";

const AppWrapper = ({ children }) => {
  const location = useLocation();
  const isPlantRoute = location.pathname === "/plant";

  return (
    <>
      {children}
      {!isPlantRoute && <Footer />}
    </>
  );
};

export default AppWrapper;

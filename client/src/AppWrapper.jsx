import { useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import PropTypes from "prop-types";

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

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;

import PropTypes from "prop-types";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-20">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

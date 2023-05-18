import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShopCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

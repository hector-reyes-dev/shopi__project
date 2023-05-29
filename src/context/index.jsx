import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  return (
    <ShopCartContext.Provider
      value={{
        count,
        setCount,
        toggleProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

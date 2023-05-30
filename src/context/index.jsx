import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  return (
    <ShopCartContext.Provider
      value={{
        toggleProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

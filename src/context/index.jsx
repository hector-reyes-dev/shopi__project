import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { API_URL } from "../api";

export const ShopCartContext = createContext();

export const ShopCartProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutAsideOpen, setIsCheckoutAsideOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  const toggleCheckoutAside = () =>
    setIsCheckoutAsideOpen(!isCheckoutAsideOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`${API_URL}/products`);
        const data = await resp.json();
        setProducts(data);
      } catch (error) {
        console.error(`Ocurrio un error. ${error}`);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchByTitle.length > 0)
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle));
  }, [products, searchByTitle]);

  return (
    <ShopCartContext.Provider
      value={{
        toggleProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        toggleCheckoutAside,
        isCheckoutAsideOpen,
        order,
        setOrder,
        products,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

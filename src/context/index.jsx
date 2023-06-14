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
  const [searchByCategory, setSearchByCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filteredProductsByTitle = (products, searchByTitle) => {
    return products?.filter((product) =>
      product.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredProductsByCategory = (products, searchByCategory) => {
    return products?.filter((product) =>
      product.category.name.toLowerCase().includes(searchByCategory)
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

  const filteredBy = (
    searchType,
    products,
    searchByTitle,
    searchByCategory
  ) => {
    if (searchType === "BY_TITLE") {
      return filteredProductsByTitle(products, searchByTitle);
    }

    if (searchType === "BY_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory);
    }

    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredProductsByCategory(products, searchByCategory).filter(
        (product) =>
          product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }

    if (!searchType) {
      return products;
    }
  };

  useEffect(() => {
    if (searchByTitle && !searchByCategory)
      setFilteredProducts(
        filteredBy("BY_TITLE", products, searchByTitle, searchByCategory)
      );

    if (!searchByTitle && searchByCategory)
      setFilteredProducts(
        filteredBy("BY_CATEGORY", products, searchByTitle, searchByCategory)
      );

    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filteredBy(
          "BY_TITLE_AND_CATEGORY",
          products,
          searchByTitle,
          searchByCategory
        )
      );

    if (!searchByTitle && !searchByCategory) {
      setFilteredProducts(
        filteredBy(null, products, searchByTitle, searchByCategory)
      );
    }

    return () => {
      setSearchByTitle(null);
    };
  }, [products, searchByTitle, searchByCategory]);

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
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  );
};

ShopCartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

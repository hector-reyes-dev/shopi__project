import { useContext } from "react";
import PropTypes from "prop-types";
import { PlusIcon } from "@heroicons/react/24/outline";
import { ShopCartContext } from "../../context";

export const Card = ({ product }) => {
  const { category, images, price, title } = product;
  const {
    isProductDetailOpen,
    toggleProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isCheckoutAsideOpen,
    toggleCheckoutAside,
  } = useContext(ShopCartContext);

  const showProductDetail = (productDetail) => {
    isProductDetailOpen ? "" : toggleProductDetail();
    isCheckoutAsideOpen ? toggleCheckoutAside() : "";
    setProductToShow(productDetail);
  };

  const addToCart = (event, productData) => {
    event.stopPropagation();
    isCheckoutAsideOpen ? "" : toggleCheckoutAside();
    isProductDetailOpen ? toggleProductDetail() : "";
    setCartProducts([...cartProducts, productData]);
  };

  return (
    <div
      className="w-56 h-60 bg-white cursor-pointer"
      onClick={() => showProductDetail(product)}
    >
      <figure className="relative w-full h-4/5 mb-2">
        <span className="absolute bottom-0 left-0 px-2 m-2 bg-white/60 rounded-full text-black text-sm">
          {category.name}
        </span>
        <img
          src={images ? images[0] : ""}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={(event) => addToCart(event, product)}
          className="absolute w-6 h-6 top-0 right-0 m-2 p-1 flex justify-center items-center bg-white rounded-full font-bold"
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-semibold">${price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

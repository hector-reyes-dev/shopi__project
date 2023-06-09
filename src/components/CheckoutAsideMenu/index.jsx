import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShopCartContext } from "../../context";
import { totalPrice } from "../../helpers";
import { OrderCard } from "../OrderCard";
import "./styles.css";

export const CheckoutAside = () => {
  const {
    cartProducts,
    toggleCheckoutAside,
    isCheckoutAsideOpen,
    setCartProducts,
    order,
    setOrder,
  } = useContext(ShopCartContext);

  const handleDelete = (productId) => {
    const filteredProducts = cartProducts.filter(({ id }) => id !== productId);

    !filteredProducts.length ? toggleCheckoutAside() : "";
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "01/02/2023",
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };

    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    toggleCheckoutAside();
  };

  return (
    <aside
      className={`${
        isCheckoutAsideOpen ? "flex" : "hidden"
      } h-fit max-h-[80%] px-6 py-8 flex-col fixed right-4 bg-white border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center pb-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => toggleCheckoutAside()}
        />
      </div>
      <div className="flex flex-col gap-2 checkout-aside overflow-y-scroll scrollable-cards">
        {cartProducts.map((product) => (
          <OrderCard key={product.id} {...product} onDelete={handleDelete} />
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm font-light">Total: </p>
        <p className="text-lg font-medium">${totalPrice(cartProducts)}</p>
      </div>
      <Link to="/my-orders/last">
        <button
          onClick={() => handleCheckout()}
          className="w-full bg-black mt-4 py-3 text-white rounded-lg"
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

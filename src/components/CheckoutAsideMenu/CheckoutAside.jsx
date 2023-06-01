import { useContext } from "react";
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
  } = useContext(ShopCartContext);

  const handleDelete = (productId) => {
    const filteredProducts = cartProducts.filter(({ id }) => id !== productId);

    filteredProducts.length ? "" : toggleCheckoutAside();
    setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        isCheckoutAsideOpen ? "flex" : "hidden"
      } checkout-aside overflow-y-scroll scrollable-cards h-fit max-h-full pb-8 flex-col fixed right-4 bg-white border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => toggleCheckoutAside()}
        />
      </div>
      <div className="flex flex-col px-6 gap-2">
        {cartProducts.map((product) => (
          <OrderCard key={product.id} {...product} onDelete={handleDelete} />
        ))}
      </div>
      <div className="mt-4 px-6 flex justify-between items-center">
        <p className="text-sm font-light">Total: </p>
        <p className="text-lg font-medium">${totalPrice(cartProducts)}</p>
      </div>
    </aside>
  );
};

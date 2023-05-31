import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShopCartContext } from "../../context";
import { OrderCard } from "../OrderCard";
import "./styles.css";

export const CheckoutAside = () => {
  const { cartProducts, toggleCheckoutAside, isCheckoutAsideOpen } =
    useContext(ShopCartContext);

  return (
    <aside
      className={`${
        isCheckoutAsideOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 bg-white border border-black rounded-lg`}
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
          <OrderCard key={product.id} {...product} />
        ))}
      </div>
    </aside>
  );
};

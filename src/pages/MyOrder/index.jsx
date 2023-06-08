import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Layout } from "../../components/Layout";
import { ShopCartContext } from "../../context";
import { OrderCard } from "../../components/OrderCard";

export const MyOrder = () => {
  const { order } = useContext(ShopCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") index = order?.length - 1;

  const orderProducts = order?.[index].products;

  return (
    <Layout>
      <div className="w-80 flex items-center justify-center relative mb-8">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => {}}
          />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col gap-2 checkout-aside overflow-y-scroll scrollable-cards">
        {orderProducts.map((product) => (
          <OrderCard key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
};

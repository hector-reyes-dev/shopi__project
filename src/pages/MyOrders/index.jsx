import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopCartContext } from "../../context";
import { Layout, OrdersCard } from "../../components";

export const MyOrders = () => {
  const { order } = useContext(ShopCartContext);

  return (
    <Layout>
      <div className="w-80 flex items-center justify-center mb-8">
        <h1>My Orders</h1>
      </div>
      {order.map(({ totalPrice, totalProducts }, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />
        </Link>
      ))}
    </Layout>
  );
};

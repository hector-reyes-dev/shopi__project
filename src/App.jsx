import { useRoutes, BrowserRouter } from "react-router-dom";

import { ShopCartProvider } from "./context";
import { Home } from "./pages/Home";
import { MyAccount } from "./pages/MyAccount";
import { MyOrder } from "./pages/MyOrder";
import { MyOrders } from "./pages/MyOrders";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/SignIn";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-order", element: <MyOrder /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "*", element: <NotFound /> },
    { path: "sign-in", element: <SignIn /> },
  ]);

  return routes;
};

export const App = () => {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShopCartProvider>
  );
};

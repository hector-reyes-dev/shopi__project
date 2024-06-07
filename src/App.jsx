import { useRoutes, BrowserRouter } from "react-router-dom";
import LogRocket from "logrocket";

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
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "my-account", element: <MyAccount /> },
    { path: "my-orders", element: <MyOrders /> },
    { path: "my-orders/last", element: <MyOrder /> },
    { path: "my-orders/:id", element: <MyOrder /> },
    { path: "*", element: <NotFound /> },
    { path: "sign-in", element: <SignIn /> },
  ]);

  return routes;
};

LogRocket.init("zvhuxj/testing-project-xdbm3");
console.log("some");

export const App = () => {
  return (
    <ShopCartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShopCartProvider>
  );
};

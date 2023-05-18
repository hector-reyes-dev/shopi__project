import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavItem } from "../NavItem";
import { ShopCartContext } from "../../context";
import { NavLink } from "react-router-dom";

const mainMenu = [
  { to: "/all", label: "All" },
  { to: "/clothes", label: "Clothes" },
  { to: "/electronics", label: "Electronics" },
  { to: "/furnitures", label: "Furnitures" },
  { to: "/toys", label: "Toys" },
  { to: "/others", label: "Others" },
];

const secondaryMenu = [
  { to: "/my-account", label: "hector@gmail.com", styles: "text-black/60" },
  { to: "/my-orders", label: "My Orders" },
  { to: "/my-account", label: "My Account" },
  { to: "/sign-in", label: "Sign In" },
];

export const Navbar = () => {
  const { count } = useContext(ShopCartContext);

  return (
    <nav className="w-full py-2 px-8 text-md font-light flex justify-between items-center fixed z-10 top-0">
      <ul id="main-menu" className="flex items-center space-x-3">
        <NavLink to="/" className="font-semibold text-lg pr-2">
          Shopi
        </NavLink>
        {mainMenu.map(({ to, label, styles }) => (
          <NavItem key={label} to={to} styles={styles}>
            {label}
          </NavItem>
        ))}
      </ul>
      <ul id="secondary-menu" className="flex items-center space-x-3">
        {secondaryMenu.map(({ to, label, styles }) => (
          <NavItem key={label} to={to} styles={styles}>
            {label}
          </NavItem>
        ))}
        <NavItem to="/my-order">
          <div className="flex space-x-2">
            <ShoppingCartIcon className="h-6 w-6 text-black" />
            <p>{count}</p>
          </div>
        </NavItem>
      </ul>
    </nav>
  );
};

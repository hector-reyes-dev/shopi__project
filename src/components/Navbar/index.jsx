import { useContext } from "react";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavItem } from "../NavItem";
import { ShopCartContext } from "../../context";
import { NavLink } from "react-router-dom";

const mainMenu = [
  { to: "/clothes", label: "Clothes" },
  { to: "/electronics", label: "Electronics" },
  { to: "/furnitures", label: "Furniture" },
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
  const { cartProducts, setSearchByCategory, toggleCheckoutAside } =
    useContext(ShopCartContext);

  const handleClick = () => {
    toggleCheckoutAside();
  };

  return (
    <nav className="w-full py-2 px-8 text-md font-light flex justify-between items-center fixed z-10 top-0 backdrop-blur-md bg-white/60">
      <ul id="main-menu" className="flex items-center space-x-3">
        <NavLink
          to="/"
          onClick={() => setSearchByCategory(null)}
          className="flex gap-1 items-center"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="font-semibold text-lg pr-2">Shopi</span>
        </NavLink>
        {mainMenu.map(({ to, label, styles }) => (
          <NavItem
            key={label}
            to={to}
            onSearchCategory={setSearchByCategory}
            styles={styles}
          >
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
        <button onClick={() => handleClick()}>
          <div className="flex space-x-2">
            <ShoppingBagIcon className="h-6 w-6 text-black" />
            <p>{cartProducts.length}</p>
          </div>
        </button>
      </ul>
    </nav>
  );
};

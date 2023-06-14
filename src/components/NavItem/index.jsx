import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavItem = ({ to, children, styles, onSearchCategory }) => {
  const activeStyle = "underline underline-offset-4";

  return (
    <li className={styles}>
      <NavLink
        to={to}
        onClick={() => onSearchCategory(children.toLowerCase())}
        className={({ isActive }) => (isActive ? activeStyle : "")}
      >
        {children}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  styles: PropTypes.string,
  onSearchCategory: PropTypes.func,
};

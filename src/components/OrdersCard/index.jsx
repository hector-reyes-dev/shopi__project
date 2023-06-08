import {
  CalendarIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <article className="w-80 flex items-center p-4 border border-black rounded-lg mb-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="flex gap-2 items-center">
            <CalendarIcon className="h-5 w-5 text-black" />
            <span className="text-sm font-light">00.00.00</span>
          </p>
          <p className="flex gap-2 items-center">
            <ShoppingBagIcon className="h-5 w-5 text-black" />
            <span className="text-md font-medium">{totalProducts} items</span>
          </p>
        </div>
        <p className="flex gap-1 items-center">
          <span className="text-xl font-medium">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </p>
      </div>
    </article>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.any,
  totalProducts: PropTypes.any,
};

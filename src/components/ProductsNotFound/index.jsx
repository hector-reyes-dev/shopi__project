import { FaceFrownIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export const ProductsNotFound = ({ search = "Sorry" }) => {
  return (
    <div className="flex gap-2 items-center">
      <FaceFrownIcon className="h-12 w-12 text-gray-600 cursor-pointer" />
      <p className="flex flex-col">
        <span className="font-medium">{search}</span>
        <span className="text-sm">Products Not Found </span>
      </p>
    </div>
  );
};

ProductsNotFound.propTypes = {
  search: PropTypes.string.isRequired,
};

import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export const OrderCard = ({ id, images, price, title, onDelete }) => {
  return (
    <div className="py-2 flex justify-between items-start">
      <div className="flex items-center gap-2">
        <figure className="w-14 h-14">
          <img
            src={images ? images[0] : ""}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-light">{title}</p>
          <p className="text-lg font-medium">${price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.any.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

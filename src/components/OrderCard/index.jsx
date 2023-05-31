import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export const OrderCard = ({ images, price, title }) => {
  const removeProduct = () => {
    console.log("Remover");
  };

  return (
    <div className="flex justify-between item-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            src={images ? images[0] : ""}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-ms font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => removeProduct()}
        />
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  images: PropTypes.any.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

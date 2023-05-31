import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShopCartContext } from "../../context";
import "./styles.css";

export const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail, productToShow } =
    useContext(ShopCartContext);
  const { images, price, title, description } = productToShow;

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } product-detail h-fit flex-col fixed right-4 bg-white border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="h-6 w-6 text-black cursor-pointer"
          onClick={() => toggleProductDetail()}
        />
      </div>
      <div className="flex flex-col px-6 gap-2">
        <figure>
          <img
            src={images ? images[0] : ""}
            alt={title}
            className="w-full h-full rounded-lg"
          />
        </figure>
        <span className="font-medium text-xl">${price}</span>
        <h3 className="font-medium text-lg">{title}</h3>
        <span className="pb-8 text-sm">{description}</span>
      </div>
    </aside>
  );
};

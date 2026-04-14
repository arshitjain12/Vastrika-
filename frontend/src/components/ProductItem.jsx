import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
    <div className="product-img-box relative overflow-hidden group">
  <img
    className="w-full aspect-[3/4] object-cover"
    src={image[0]}
    alt={name}
  />
  <div className="quick-label shadow-lg">
    Quick View
  </div>
</div>

      <p className="prod-name pt-3 pb-1 text-sm">{name}</p>
      <p className="prod-price text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  );
};

export default ProductItem;
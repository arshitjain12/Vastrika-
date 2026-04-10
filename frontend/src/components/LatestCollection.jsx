import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
    <div className="text-center py-8">

    {/* Golden tag line */}
    <div className="flex items-center justify-center gap-3 mb-3">
      <span className="h-px w-10 bg-[#c8a96e]"></span>
      <span className="text-[10px] tracking-[0.25em] text-[#c8a96e] font-semibold">SEASON 2025</span>
      <span className="h-px w-10 bg-[#c8a96e]"></span>
    </div>

    <Title text1={"LATEST"} text2={"COLLECTIONS"} />

    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
      Discover our latest arrivals, designed to keep you ahead in style.
      From elegant ethnic wear to chic western outfits.
    </p>

  </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

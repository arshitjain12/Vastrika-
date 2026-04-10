import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
    <div className="text-center py-8">

  {/* Golden tag line */}
  <div className="flex items-center justify-center gap-3 mb-3">
    <span className="h-px w-10 bg-[#c8a96e]"></span>
    <span className="text-[10px] tracking-[0.25em] text-[#c8a96e] font-semibold">CUSTOMER FAVOURITES</span>
    <span className="h-px w-10 bg-[#c8a96e]"></span>
  </div>

  <Title text1={"BEST"} text2={"SELLERS"} />

  <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mt-3 leading-relaxed">
    Our most-loved styles, chosen by thousands of happy customers. These
    timeless pieces are trending now.
  </p>

</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

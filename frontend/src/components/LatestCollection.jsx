import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    setTimeout(() => setMounted(true), 100);
  }, [products]);

  return (
    <div className="my-10">
      <style>{`
        /* Entrance animation for cards */
        .prod-card { 
          opacity: 0; 
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease; 
        }
        .prod-card.show { opacity: 1; transform: translateY(0); }

        /* Image Box & Shine Effect */
        .product-img-box { position: relative; overflow: hidden; background: #f9f9f9; border-radius: 4px; }
        .product-img-box img {
          transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), filter 0.5s ease;
          filter: grayscale(15%);
        }

        /* Hover Effects */
        .prod-card-wrap:hover .product-img-box img { transform: scale(1.1); filter: grayscale(0%); }
        
        .product-img-box::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-25deg); transition: 0.7s; z-index: 1;
        }
        .prod-card-wrap:hover .product-img-box::before { left: 125%; }

        /* Label Animation */
        .quick-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: white; color: black; font-size: 10px; font-weight: 600;
          letter-spacing: 0.15em; text-align: center; padding: 12px 0;
          opacity: 0; transform: translateY(100%);
          transition: all 0.4s ease; z-index: 2; text-transform: uppercase;
        }
        .prod-card-wrap:hover .quick-label { opacity: 1; transform: translateY(0); }

        /* Underline effect for name */
        .prod-name { position: relative; display: inline-block; transition: color 0.3s; }
        .prod-name::after {
          content: ''; position: absolute; width: 0; height: 1px;
          bottom: -1px; left: 0; background-color: black; transition: width 0.3s;
        }
        .prod-card-wrap:hover .prod-name::after { width: 100%; }
        
        /* Mobile handling */
        @media (max-width: 640px) {
          .quick-label { display: none; }
          .product-img-box img { filter: grayscale(0%); }
        }
      `}</style>

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

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <div
            key={item._id}
            className={`prod-card prod-card-wrap ${mounted ? "show" : ""}`}
            style={{ transitionDelay: `${index * 50}ms` }} 
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
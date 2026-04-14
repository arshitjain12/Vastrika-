import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    setTimeout(() => setMounted(true), 150);
  }, [products]);

  return (
    <div className="my-10 overflow-hidden">
      <style>{`
        /* Entrance animation for Best Seller Cards */
        .best-card { 
          opacity: 0; 
          transform: translateY(40px);
          transition: opacity 1s ease, transform 1s cubic-bezier(0.2, 1, 0.3, 1); 
        }
        .best-card.show { opacity: 1; transform: translateY(0); }

        /* Hover: Premium Shine & Zoom */
        .product-img-box img {
          transition: transform 0.9s cubic-bezier(0.2, 1, 0.3, 1), filter 0.6s ease;
          filter: grayscale(10%);
        }
        .prod-card-wrap:hover .product-img-box img { 
          transform: scale(1.08); 
          filter: grayscale(0%); 
        }
        
        /* Shine beam effect */
        .product-img-box::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-25deg); transition: 0.8s; z-index: 1;
        }
        .prod-card-wrap:hover .product-img-box::before { left: 125%; }

        /* Label slide up */
        .quick-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: white; color: black; font-size: 10px; font-weight: 600;
          letter-spacing: 0.2em; text-align: center; padding: 14px 0;
          opacity: 0; transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); z-index: 2;
        }
        .prod-card-wrap:hover .quick-label { opacity: 1; transform: translateY(0); }

        /* Product name underline animation */
        .prod-name { position: relative; display: inline-block; }
        .prod-name::after {
          content: ''; position: absolute; width: 0; height: 1px;
          bottom: -2px; left: 0; background-color: #c8a96e; /* Golden Underline for BestSellers */
          transition: width 0.4s ease;
        }
        .prod-card-wrap:hover .prod-name::after { width: 100%; }

        /* Header Animation */
        .best-header { 
          opacity: 0; transform: scale(0.95); transition: all 1.2s ease; 
        }
        .best-header.show { opacity: 1; transform: scale(1); }
      `}</style>

      {/* Header Section */}
      <div className={`text-center py-8 best-header ${mounted ? 'show' : ''}`}>
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

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <div
            key={item._id}
            className={`best-card prod-card-wrap ${mounted ? "show" : ""}`}
            style={{ transitionDelay: `${index * 150}ms` }} // Thoda slow delay for "Focus"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
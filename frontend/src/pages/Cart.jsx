import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title Section */}
      <div className="flex justify-center md:justify-start text-3xl font-semibold mb-8">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

    
      <div className="flex flex-col gap-4">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm border border-gray-100 rounded-xl p-3 md:p-4 transition-all hover:shadow-md"
            >
            
              <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Image ka size chota kiya yaha */}
                <img
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-sm border border-gray-50"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div className="flex flex-col">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1">
                    {productData.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-gray-900">
                      {currency}{productData.price}
                    </span>
                    <span className="px-3 py-0.5 bg-gray-100 text-xs font-semibold tracking-wide text-gray-600 rounded-full">
                      Size: {item.size}
                    </span>
                  </div>
                </div>
              </div>

          
              <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0 px-2 md:px-0">
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                    className="w-14 px-1 py-1 md:py-1.5 text-center bg-transparent focus:outline-none font-medium text-gray-700 text-sm"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>
                
                <button 
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="p-2 hover:bg-red-50 rounded-full transition-colors group"
                >
                  <img
                    className="w-4 md:w-5 cursor-pointer opacity-60 group-hover:opacity-100 transition-opacity"
                    src={assets.bin_icon}
                    alt="Remove"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center md:justify-end">
        <div className="w-full md:w-1/2 lg:w-[400px] bg-slate-50 p-6 rounded-xl shadow-inner border border-gray-200">
          <CartTotal />
          <button
            onClick={() => navigate("/place-order")}
            className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-medium text-sm tracking-widest py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
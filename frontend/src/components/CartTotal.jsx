import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full max-w-md ml-auto bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
      {/* Title section with a different alignment */}
      <div className="mb-6 border-b pb-3">
        <Title text1={"ORDER"} text2={"SUMMARY"} />
      </div>

      <div className="space-y-4">
        {/* Subtotal Row */}
        <div className="flex items-center justify-between text-gray-600">
          <span className="text-base font-medium">Items Subtotal</span>
          <span className="font-semibold tracking-tight">
            {currency} {subtotal.toLocaleString()}.00
          </span>
        </div>

        {/* Shipping Row */}
        <div className="flex items-center justify-between text-gray-600 pb-2">
          <span className="text-base font-medium">Estimated Shipping</span>
          <span className="font-semibold">
            {currency} {delivery_fee.toLocaleString()}.00
          </span>
        </div>

        {/* Final Total Box */}
        <div className="pt-4 border-t-2 border-dashed border-gray-200">
          <div className="flex items-center justify-between text-lg">
            <span className="font-bold text-gray-800">Grand Total</span>
            <span className="text-xl font-extrabold text-black">
              {currency} {total.toLocaleString()}.00
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider italic text-right">
            Taxes included where applicable
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
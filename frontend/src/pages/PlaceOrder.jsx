import { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(
            backendUrl + "/api/order/verifyRazorpay",
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/orders");
            setCartItems({});
          }
        } catch (error) {
          console.log(error);
          toast.error(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        case "razorpay":
          const responseRazorpay = await axios.post(
            backendUrl + "/api/order/razorpay",
            orderData,
            { headers: { token } }
          );
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 pt-8 sm:pt-16 pb-24 min-h-[80vh]"
    >
      {/* Left Side: Delivery Information */}
      <div className="flex-1 w-full lg:max-w-[600px] bg-white p-6 sm:p-8 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
        <div className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
          <Title text1={"DELIVERY"} text2={"DETAILS"} />
        </div>

        <div className="flex flex-col gap-5">
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              required
              onChange={onChangeHandler}
              name="firstName"
              value={formData.firstName}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              onChange={onChangeHandler}
              name="lastName"
              value={formData.lastName}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
            type="email"
            placeholder="Email Address"
          />

          <input
            required
            onChange={onChangeHandler}
            name="street"
            value={formData.street}
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
            type="text"
            placeholder="Street Address"
          />

          {/* City & State Row */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              required
              onChange={onChangeHandler}
              name="city"
              value={formData.city}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="text"
              placeholder="City"
            />
            <input
              onChange={onChangeHandler}
              name="state"
              value={formData.state}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="text"
              placeholder="State / Province"
            />
          </div>

          {/* Zipcode & Country Row */}
          <div className="flex flex-col sm:flex-row gap-5">
            <input
              required
              onChange={onChangeHandler}
              name="zipcode"
              value={formData.zipcode}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="number"
              placeholder="Postal / Zip Code"
            />
            <input
              required
              onChange={onChangeHandler}
              name="country"
              value={formData.country}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            required
            onChange={onChangeHandler}
            name="phone"
            value={formData.phone}
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all placeholder-gray-400"
            type="number"
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* Right Side: Cart Summary & Payment */}
      <div className="w-full lg:w-[450px] flex flex-col gap-8">
        {/* Cart Total Box */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-200">
          <CartTotal />
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="text-xl sm:text-2xl mb-6">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
          </div>

          <div className="flex flex-col gap-4">
            {/* Stripe Card */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                method === "stripe"
                  ? "border-black bg-gray-50 shadow-sm"
                  : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    method === "stripe" ? "border-black" : "border-gray-300"
                  }`}
                >
                  {method === "stripe" && (
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  )}
                </div>
                <img
                  className="h-6 object-contain"
                  src={assets.stripe_logo}
                  alt="Stripe"
                />
              </div>
            </div>

            {/* Razorpay Card (Commented out but styled just in case you need it later) */}
            {/* <div
              onClick={() => setMethod("razorpay")}
              className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                method === "razorpay"
                  ? "border-black bg-gray-50 shadow-sm"
                  : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === "razorpay" ? "border-black" : "border-gray-300"}`}>
                  {method === "razorpay" && <div className="w-2.5 h-2.5 bg-black rounded-full"></div>}
                </div>
                <img className="h-6 object-contain" src={assets.razorpay_logo} alt="Razorpay" />
              </div>
            </div> */}

            {/* Cash On Delivery Card */}
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                method === "cod"
                  ? "border-black bg-gray-50 shadow-sm"
                  : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    method === "cod" ? "border-black" : "border-gray-300"
                  }`}
                >
                  {method === "cod" && (
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  )}
                </div>
                <span
                  className={`font-semibold tracking-wide ${
                    method === "cod" ? "text-black" : "text-gray-500"
                  }`}
                >
                  CASH ON DELIVERY
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 bg-black hover:bg-gray-800 text-white font-bold text-sm tracking-widest py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            CONFIRM & PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
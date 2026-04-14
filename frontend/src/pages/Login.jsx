import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPasword] = useState(""); 
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-md w-full bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
        
   
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {currentState === "Login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-sm text-gray-500">
            {currentState === "Login" 
              ? "Please enter your details to sign in." 
              : "Sign up to get started with our store."}
          </p>
        </div>

      
        <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8">
          <button
            type="button"
            onClick={() => setCurrentState("Login")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              currentState === "Login"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setCurrentState("Sign Up")}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              currentState === "Sign Up"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>

    
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
          {currentState === "Sign Up" && (
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-300 placeholder-gray-400"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-300 placeholder-gray-400"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <input
              onChange={(e) => setPasword(e.target.value)}
              value={password}
              type="password"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all duration-300 placeholder-gray-400"
              placeholder="Password"
              required
            />
          </div>

          {currentState === "Login" && (
            <div className="flex justify-end mt-[-8px]">
              <p className="text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">
                Forgot password?
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl mt-2 active:scale-[0.98]"
          >
            {currentState === "Login" ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
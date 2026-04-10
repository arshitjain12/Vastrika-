import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#414141] text-white text-center text-[11px] tracking-[0.2em] py-2 font-light">
        FREE SHIPPING ON ORDERS ABOVE ₹999 &nbsp;|&nbsp; USE CODE: VASTRIKA10
      </div>

      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-12 font-medium relative">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={assets.vastrika} className="w-32 sm:w-36" alt="Vastrika" />
          </Link>

          {/* Center Nav Links */}
          <ul className="hidden sm:flex gap-8 text-[12px] tracking-[0.15em] text-gray-600">
            {[
              { to: "/", label: "HOME" },
              { to: "/collection", label: "COLLECTION" },
              { to: "/about", label: "ABOUT" },
              { to: "/contact", label: "CONTACT" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative group flex flex-col items-center gap-1 transition-colors duration-200 ${
                    isActive ? "text-[#c8a96e]" : "hover:text-[#414141]"
                  }`
                }
              >
                <p>{label}</p>
                <span className="absolute -bottom-1 left-0 h-[1.5px] bg-[#c8a96e] w-0 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <button
              onClick={() => { setShowSearch(true); navigate("/collection"); }}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <img src={assets.search_icon} className="w-4" alt="Search" />
            </button>

            {/* Profile */}
            <div className="group relative">
              <button
                onClick={() => (token ? null : navigate("/login"))}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <img className="w-4" src={assets.profile_icon} alt="Profile" />
              </button>

              {token && (
                <div className="group-hover:block hidden absolute right-0 top-full pt-3 z-50 min-w-[160px]">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-lg py-2 overflow-hidden">
                    <div className="px-4 py-2 border-b border-gray-100 mb-1">
                      <p className="text-[10px] tracking-widest text-gray-400 uppercase">My Account</p>
                    </div>
                    {[
                      { label: "My Profile", action: () => {} },
                      { label: "My Orders", action: () => navigate("/orders") },
                      { label: "Logout", action: logout },
                    ].map(({ label, action }) => (
                      <p
                        key={label}
                        onClick={action}
                        className="px-4 py-2 text-sm text-gray-600 hover:bg-[#fdfaf7] hover:text-[#c8a96e] cursor-pointer transition-colors duration-150 tracking-wide"
                      >
                        {label}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200">
              <img src={assets.cart_icon} className="w-4" alt="Cart" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-center leading-4 bg-[#c8a96e] text-white rounded-full text-[8px] font-bold">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setVisible(true)}
              className="w-8 h-8 flex items-center justify-center sm:hidden"
            >
              <img src={assets.menu_icon} className="w-5" alt="Menu" />
            </button>
          </div>
        </div>

        {/* Gold underline */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent mt-3 opacity-40" />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          visible ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setVisible(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            visible ? "opacity-40" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src={assets.vastrika} className="w-28" alt="Vastrika" />
              <button
                onClick={() => setVisible(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
              >
                <span className="text-gray-600 text-lg leading-none">×</span>
              </button>
            </div>

            {/* Drawer Nav */}
            <nav className="flex flex-col px-6 py-6 gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/collection", label: "Collection" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  onClick={() => setVisible(false)}
                  to={to}
                  className={({ isActive }) =>
                    `py-3 px-3 text-sm tracking-widest border-b border-gray-50 transition-colors duration-200 ${
                      isActive
                        ? "text-[#c8a96e] font-semibold"
                        : "text-gray-600 hover:text-[#c8a96e]"
                    }`
                  }
                >
                  {label.toUpperCase()}
                </NavLink>
              ))}
            </nav>

            {/* Bottom */}
            <div className="mt-auto px-6 py-6 border-t border-gray-100">
              <p className="text-[10px] tracking-widest text-gray-400 text-center">
                VASTRIKA.IN — WEAR THE TRADITION
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
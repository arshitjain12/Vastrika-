import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const CATEGORIES = ["Men", "Women", "Kids"];
const SUB_CATEGORIES = ["Topwear", "Bottomwear", "Winterwear"];
const SORT_OPTIONS = [
  { value: "relavent", label: "Normal" },
  { value: "low-high", label: "Price ↑" },
  { value: "high-low", label: "Price ↓" },
];

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const toggleCategory = (val) =>
    setCategory((prev) => prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]);

  const toggleSubCategory = (val) =>
    setSubCategory((prev) => prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]);

  const applyFilter = () => {
    let copy = products.slice();
    if (showSearch && search)
      copy = copy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    if (category.length > 0)
      copy = copy.filter((item) => category.includes(item.category));
    if (subCategory.length > 0)
      copy = copy.filter((item) => subCategory.includes(item.subCategory));
    setFilterProducts(copy);
  };

  const sortProduct = () => {
    let copy = filterProducts.slice();
    if (sortType === "low-high") setFilterProducts(copy.sort((a, b) => a.price - b.price));
    else if (sortType === "high-low") setFilterProducts(copy.sort((a, b) => b.price - a.price));
    else applyFilter();
  };

  useEffect(() => { applyFilter(); }, [category, subCategory, search, showSearch, products]);
  useEffect(() => { sortProduct(); }, [sortType]);

  const activeCount = category.length + subCategory.length;
  const clearAll = () => { setCategory([]); setSubCategory([]); };

  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
  
  .coll-root { font-family: 'DM Sans', sans-serif; }

  /* ─── HOVER CARD CORE ─── */
  .prod-card-wrap { cursor: pointer; position: relative; overflow: hidden; }

  /* 1. Image: Soft Zoom + Grayscale to Color */
  .product-img-box { position: relative; overflow: hidden; background: #f9f9f9; }
  
  .product-img-box img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    filter: grayscale(25%);
    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), filter 0.5s ease;
  }

  .prod-card-wrap:hover .product-img-box img {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  /* 2. Shine Effect: Luxury touch on hover */
  .product-img-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
    transform: skewX(-25deg);
    transition: 0.7s;
    z-index: 1;
  }
  .prod-card-wrap:hover .product-img-box::before {
    left: 125%;
  }

  /* 3. Dark Overlay: Depth add karne ke liye */
  .product-img-box::after {
    content: ''; position: absolute; inset: 0;
    background: rgba(0,0,0,0);
    transition: background 0.4s ease;
    pointer-events: none;
  }
  .prod-card-wrap:hover .product-img-box::after {
    background: rgba(0,0,0,0.05);
  }

  /* 4. Quick View Label: White Premium Look */
  .quick-label {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: white; color: black;
    font-size: 10px; font-weight: 600; letter-spacing: 0.2em; text-align: center;
    padding: 14px 0; opacity: 0; transform: translateY(10px);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 2; text-transform: uppercase;
    box-shadow: 0 -5px 15px rgba(0,0,0,0.05);
  }
  .prod-card-wrap:hover .quick-label {
    opacity: 1; transform: translateY(0);
  }

  /* 5. Product Name: Underline Animation */
  .prod-name {
    font-size: 13px; color: #222; margin-top: 10px;
    font-weight: 400; position: relative; display: inline-block;
    transition: color 0.3s ease;
  }
  .prod-name::after {
    content: ''; position: absolute; width: 0; height: 1px;
    bottom: -2px; left: 0; background-color: black;
    transition: width 0.4s ease;
  }
  .prod-card-wrap:hover .prod-name::after {
    width: 100%;
  }
  .prod-price { font-size: 13px; color: #888; margin-top: 4px; }

  /* ─── ENTRANCE ANIMATION: Floating Entry ─── */
  .prod-card { 
    opacity: 0; 
    transform: translateY(30px) scale(0.98);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 1, 0.3, 1); 
  }
  .prod-card.show { opacity: 1; transform: translateY(0) scale(1); }

  /* ─── FILTER & BUTTON STYLES (Existing) ─── */
  .filter-chip {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 16px; border-radius: 999px; font-size: 13px;
    cursor: pointer; border: 1px solid #d1d1d1;
    background: #fff; color: #555; transition: all 0.22s ease;
  }
  .filter-chip.active { background: #111; color: #fff; border-color: #111; }
  
  .sort-pill {
    padding: 5px 14px; border-radius: 999px; font-size: 12px;
    cursor: pointer; border: 1px solid #d1d1d1;
    background: #fff; color: #888; transition: all 0.18s ease;
  }
  .sort-pill.active { background: #111; color: #fff; border-color: #111; }

  .filter-panel {
    overflow: hidden; max-height: 0;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    opacity: 0;
  }
  .filter-panel.open { max-height: 400px; opacity: 1; }
  
  .f-badge {
    display: inline-flex; align-items: center; justify-content: center;
    width: 18px; height: 18px; border-radius: 50%;
    background: #fff; color: #111; font-size: 10px; margin-left: 4px;
  }
  .divider { height: 1px; background: #efefef; margin: 16px 0; }
`}</style>

      <div className="coll-root pt-10 border-t">

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1 }}>
              All Collections
            </h1>
            <p style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>
              {filterProducts.length} items
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-end">
            <span style={{ fontSize: "12px", color: "#aaa", marginRight: "4px" }}>Sort</span>
            {SORT_OPTIONS.map((opt) => (
              <button key={opt.value}
                className={`sort-pill ${sortType === opt.value ? "active" : ""}`}
                onClick={() => setSortType(opt.value)}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{ marginBottom: "24px" }}>
          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={() => setFilterOpen((p) => !p)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 16px", borderRadius: "999px", fontSize: "13px",
                border: `1px solid ${filterOpen ? "#111" : "#d1d1d1"}`,
                background: filterOpen ? "#111" : "#fff",
                color: filterOpen ? "#fff" : "#555",
                cursor: "pointer", transition: "all 0.2s",
              }}>
              <span style={{ fontSize: "12px" }}>⊞</span>
              Filters
              {activeCount > 0 && <span className="f-badge">{activeCount}</span>}
            </button>
            {category.map((c) => (
              <button key={c} className="filter-chip active" onClick={() => toggleCategory(c)}>{c}</button>
            ))}
            {subCategory.map((s) => (
              <button key={s} className="filter-chip active" onClick={() => toggleSubCategory(s)}>{s}</button>
            ))}
            {activeCount > 0 && (
              <button onClick={clearAll} style={{ fontSize: "12px", color: "#999", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>
                Clear all
              </button>
            )}
          </div>
          <div className={`filter-panel ${filterOpen ? "open" : ""}`}>
            <div style={{ paddingTop: "20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
              <div>
                <p className="section-label">Category</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((c) => (
                    <button key={c} className={`filter-chip ${category.includes(c) ? "active" : ""}`} onClick={() => toggleCategory(c)}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <p className="section-label">Type</p>
                <div className="flex flex-wrap gap-2">
                  {SUB_CATEGORIES.map((s) => (
                    <button key={s} className={`filter-chip ${subCategory.includes(s) ? "active" : ""}`} onClick={() => toggleSubCategory(s)}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="divider" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
          {filterProducts.map((item, index) => (
            <div
              key={item._id}
              className={`prod-card prod-card-wrap ${mounted ? "show" : ""}`}
              style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
            >
              <ProductItem
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>

        {filterProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#bbb" }}>
            <p style={{ fontSize: "14px" }}>No products match your filters.</p>
            <button onClick={clearAll} style={{ marginTop: "12px", fontSize: "13px", color: "#888", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;

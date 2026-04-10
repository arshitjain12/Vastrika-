import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [assets.herologo, assets.hero2, assets.hero3, assets.hero4];

  const slides = [
    {
      tag: "NEW ARRIVAL",
      title: "Latest Collection",
      sub: "Elegance redefined for every occasion",
    },
    {
      tag: "TRENDING NOW",
      title: "Summer Kurtas",
      sub: "Light fabrics, bold colors",
    },
    {
      tag: "BEST PRICE",
      title: "Festive Specials",
      sub: "Celebrate in style this season",
    },
    {
      tag: "EXCLUSIVE",
      title: "Bridal Wear",
      sub: "Your perfect day, our finest craft",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(i);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => goTo((current - 1 + images.length) % images.length);
  const nextSlide = () => goTo((current + 1) % images.length);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      
      {/* Left Text Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#fdfaf7]">
        <div
          className={`text-[#414141] px-8 transition-all duration-300 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Tag */}
          <div className="flex items-center gap-2 mb-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#c8a96e]"></p>
            <p className="font-semibold text-xs md:text-sm tracking-widest text-[#c8a96e]">
              {slides[current].tag}
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="prata-regular text-3xl sm:py-2 lg:text-5xl leading-tight">
            {slides[current].title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-gray-500 mt-2 mb-6 italic">
            {slides[current].sub}
          </p>

       

       
        </div>
      </div>

      {/* Right Image Slider */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        
        {/* Height anchor */}
        <img src={assets.herologo} alt="" className="w-full invisible block" />

        {/* Slides */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`hero-${i}`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-60 hover:bg-opacity-90 text-black px-3 py-2 rounded-full text-xl font-bold shadow"
        >
          &#8249;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-60 hover:bg-opacity-90 text-black px-3 py-2 rounded-full text-xl font-bold shadow"
        >
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-[#414141] w-4" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
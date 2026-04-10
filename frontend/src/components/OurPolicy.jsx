import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
  <div className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-2 text-center py-16 px-4 bg-[#fdfaf7]">
  
  <div className="group flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
      <img src={assets.exchange_icon} className="w-8" alt="" />
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span className="h-px w-4 bg-[#c8a96e]"></span>
      <p className="font-semibold text-[#414141] text-sm tracking-wide">Easy Exchange Policy</p>
      <span className="h-px w-4 bg-[#c8a96e]"></span>
    </div>
    <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">We offer hassle free exchange policy</p>
  </div>

  {/* Divider */}
  <div className="hidden sm:block w-px bg-gray-200 self-stretch mx-4"></div>

  <div className="group flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
      <img src={assets.quality_icon} className="w-8" alt="" />
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span className="h-px w-4 bg-[#c8a96e]"></span>
      <p className="font-semibold text-[#414141] text-sm tracking-wide">7 Days Return Policy</p>
      <span className="h-px w-4 bg-[#c8a96e]"></span>
    </div>
    <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">We provide 7 days free return policy</p>
  </div>

  {/* Divider */}
  <div className="hidden sm:block w-px bg-gray-200 self-stretch mx-4"></div>

  <div className="group flex flex-col items-center">
    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
      <img src={assets.support_img} className="w-8" alt="" />
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span className="h-px w-4 bg-[#c8a96e]"></span>
      <p className="font-semibold text-[#414141] text-sm tracking-wide">Best Customer Support</p>
      <span className="h-px w-4 bg-[#c8a96e]"></span>
    </div>
    <p className="text-gray-400 text-xs leading-relaxed max-w-[160px]">We provide 24/7 customer support</p>
  </div>

</div>
  );
};

export default OurPolicy;

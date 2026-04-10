const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
 <div className="relative overflow-hidden bg-[#414141] text-white text-center py-16 px-6 my-10">

  {/* Decorative BG text */}
  <p className="absolute inset-0 flex items-center justify-center text-[70px] sm:text-[100px] font-bold text-white opacity-5 select-none pointer-events-none tracking-widest uppercase">
    VASTRIKA
  </p>

  <div className="relative z-10">
    {/* Tag */}
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-10 bg-[#c8a96e]"></span>
      <span className="text-[10px] tracking-[0.25em] text-[#c8a96e] font-semibold">EXCLUSIVE MEMBERS</span>
      <span className="h-px w-10 bg-[#c8a96e]"></span>
    </div>

    <p className="text-2xl sm:text-3xl font-light tracking-wide mb-2">
      Join our family &amp; get <span className="text-[#c8a96e] font-semibold">30% off</span>
    </p>
    <p className="text-gray-400 text-xs sm:text-sm mt-2 mb-8 leading-relaxed max-w-md mx-auto">
      Become a member of Vastrika and unlock exclusive offers, early access to
      sales, and special rewards.
    </p>

    <form
      onSubmit={onSubmitHandler}
      className="w-full sm:w-[500px] mx-auto flex items-center border border-gray-500 hover:border-[#c8a96e] transition-colors duration-300 bg-white/5 backdrop-blur-sm"
    >
      <input
        className="w-full flex-1 outline-none bg-transparent px-5 py-4 text-white placeholder-gray-400 text-sm"
        type="email"
        placeholder="Enter your email address"
        required
      />
      <button
        type="submit"
        className="bg-[#c8a96e] hover:bg-white hover:text-[#414141] text-white text-[11px] tracking-[0.2em] px-8 py-4 transition-all duration-300 whitespace-nowrap"
      >
        SUBSCRIBE
      </button>
    </form>


  </div>
</div>
  );
};

export default NewsletterBox;

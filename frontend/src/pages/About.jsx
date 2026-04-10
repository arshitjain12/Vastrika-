import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="overflow-hidden">

      {/* ── PAGE HEADER ── */}
      <div className="relative text-center pt-16 pb-6 border-t border-amber-100">
        {/* decorative top line */}
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-amber-400 opacity-50"
        />
        <p
          className="text-xs tracking-[0.25em] uppercase text-amber-600 mb-3 font-medium"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          Our Story
        </p>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* ── HERO ABOUT SECTION ── */}
      <div className="relative my-16 flex flex-col md:flex-row gap-0 items-stretch">

        {/* Image side */}
        <div className="relative md:w-5/12 overflow-hidden">
          {/* gold overlay tint */}
          <div className="absolute inset-0 bg-amber-900 opacity-10 z-10 pointer-events-none" />

          {/* Indian‑inspired geometric corner motif */}
          <svg
            className="absolute top-4 left-4 z-20 opacity-25"
            width="80" height="80" viewBox="0 0 80 80"
            fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="20" y="20" width="40" height="40" stroke="#D97706" strokeWidth="1"
              transform="rotate(45 40 40)" />
            <rect x="28" y="28" width="24" height="24" stroke="#D97706" strokeWidth="0.5"
              transform="rotate(45 40 40)" />
            <circle cx="40" cy="40" r="4" fill="#D97706" />
          </svg>

          <img
            className="w-full h-full object-cover"
            style={{ minHeight: "480px", filter: "saturate(1.1) contrast(1.05)" }}
            src={assets.admin}
            alt="Vastrika founder"
          />

          {/* bottom caption ribbon */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 px-6 py-4"
            style={{ background: "linear-gradient(to top, rgba(28,18,8,0.75) 0%, transparent 100%)" }}
          >
            <p className="text-amber-300 text-xs tracking-widest uppercase font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}>
              Est. — Vastrika India
            </p>
          </div>
        </div>

        {/* Text side */}
        <div
          className="relative md:w-7/12 flex flex-col justify-center gap-7 px-10 md:px-16 py-14"
          style={{ background: "#FAF6F0" }}
        >
          {/* large faded background word */}
          <span
            className="absolute top-6 right-6 text-7xl font-bold select-none pointer-events-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "rgba(217,119,6,0.06)",
              lineHeight: 1
            }}
          >
            वस्त्रिका
          </span>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-stone-800"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Heritage &amp; <em className="text-amber-600 not-italic">Craft,</em><br />
            Woven Into<br />Every Thread
          </h2>

          {/* ornament divider */}
          <div className="flex items-center gap-4">
            <span className="flex-1 h-px bg-amber-400 opacity-30" />
            <span
              className="w-2 h-2 bg-amber-500 opacity-60"
              style={{ transform: "rotate(45deg)" }}
            />
            <span className="flex-1 h-px bg-amber-400 opacity-30" />
          </div>

          <p
            className="text-stone-500 leading-relaxed text-[15px]"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            Vastrika is a modern fashion brand inspired by the rich heritage of India.
            Our goal is to blend traditional craftsmanship with contemporary designs to
            create clothing and accessories that are both stylish and meaningful. At
            Vastrika, we believe fashion is more than just clothing — it's a way to
            express individuality, culture, and confidence.
          </p>

          <p
            className="text-stone-500 leading-relaxed text-[15px]"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            From carefully curated collections to attention to detail in every stitch,
            Vastrika strives to bring high-quality, sustainable, and vibrant fashion to
            our customers — keeping the spirit of Indian artistry alive in the modern world.
          </p>

          {/* Founder quote card */}
          <div
            className="border-l-2 border-amber-500 pl-5 mt-2"
            style={{ borderLeftColor: "#D97706" }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase text-amber-600 mb-2 font-medium"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Co-Founder of Vastrika
            </p>
            <p
              className="text-stone-700 text-lg leading-relaxed italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Vastrika is a celebration of Indian culture blended with modern fashion —
              empowering individuals to express their unique style while honoring the rich
              heritage of India."
            </p>
          </div>
        </div>
      </div>

      {/* ── WHY TRUST US ── */}
      <div
        className="relative py-20 px-6 md:px-16 overflow-hidden"
        style={{ background: "#1C1208" }}
      >
        {/* decorative circle behind */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-5"
          style={{ border: "80px solid #E8A838" }}
        />

        {/* Section label */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.25em] uppercase text-amber-400 mb-3 font-medium"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Why Choose Us
          </p>
          <div className="text-3xl md:text-4xl font-light text-stone-100"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <Title text1={"WHY"} text2={"TRUST US"} />
          </div>
        </div>

        {/* Trust Cards */}
        <div className="flex flex-col md:flex-row gap-px border border-amber-900 border-opacity-40">
          {[
            {
              num: "01",
              title: "Quality Assurance",
              desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards — every fabric, every finish.",
            },
            {
              num: "02",
              title: "Convenience",
              desc: "With our thoughtfully designed interface and hassle-free ordering process, discovering your next favourite piece is effortless.",
            },
            {
              num: "03",
              title: "Exceptional Service",
              desc: "Our dedicated team is here to assist you every step of the way, ensuring your satisfaction remains our highest priority.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group flex-1 flex flex-col gap-4 px-10 py-12 border-r border-amber-900 border-opacity-30 last:border-r-0 transition-colors duration-300"
              style={{ cursor: "default" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(232,168,56,0.05)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <span
                className="text-5xl font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: "rgba(232,168,56,0.18)"
                }}
              >
                {card.num}
              </span>
              <p
                className="text-xs tracking-[0.18em] uppercase text-amber-400 font-medium"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                {card.title}
              </p>
              <p
                className="text-stone-400 text-sm leading-relaxed"
                style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <div className="relative pt-1">
        {/* top center gold line */}
        <span className="block mx-auto w-px h-12 bg-amber-400 opacity-30" />
        <NewsletterBox />
      </div>

    </div>
  );
};

export default About;

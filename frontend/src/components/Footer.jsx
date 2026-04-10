import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div>

      

      {/* ── FOOTER ── */}
      <footer className="bg-[#1a0f0a] text-[#e8ddd4]">
        {/* Gold shimmer line */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />

        <div className="grid grid-cols-1 sm:grid-cols-[2.2fr_1fr_1fr] gap-12 px-12 py-14">

          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[2.4rem] font-semibold text-[#c9a96e] uppercase tracking-[0.15em] leading-none">
              Vastrika
            </h3>
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#7a6045] mt-1 mb-5">
              Indian Fashion &amp; Style
            </p>
            <p className="text-sm text-[#9e8e80] font-light leading-relaxed max-w-xs">
              Celebrating Indian trends with a modern touch — from timeless ethnic wear to contemporary western styles. Carefully curated for every occasion.
            </p>
            <div className="w-7 h-px bg-[#c9a96e] opacity-50 my-6" />
            {/* Social Icons */}
            <div className="flex gap-2">
              {[
                { href: "https://www.instagram.com/Arshitjain_", icon: "instagram" },
                { href: "mailto:Arshitjain7@gmail.com", icon: "email" },
                { href: "tel:8871807465", icon: "phone" },
              ].map(({ href, icon }) => (
                <a key={icon} href={href} target={icon === "instagram" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#3a2515] flex items-center justify-center text-[#7a6045] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all">
                  {icon === "instagram" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
                  {icon === "email" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,14 22,4"/></svg>}
                  {icon === "phone" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.29 5.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[11px] tracking-[0.28em] uppercase text-[#c9a96e] mb-5 pb-3 border-b border-[#2e1f12]">
              Company
            </p>
            <ul className="flex flex-col gap-4">
              {["Home", "About us", "Delivery", "Privacy policy"].map((item) => (
                <li key={item} className="text-sm text-[#9e8e80] font-light hover:text-[#d4c4a8] cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-[11px] tracking-[0.28em] uppercase text-[#c9a96e] mb-5 pb-3 border-b border-[#2e1f12]">
              Get in touch
            </p>
            <ul className="flex flex-col gap-4 text-sm text-[#9e8e80] font-light">
              <li>+91 88718 07465</li>
              <li><a href="mailto:Arshitjain7@gmail.com" className="hover:text-[#d4c4a8] transition-colors">Arshitjain7@gmail.com</a></li>
              <li><a href="https://www.instagram.com/Arshitjain_" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4c4a8] transition-colors">@Arshitjain_</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#251510] px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[#4a3520] tracking-wide">
            © 2026 <span className="text-[#6a5030]">Vastrika</span> — All rights reserved.
          </p>
          <p className="text-[10px] text-[#3a2515] uppercase tracking-[0.18em]">
            Made with love in India
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
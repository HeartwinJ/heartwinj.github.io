import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "../components/socialLinks";

gsap.registerPlugin(ScrollTrigger);

function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative px-6 py-12"
      style={{ background: "#050510" }}
    >
      {/* Gradient divider line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #00d4ff, #7928ca, #ff0080, transparent)",
        }}
      />

      <div ref={contentRef} className="max-w-6xl mx-auto text-center">
        <h2
          className="text-xl font-bold mb-2"
          style={{ color: "#f0f0f0" }}
        >
          Heartwin Haveluck
        </h2>

        <p
          className="text-sm mb-8"
          style={{ color: "#a0a0b0" }}
        >
          Building elegant solutions with code.
        </p>

        <div className="flex justify-center gap-5 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-11 h-11 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#a0a0b0",
              }}
              whileHover={{
                scale: 1.2,
                color: "#00d4ff",
                boxShadow: "0 0 16px rgba(0,212,255,0.3)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <link.icon size={20} weight="duotone" />
            </motion.a>
          ))}
        </div>

        <p
          className="text-xs"
          style={{ color: "#a0a0b0" }}
        >
          &copy; 2026 Heartwin Haveluck. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;

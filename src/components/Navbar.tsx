import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as Element[];

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9998] w-[calc(100%-2rem)] max-w-5xl"
        >
          <div
            className="rounded-2xl px-6 py-3 flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="font-bold text-lg tracking-tight"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              HH
            </span>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{
                    color:
                      activeSection === link.href ? "#00d4ff" : "#a0a0b0",
                  }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px]"
                      style={{
                        background:
                          "linear-gradient(90deg, #00d4ff, #7928ca)",
                      }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-[#f0f0f0]"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden mt-2 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex flex-col py-2">
                  {NAV_LINKS.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="px-6 py-3 text-left text-sm font-medium transition-colors duration-200"
                      style={{
                        color:
                          activeSection === link.href
                            ? "#00d4ff"
                            : "#a0a0b0",
                      }}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CaretDownIcon } from "@phosphor-icons/react";

const LazyCanvas = lazy(() =>
  import("@react-three/fiber").then((m) => ({ default: m.Canvas }))
);
const LazyHeroScene = lazy(() => import("./HeroScene"));

const GITHUB_AVATAR = "https://github.com/HeartwinJ.png";

const firstNameChars = "Heartwin".split("");
const lastNameChars = "Haveluck".split("");

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-screen relative overflow-hidden"
      style={{ background: "#0a0a1a" }}
    >
      {/* 3D Canvas background — lazy-loaded, paused when off-screen */}
      <div className="absolute inset-0">
        {visible && (
          <Suspense fallback={null}>
            <LazyCanvas
              dpr={[1, 1.5]}
              frameloop="always"
              camera={{ position: [0, 0, 10], fov: 60 }}
              gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
            >
              <LazyHeroScene />
            </LazyCanvas>
          </Suspense>
        )}
      </div>

      {/* Overlaid content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <div
              className="relative rounded-full"
              style={{
                padding: "3px",
                background:
                  "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
              }}
            >
              <div
                className="rounded-full overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 40px rgba(0, 212, 255, 0.2), 0 0 80px rgba(121, 40, 202, 0.15)",
                }}
              >
                <img
                  src={GITHUB_AVATAR}
                  alt="Heartwin Haveluck"
                  className="w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover"
                  style={{ background: "#0a0a1a" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl font-light tracking-wide"
              style={{
                color: "#a0a0b0",
                textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
              }}
            >
              Hey there, I'm
            </motion.p>

            {/* Name — first + last on two lines */}
            <div className="flex flex-col items-center md:items-start gap-0">
              <div className="flex flex-wrap justify-center md:justify-start">
                {firstNameChars.map((char, i) => (
                  <motion.span
                    key={`f-${i}`}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-bold text-4xl md:text-6xl lg:text-7xl"
                    style={{
                      color: "#f0f0f0",
                      textShadow:
                        "0 0 30px rgba(0, 212, 255, 0.15), 0 0 60px rgba(121, 40, 202, 0.1)",
                      display: "inline-block",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start">
                {lastNameChars.map((char, i) => (
                  <motion.span
                    key={`l-${i}`}
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + (firstNameChars.length + i) * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-bold text-4xl md:text-6xl lg:text-7xl"
                    style={{
                      color: "#f0f0f0",
                      textShadow:
                        "0 0 30px rgba(0, 212, 255, 0.15), 0 0 60px rgba(121, 40, 202, 0.1)",
                      display: "inline-block",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Intro blurb */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-lg text-center md:text-left"
              style={{
                color: "#a0a0b0",
                textShadow: "0 0 10px rgba(0, 212, 255, 0.1)",
              }}
            >
              I build elegant web &amp; mobile experiences, craft scalable
              backends, and explore the frontier of AI — turning ideas into
              products that make a difference.
            </motion.p>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ color: "#a0a0b0" }}
          >
            <CaretDownIcon size={32} weight="light" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

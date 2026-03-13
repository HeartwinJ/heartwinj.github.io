import { Canvas } from "@react-three/fiber";
import { motion, LayoutGroup } from "framer-motion";
import { CaretDownIcon } from "@phosphor-icons/react";
import HeroScene from "./HeroScene";
import RotatingText from "../RotatingText";

const nameChars = "Heartwin Haveluck".split("");

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen w-screen relative overflow-hidden" style={{ background: "#0a0a1a" }}>
      {/* 3D Canvas background */}
      <div className="absolute inset-0">
        <Canvas
          dpr={[1, 2]}
          frameloop="always"
          camera={{ position: [0, 0, 10], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <HeroScene />
        </Canvas>
      </div>

      {/* Overlaid text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 md:gap-6">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide"
            style={{
              color: "#a0a0b0",
              textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
            }}
          >
            Hello, There!
          </motion.p>

          {/* Name with staggered character reveal */}
          <div className="flex flex-wrap justify-center">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-bold text-4xl md:text-6xl lg:text-8xl"
                style={{
                  color: "#f0f0f0",
                  textShadow:
                    "0 0 30px rgba(0, 212, 255, 0.15), 0 0 60px rgba(121, 40, 202, 0.1)",
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Rotating roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center items-center"
          >
            <LayoutGroup>
              <motion.p
                className="flex items-center gap-2 text-base md:text-lg"
                layout
                style={{ color: "#a0a0b0" }}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  I am a
                </motion.span>
                <RotatingText
                  texts={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Flutter Developer",
                    "AI Specialist",
                  ]}
                  mainClassName="flex justify-center overflow-hidden px-3 py-1 rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 font-bold"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2500}
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                />
              </motion.p>
            </LayoutGroup>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-sm md:text-base font-light tracking-widest uppercase mt-2"
            style={{
              color: "#a0a0b0",
              textShadow: "0 0 15px rgba(0, 212, 255, 0.2)",
            }}
          >
            Building elegant solutions with code.
          </motion.p>
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
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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

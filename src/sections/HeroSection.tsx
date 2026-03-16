import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CaretDownIcon } from "@phosphor-icons/react";

const GITHUB_AVATAR = "https://github.com/HeartwinJ.png";

const firstNameChars = "Heartwin".split("");
const lastNameChars = "Haveluck".split("");

/** Canvas 2D starfield — no WebGL, no context loss */
function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      alpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    const stars: Star[] = [];
    const STAR_COUNT = 700;
    const colors = ["#ffffff", "#ffffff", "#ffffff", "#d0e8ff", "#00d4ff", "#c0b0ff"];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        const z = Math.random();
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          size: 0.4 + z * 1.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.2 + z * 0.6,
          twinkleSpeed: 0.3 + Math.random() * 1.5,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    }

    resize();
    initStars();

    let time = 0;

    function draw() {
      time += 0.016;
      ctx!.clearRect(0, 0, w, h);

      for (const star of stars) {
        const twinkle =
          0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.alpha * (0.5 + 0.5 * twinkle);

        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = star.color;
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fill();

        // Very faint glow on only the brightest stars
        if (star.z > 0.85) {
          ctx!.globalAlpha = alpha * 0.08;
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }

      // Very slow drift
      for (const star of stars) {
        star.x -= 0.15 * (0.5 + star.z);
        if (star.x < -2) {
          star.x = w + 2;
          star.y = Math.random() * h;
        }
      }

      ctx!.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      initStars();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
}

/** Ambient glow orbs behind the starfield */
function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #7928ca, transparent 70%)" }}
      />
      <div
        className="absolute top-2/3 left-1/2 h-40 w-40 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #ff0080, transparent 70%)" }}
      />
    </div>
  );
}

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen w-screen relative overflow-hidden"
      style={{ background: "#0a0a1a" }}
    >
      {/* Background layers */}
      <GlowOrbs />
      <Starfield />

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

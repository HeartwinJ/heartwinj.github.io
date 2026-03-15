import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "../components/socialLinks";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          socialsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32"
      style={{ background: "#0a0a1a" }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #7928ca 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "contactOrb 12s ease-in-out infinite",
            willChange: "transform",
            contain: "layout style paint",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "contactOrb 10s ease-in-out infinite reverse",
            willChange: "transform",
            contain: "layout style paint",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #ff0080 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "contactOrb 14s ease-in-out infinite",
            willChange: "transform",
            contain: "layout style paint",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{
            background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Get In Touch
        </h2>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
          style={{ color: "#a0a0b0" }}
        >
          Have a project in mind? Let&apos;s build something amazing.
        </p>

        <div ref={ctaRef} className="mb-16">
          <motion.a
            href="mailto:heartwinhaveluck@gmail.com"
            className="relative inline-block px-10 py-4 text-lg font-semibold rounded-full"
            style={{
              color: "#f0f0f0",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(121,40,202,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Say Hello
          </motion.a>
        </div>

        <div ref={socialsRef} className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#a0a0b0",
              }}
              whileHover={{
                scale: 1.15,
                borderColor: "rgba(0,212,255,0.5)",
                color: "#00d4ff",
                boxShadow: "0 0 20px rgba(0,212,255,0.25)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <link.icon size={24} weight="duotone" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes contactOrb {
          0%, 100% { transform: translate3d(0, 0, 0); }
          33% { transform: translate3d(50px, -40px, 0); }
          66% { transform: translate3d(-40px, 30px, 0); }
        }
      `}</style>
    </section>
  );
}

export default ContactSection;

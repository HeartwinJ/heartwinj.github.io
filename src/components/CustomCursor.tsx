import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);
  const trackedElements = useRef(new WeakSet<Element>());

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(0, springConfig);
  const ringY = useSpring(0, springConfig);

  useEffect(() => {
    // Detect touch device
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    if (mediaQuery.matches) {
      isTouch.current = true;
      return;
    }

    // Hide default cursor
    document.body.style.cursor = "none";

    const onHoverStart = () => setHovering(true);
    const onHoverEnd = () => setHovering(false);

    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
      setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Track hovering over interactive elements
    const interactiveSelector = "a, button, [role='button'], input, textarea, select";
    const addHoverListeners = () => {
      const elements = document.querySelectorAll(interactiveSelector);
      elements.forEach((el) => {
        if (!trackedElements.current.has(el)) {
          trackedElements.current.add(el);
          el.addEventListener("mouseenter", onHoverStart);
          el.addEventListener("mouseleave", onHoverEnd);
        }
      });
    };

    addHoverListeners();

    // Re-apply listeners only for new elements when DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, [ringX, ringY]);

  // Don't render on touch devices
  if (isTouch.current) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00d4ff, #7928ca)",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.15s ease",
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: hovering
            ? "2px solid #ff0080"
            : "2px solid rgba(0,212,255,0.5)",
          boxShadow: hovering
            ? "0 0 20px rgba(255,0,128,0.4)"
            : "0 0 12px rgba(0,212,255,0.2)",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.5 : 1,
          transition: "border 0.2s ease, box-shadow 0.2s ease, scale 0.2s ease, opacity 0.15s ease",
        }}
      />
    </>
  );
}

export default CustomCursor;

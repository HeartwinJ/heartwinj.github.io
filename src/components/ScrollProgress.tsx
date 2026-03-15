import { useRef, useEffect } from "react";

const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && barRef.current) {
        barRef.current.style.width = `${(window.scrollY / docHeight) * 100}%`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 z-[9999] h-[3px]"
      style={{
        width: "0%",
        background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
        willChange: "width",
      }}
    />
  );
};

export default ScrollProgress;

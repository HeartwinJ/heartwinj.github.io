import { useState, useEffect } from "react";

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(135deg, #00d4ff, #7928ca, #ff0080)",
        transition: "width 0.1s linear",
      }}
    />
  );
};

export default ScrollProgress;

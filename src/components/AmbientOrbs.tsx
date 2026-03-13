function AmbientOrbs() {
  const orbs = [
    {
      size: 600,
      color: "#00d4ff",
      top: "10%",
      left: "5%",
      animationDuration: "20s",
      animationDelay: "0s",
      opacity: 0.12,
    },
    {
      size: 500,
      color: "#7928ca",
      top: "40%",
      left: "70%",
      animationDuration: "25s",
      animationDelay: "-5s",
      opacity: 0.1,
    },
    {
      size: 450,
      color: "#ff0080",
      top: "70%",
      left: "20%",
      animationDuration: "22s",
      animationDelay: "-10s",
      opacity: 0.1,
    },
    {
      size: 350,
      color: "#00d4ff",
      top: "20%",
      left: "60%",
      animationDuration: "18s",
      animationDelay: "-3s",
      opacity: 0.08,
    },
    {
      size: 400,
      color: "#7928ca",
      top: "80%",
      left: "80%",
      animationDuration: "24s",
      animationDelay: "-8s",
      opacity: 0.1,
    },
  ];

  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              filter: "blur(100px)",
              opacity: orb.opacity,
              animation: `ambientFloat${i} ${orb.animationDuration} ease-in-out infinite`,
              animationDelay: orb.animationDelay,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes ambientFloat0 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -60px); }
          50% { transform: translate(-30px, 40px); }
          75% { transform: translate(50px, 20px); }
        }
        @keyframes ambientFloat1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-50px, 30px); }
          50% { transform: translate(40px, -40px); }
          75% { transform: translate(-20px, 50px); }
        }
        @keyframes ambientFloat2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, 50px); }
          50% { transform: translate(-50px, -20px); }
          75% { transform: translate(40px, -30px); }
        }
        @keyframes ambientFloat3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-40px, -30px); }
          50% { transform: translate(30px, 50px); }
          75% { transform: translate(-50px, 10px); }
        }
        @keyframes ambientFloat4 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(50px, 40px); }
          50% { transform: translate(-30px, -50px); }
          75% { transform: translate(20px, 30px); }
        }
      `}</style>
    </>
  );
}

export default AmbientOrbs;

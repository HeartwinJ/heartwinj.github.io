function Hero() {
  return (
    <section className="h-screen w-screen bg-neutral-900 text-white flex flex-col items-center justify-center relative">
      <div className="absolute size-full overflow-hidden">
        <div className="relative size-full">
          <div className="absolute bottom-[-100%] right-[10%] w-[100px] rounded-[12px] aspect-square bg-white/50 animate-[boxFloat_20s_ease-out_infinite]"></div>
          <div className="absolute bottom-[-100%] right-[40%] w-[200px] rounded-[16px] aspect-square bg-white/50 animate-[boxFloat_40s_6s_ease-out_infinite]"></div>
          <div className="absolute bottom-[-100%] right-[20%] w-[50px] rounded-[8px] aspect-square bg-white/50 animate-[boxFloat_15s_9s_ease-out_infinite]"></div>
          <div className="absolute bottom-[-100%] right-[60%] w-[100px] rounded-[12px] aspect-square bg-white/50 animate-[boxFloat_25s_3s_ease-out_infinite]"></div>
          <div className="absolute bottom-[-100%] right-[30%] w-[150px] rounded-[15px] aspect-square bg-white/50 animate-[boxFloat_28s_12s_ease-out_infinite]"></div>
        </div>
      </div>
      <div>
        <div className="text-6xl">Hello! I'm</div>
        <div className="text-8xl">Heartwin Haveluck</div>
      </div>
      <div className="text-xl mt-5">
        Full Stack Developer | AI Specialist | Flutter Developer
      </div>
    </section>
  );
}

export default Hero;

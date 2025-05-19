import { CaretDownIcon } from "@phosphor-icons/react";

function Hero() {
  return (
    <section className="h-screen w-screen bg-neutral-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12 px-4 h-full flex flex-col items-start md:items-center justify-between relative">
        <div className="absolute size-full overflow-hidden">
          <div className="relative size-full">
            <div className="absolute bottom-[-100%] right-[10%] w-[100px] rounded-[12px] aspect-square bg-white/50 animate-[boxFloat_20s_ease-out_infinite]"></div>
            <div className="absolute bottom-[-100%] right-[40%] w-[200px] rounded-[16px] aspect-square bg-white/50 animate-[boxFloat_40s_6s_ease-out_infinite]"></div>
            <div className="absolute bottom-[-100%] right-[20%] w-[50px] rounded-[8px] aspect-square bg-white/50 animate-[boxFloat_15s_9s_ease-out_infinite]"></div>
            <div className="absolute bottom-[-100%] right-[60%] w-[100px] rounded-[12px] aspect-square bg-white/50 animate-[boxFloat_25s_3s_ease-out_infinite]"></div>
            <div className="absolute bottom-[-100%] right-[30%] w-[150px] rounded-[15px] aspect-square bg-white/50 animate-[boxFloat_28s_12s_ease-out_infinite]"></div>
          </div>
        </div>
        <div />
        <div>
          <div className="text-2xl md:text-4xl lg:text-6xl">Hello! I'm</div>
          <div className="font-bold text-4xl md:text-6xl lg:text-8xl">
            Heartwin Haveluck
          </div>
          <div className="text-sm md:text-center md:text-lg lg:text-xl mt-5">
            Full Stack Developer | AI Specialist | Flutter Developer
          </div>
        </div>
        <div className="p-3 animate-bounce">
          <CaretDownIcon size={32} weight="light" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

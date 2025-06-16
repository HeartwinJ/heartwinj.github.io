import { CaretDownIcon } from "@phosphor-icons/react";
import Silk from "./Silk";
import SplitText from "./SplitText";
import RotatingText from "./RotatingText";
import { LayoutGroup, motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen w-screen bg-neutral-900 text-white relative ">
      <div className="absolute inset-0">
        <Silk />
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 h-full flex flex-col items-start md:items-center justify-between relative">
        <div />
        <div>
          {/* <div className="text-2xl md:text-4xl lg:text-6xl">Hello! I'm</div> */}
          {/* <div className="font-bold text-4xl md:text-6xl lg:text-8xl">
            Heartwin Haveluck
          </div> */}
          <div>
            <SplitText
              text="Hello, There!"
              className="text-2xl md:text-4xl lg:text-6xl text-center"
              delay={10}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div>
            <SplitText
              text="I'm Heartwin"
              className="block font-bold text-4xl md:text-6xl lg:text-8xl text-center"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className="flex justify-center items-center">
            <LayoutGroup>
              <motion.p className="flex items-center gap-1" layout>
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Your freindly neighborhood{" "}
                </motion.span>
                <RotatingText
                  texts={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Flutter Developer",
                    "AI Specialist",
                  ]}
                  mainClassName="flex justify-center overflow-hidden px-2 py-1 bg-white text-black rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 font-bold"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
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

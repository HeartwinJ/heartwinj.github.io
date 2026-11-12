import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </SmoothScroll>
    </MotionConfig>
  );
}

export default App;

// Components (created by other workers)
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import AmbientOrbs from "./components/AmbientOrbs";

// Sections (created by other workers)
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <SmoothScroll>
      <div className="font-montserrat bg-cosmic-bg text-[#f0f0f0] relative overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <AmbientOrbs />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </SmoothScroll>
  );
}

export default App;

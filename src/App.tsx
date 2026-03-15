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

          {/* About + Skills side-by-side on large screens */}
          <section
            className="relative overflow-hidden py-20 md:py-28"
            style={{ backgroundColor: "#0a0a1a" }}
          >
            {/* Decorative orbs */}
            <div
              className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, #7928ca 0%, transparent 70%)" }}
            />
            <div
              className="pointer-events-none absolute bottom-10 left-1/3 h-48 w-48 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, #ff0080 0%, transparent 70%)" }}
            />

            <div className="relative mx-auto max-w-7xl px-4">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
                <div className="lg:w-[38%] lg:sticky lg:top-28">
                  <AboutSection />
                </div>
                <div className="lg:w-[62%]">
                  <SkillsSection />
                </div>
              </div>
            </div>
          </section>

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

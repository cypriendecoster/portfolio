import SiteShell from "../components/layout/SiteShell";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import IntroSection from "../components/sections/IntroSection";
import ProjectsSection from "../components/sections/ProjectsSection";

function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <main>
        <IntroSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
    </SiteShell>
  );
}

export default HomePage;

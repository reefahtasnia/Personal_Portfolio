import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection2";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import MarqueeTicker from "@/components/MarqueeTicker";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import Footer from "@/components/Footer";
import { type Role } from "@/data/portfolioData";

const Index = () => {
  const [activeRole, setActiveRole] = useState<Role>("fullstack");

  return (
    <ThemeProvider>
      <LoadingScreen />
      <CursorGlow />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection activeRole={activeRole} setActiveRole={setActiveRole} />
          <MarqueeTicker />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificatesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

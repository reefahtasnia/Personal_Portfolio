
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const [activeRole, setActiveRole] = useState<"fullstack" | "ctf" | "uiux" | "management">("fullstack");
  const { setTheme, themeWasManuallyToggled } = useTheme();
  
  // Handle theme changes based on role selection, but only if not manually toggled
  useEffect(() => {
    if (!themeWasManuallyToggled) {
      if (activeRole === "ctf") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [activeRole, setTheme, themeWasManuallyToggled]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection activeRole={activeRole} setActiveRole={setActiveRole} />
        <AboutSection activeRole={activeRole} />
        <SkillsSection activeRole={activeRole} />
        <ProjectsSection activeRole={activeRole} />
        <ExperienceSection activeRole={activeRole} />
        <CertificatesSection activeRole={activeRole} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

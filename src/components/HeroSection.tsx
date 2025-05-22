
import { useState, useEffect } from "react";
import { aboutData } from "@/data/portfolioData";
import RoleButton from "./RoleButton";
import { useTheme } from "./ThemeProvider";

type HeroProps = {
  activeRole: "fullstack" | "ctf" | "uiux" | "management";
  setActiveRole: (role: "fullstack" | "ctf" | "uiux" | "management") => void;
};

export default function HeroSection({ activeRole, setActiveRole }: HeroProps) {
  const { theme, setTheme, themeWasManuallyToggled, setThemeWasManuallyToggled } = useTheme();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Theme management based on role selection
  useEffect(() => {
    // Only change theme automatically if user hasn't manually toggled it
    if (!themeWasManuallyToggled) {
      if (activeRole === "ctf") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, [activeRole, setTheme, themeWasManuallyToggled]);

  // Listen for theme changes from the toggle button
  useEffect(() => {
    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent;
      // Only set the flag if it's a manual toggle from the navbar button
      if (customEvent.detail?.source === 'manual') {
        setThemeWasManuallyToggled(true);
      }
    };

    document.addEventListener("themeToggled", handleThemeChange);
    return () => document.removeEventListener("themeToggled", handleThemeChange);
  }, [setThemeWasManuallyToggled]);

  // When changing roles, reset the manual toggle flag
  const handleRoleChange = (role: "fullstack" | "ctf" | "uiux" | "management") => {
    setActiveRole(role);
    setThemeWasManuallyToggled(false);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${
            theme === "light" ? "#00FFFF20" : "#D400FF20"
          } 0%, ${
            theme === "light" ? "#D400FF20" : "#00FFFF20"
          } 100%)`,
        }}
      />

      {/* Swirling neon animations */}
      <div className="absolute inset-0 z-1 opacity-60">
        {/* Neon Swirls */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`swirl-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `2px solid ${theme === "light" ? "#00FFFF" : "#D400FF"}`,
              opacity: 0.4,
              boxShadow: `0 0 15px ${theme === "light" ? "#00FFFF" : "#D400FF"}`,
              borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
              animation: `swirl ${Math.random() * 10 + 15}s linear infinite`,
              animationDirection: i % 2 === 0 ? "normal" : "reverse",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Vine-like neon paths */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`vine-${i}`}
            className="absolute opacity-30"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 60 + 40}%`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 50}%`,
              background: `linear-gradient(to bottom, transparent, ${theme === "light" ? "#00FFFF" : "#D400FF"}, transparent)`,
              boxShadow: `0 0 8px ${theme === "light" ? "#00FFFF" : "#D400FF"}`,
              animation: `float ${Math.random() * 5 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          />
        ))}
      </div>

      {/* Particle effect (simplified with CSS) */}
      <div className="absolute inset-0 z-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white dark:bg-white/50 animate-pulse-glow"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 3 + 2 + "s",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 glitch-text"
              data-text={aboutData[activeRole].name}
            >
              {aboutData[activeRole].name}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 neon-text">
              {aboutData[activeRole].tagline}
            </p>
            
            {/* Role selection buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <RoleButton
                role="fullstack"
                label="Full Stack Developer"
                isActive={activeRole === "fullstack"}
                onClick={() => handleRoleChange("fullstack")}
              />
              <RoleButton
                role="ctf"
                label="CTF Player"
                isActive={activeRole === "ctf"}
                onClick={() => handleRoleChange("ctf")}
              />
              <RoleButton
                role="uiux"
                label="UI/UX Designer"
                isActive={activeRole === "uiux"}
                onClick={() => handleRoleChange("uiux")}
              />
              <RoleButton
                role="management"
                label="Management"
                isActive={activeRole === "management"}
                onClick={() => handleRoleChange("management")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the swirl animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes swirl {
            0% {
              transform: rotate(0deg) scale(1);
              border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            }
            25% {
              border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            50% {
              transform: rotate(180deg) scale(1.1);
              border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            }
            75% {
              border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%;
            }
            100% {
              transform: rotate(360deg) scale(1);
              border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            }
          }
        `
      }} />
    </section>
  );
}

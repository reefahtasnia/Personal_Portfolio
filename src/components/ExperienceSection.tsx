
import { useState, useEffect } from "react";
import { experienceData, type Role } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

// Combine all experiences from all roles
const getAllExperiences = () => {
  const allExperiences = [];
  Object.values(experienceData).forEach(roleExperiences => {
    allExperiences.push(...roleExperiences);
  });
  return allExperiences;
};

export default function ExperienceSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = Array.from(containerRef.current.querySelectorAll('.exp-card'));
      const windowHeight = window.innerHeight;
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
          setVisibleIndexes((prev) => prev.includes(idx) ? prev : [...prev, idx]);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = getAllExperiences();

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Experience
        </h2>
        <p className="text-center text-lg mb-12">
          My professional journey and career highlights
        </p>

        <div
          className={cn(
            "transition-all duration-300 max-w-4xl mx-auto",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          )}
          ref={containerRef}
        >
          {(!experiences || experiences.length === 0) ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">
              No experiences yet.
            </div>
          ) : (
            <div className="relative border-l-2 border-neon-blue dark:border-neon-purple ml-6 md:ml-12 pl-8 space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative exp-card transition-all duration-700",
                    visibleIndexes.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: visibleIndexes.includes(index) ? `${index * 120}ms` : "0ms" }}
                >
                  <div className="absolute -left-[41px] p-2 rounded-full bg-white dark:bg-near-black border-2 border-neon-blue dark:border-neon-purple">
                    <Briefcase className="h-5 w-5 text-neon-blue dark:text-neon-purple" />
                  </div>
                  
                  <div className="glass-panel p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                      {exp.company}
                    </p>
                    
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

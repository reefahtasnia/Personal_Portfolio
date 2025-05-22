
import { useState, useEffect } from "react";
import { experienceData, type Role } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

type ExperienceSectionProps = {
  activeRole: Role;
};

export default function ExperienceSection({ activeRole }: ExperienceSectionProps) {
  const [prevRole, setPrevRole] = useState<Role>(activeRole);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (prevRole !== activeRole) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setPrevRole(activeRole);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeRole, prevRole]);

  const experiences = experienceData[prevRole];

  const getRoleName = (role: Role): string => {
    switch (role) {
      case "fullstack":
        return "Full Stack Developer";
      case "ctf":
        return "CTF Player";
      case "uiux":
        return "UI/UX Designer";
      case "management":
        return "Management & Leadership";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Experience
        </h2>
        <p className="text-center text-lg mb-12">
          My professional journey as a {getRoleName(activeRole)}
        </p>

        <div
          className={cn(
            "transition-all duration-300 max-w-4xl mx-auto",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          )}
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
                  className="relative"
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


import { useState, useEffect } from "react";
import { skillsData, type Role } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

type SkillsSectionProps = {
  activeRole: Role;
};

export default function SkillsSection({ activeRole }: SkillsSectionProps) {
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

  const skills = skillsData[prevRole];
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const getRoleName = (role: Role): string => {
    switch (role) {
      case "fullstack":
        return "Full Stack Developer";
      case "ctf":
        return "CTF Player";
      case "uiux":
        return "UI/UX Designer";
      case "management":
        return "Manager";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Skills
        </h2>
        <p className="text-center text-lg mb-12">
          My expertise as a {getRoleName(activeRole)}
        </p>

        <div
          className={cn(
            "transition-all duration-300",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(category => (
              <div key={category} className="glass-panel p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 neon-text">
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}/5
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse-glow"
                            style={{ width: `${(skill.level / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

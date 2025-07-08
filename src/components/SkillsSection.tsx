
import { useState, useEffect } from "react";
import { skillsData, type Role } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

// Combine all skills from all roles
const getAllSkills = () => {
  const allSkills = new Map();
  
  // Iterate through all roles and collect unique skills
  Object.values(skillsData).forEach(roleSkills => {
    roleSkills.forEach(skill => {
      if (!allSkills.has(skill.name)) {
        allSkills.set(skill.name, skill);
      } else {
        // If skill exists, take the higher level
        const existing = allSkills.get(skill.name);
        if (skill.level > existing.level) {
          allSkills.set(skill.name, skill);
        }
      }
    });
  });
  
  return Array.from(allSkills.values());
};

export default function SkillsSection() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const skills = getAllSkills();
  
  // Simplified categories - exactly 4 as requested
  const categoryMapping = {
    "Frontend": ["Frontend", "Design", "Skills"],
    "Backend": ["Backend", "DevOps", "Programming", "Tools"], // Git and development tools
    "Cyber Security": ["Security", "Tools"], // Security-specific tools like Wireshark, gdb, Ghidra, Hashcat
    "Soft Skills": ["Management", "Leadership", "Soft Skills", "Digital", "Process", "Tools"] // Office tools go here
  };

  const categories = ["All", "Frontend", "Backend", "Cyber Security", "Soft Skills"];

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => {
        const mappedCategories = categoryMapping[selectedCategory] || [selectedCategory];
        return mappedCategories.includes(skill.category);
      });

  const getSkillColor = (category: string, skillName: string) => {
    // Handle Tools category specially - split between cyber security and development tools
    if (category === "Tools") {
      const cyberSecurityTools = ["Wireshark", "Ghidra", "gdb", "Hashcat"];
      const softSkillsTools = ["Microsoft Office Suite", "Excel"];
      
      if (cyberSecurityTools.includes(skillName)) {
        return "from-red-500 to-orange-600"; // Cyber security tools get red/orange
      }
      if (softSkillsTools.includes(skillName)) {
        return "from-purple-500 to-pink-600"; // Office tools get purple/pink
      }
      return "from-green-500 to-teal-600"; // Development tools like Git get green/teal
    }
    
    // Map original categories to colors
    const categoryColorMap = {
      "Frontend": "from-blue-500 to-purple-600",
      "Design": "from-blue-500 to-purple-600",
      "Skills": "from-blue-500 to-purple-600",
      "Backend": "from-green-500 to-teal-600",
      "DevOps": "from-green-500 to-teal-600",
      "Programming": "from-green-500 to-teal-600",
      "Security": "from-red-500 to-orange-600",
      "Management": "from-purple-500 to-pink-600",
      "Leadership": "from-purple-500 to-pink-600",
      "Soft Skills": "from-purple-500 to-pink-600",
      "Digital": "from-purple-500 to-pink-600",
      "Process": "from-purple-500 to-pink-600"
    };
    
    return categoryColorMap[category] || "from-indigo-500 to-blue-600";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Skills
        </h2>
        <p className="text-center text-lg mb-12">
          My technical expertise and capabilities
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105",
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={cn(
            "transition-all duration-500",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          )}
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "group relative px-6 py-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110",
                  "bg-gradient-to-r shadow-lg backdrop-blur-sm",
                  getSkillColor(skill.category, skill.name),
                  hoveredSkill === skill.name ? "scale-110 shadow-2xl" : "hover:shadow-xl"
                )}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Skill Name */}
                <span className="text-white font-semibold text-sm md:text-base relative z-10">
                  {skill.name}
                </span>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Floating Animation Styles */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          .group:hover {
            animation: float 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}

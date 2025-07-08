
import { useState, useEffect, useRef } from "react";
import { projectsData, type Role, type ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation";

// Combine all projects from all roles
const getAllProjects = () => {
  const allProjects: ProjectItem[] = [];
  Object.values(projectsData).forEach(roleProjects => {
    allProjects.push(...roleProjects);
  });
  return allProjects;
};

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation();
  
  const projects = getAllProjects();
  const totalProjects = projects.length;

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalProjects);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalProjects]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  // Remove parallaxTransform and scrollY usage
  return (
    <section 
      id="projects" 
      className="py-20 pb-8 relative overflow-hidden project-carousel" // Reduce bottom padding
      ref={ref}
      // Remove: style={{ transform: parallaxTransform }}
    >
      {/* Floating orbs background */}
      <div className="floating-orbs"></div>
      <div className="floating-orbs"></div>
      <div className="floating-orbs"></div>
      {/* Moving gradient background */}
      <div className="absolute inset-0 moving-gradient opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "text-center mb-12 fade-up",
          isVisible ? "visible" : ""
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 neon-text">
            Projects
          </h2>
          <p className="text-lg mb-4">
            Showcasing my portfolio of work across various domains
          </p>
          
          {/* Project counter */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>{currentIndex + 1}</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            <span>{totalProjects}</span>
          </div>
        </div>

        {/* Main Carousel - Spotlight Style */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className="relative h-[400px] md:h-[450px] flex items-center justify-center overflow-visible">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* Show all projects with proper positioning */}
              {projects.map((project, index) => {
                const position = (index - currentIndex + totalProjects) % totalProjects;
                let offset = 0;
                let isVisible = false;
                
                if (position === 0) {
                  offset = 0; // center
                  isVisible = true;
                } else if (position === 1 || position === totalProjects - 1) {
                  offset = position === 1 ? 1 : -1; // right or left
                  isVisible = true;
                } else {
                  // Hide other cards
                  isVisible = false;
                }
                
                const isCenter = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;
                
                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute transition-all duration-700 ease-out cursor-pointer",
                      isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
                      isCenter && "z-20 scale-100",
                      (isLeft || isRight) && "z-10 scale-90 opacity-70 hover:scale-95 hover:opacity-90",
                      isLeft && "-translate-x-80 md:-translate-x-96",
                      isRight && "translate-x-80 md:translate-x-96"
                    )}
                    style={{
                      width: isCenter ? "360px" : "288px",
                      height: isCenter ? "360px" : "288px",
                    }}
                    onClick={() => {
                      if (isCenter) {
                        openProjectDetails(project);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                  >
                    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden group shadow-2xl">
                      {/* Project Image */}
                      <div className="absolute inset-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Make overlay much darker */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10"></div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                        <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2 bg-black/60 rounded-xl p-2 md:p-4">
                          <h3 className={cn(
                            "font-bold text-white mb-2",
                            isCenter ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                          )}>
                            {project.title}
                          </h3>
                          <p className={cn(
                            "text-gray-200 mb-3 line-clamp-2",
                            isCenter ? "text-sm" : "text-xs"
                          )}>
                            {project.description}
                          </p>
                          {/* Tech Stack - Only show on center card */}
                          {isCenter && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {project.tags.slice(0, 3).map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 3 && (
                                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                  +{project.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                          {/* Project Type */}
                          <span className={cn(
                            "text-gray-300 uppercase tracking-wider",
                            isCenter ? "text-xs" : "text-xs"
                          )}>
                            {project.type || "Project"}
                          </span>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Spotlight effect for center card */}
                      {isCenter && (
                        <div className="absolute inset-0 ring-2 ring-purple-500/50 rounded-xl shadow-purple-500/25 shadow-2xl"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-purple-500 scale-125 shadow-lg shadow-purple-500/50" 
                    : "bg-white/40 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeProjectDetails}
          >
            <div 
              className="bg-white dark:bg-gray-800 max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl transform transition-all duration-300 scale-100 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Move close button outside image for visibility */}
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 z-50 bg-black/80 hover:bg-black text-white p-2 rounded-full shadow-lg border border-white/20"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative">
                {/* Header Image */}
                <div className="h-64 md:h-80 w-full overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold neon-text">{selectedProject.title}</h2>
                    
                    <div className="flex gap-4 mt-4 md:mt-0">
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Github size={18} />
                          <span className="text-sm">GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Description</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {selectedProject.techDetails && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {selectedProject.techDetails}
                        </p>
                      </div>
                    )}
                    
                    {selectedProject.collaboration && (
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {selectedProject.collaboration}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

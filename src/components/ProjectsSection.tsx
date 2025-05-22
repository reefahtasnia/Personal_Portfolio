
import { useState, useEffect } from "react";
import { projectsData, type Role, type ProjectItem } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

type ProjectsSectionProps = {
  activeRole: Role;
};

export default function ProjectsSection({ activeRole }: ProjectsSectionProps) {
  const [prevRole, setPrevRole] = useState<Role>(activeRole);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

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

  const projects = projectsData[prevRole];

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

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Projects
        </h2>
        <p className="text-center text-lg mb-12">
          Showcasing my work as a {getRoleName(activeRole)}
        </p>

        <div
          className={cn(
            "transition-all duration-300",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0"
          )}
        >
          {projects.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">
              No projects yet
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="glass-panel overflow-hidden rounded-xl flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm text-gray-500">{project.type || "Project"}</span>
                      <button 
                        className="inline-block neon-text hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          openProjectDetails(project);
                        }}
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeProjectDetails}>
          <div 
            className="bg-white dark:bg-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header Image */}
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center" 
                />
                
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
                    
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
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
    </section>
  );
}

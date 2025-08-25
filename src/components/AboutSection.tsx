import { aboutData } from "@/data/portfolioData";
import { useState } from "react";

export default function AboutSection() {
  // Use fullstack as default role for now
  const about = aboutData.fullstack;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* About text left */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-left neon-text">
              About Me
            </h2>
            <div className="glass-panel p-6 md:p-8">
              <p className="text-lg leading-relaxed mb-6">{about.bio}</p>
              <p className="text-lg leading-relaxed">{about.additionalInfo}</p>
            </div>
          </div>
          {/* 3D Floating Image Cube right */}
          <div className="flex-1 flex justify-center items-center order-1 md:order-2">
            <div
              className="relative w-56 h-56 md:w-64 md:h-64 perspective-3d"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`cube3d ${isHovered ? "cube3d-animate" : ""}`}
                style={{ width: "100%", height: "100%" }}
              >
                {/* Only show front face with user image for now */}
                <div className="cube3d-face cube3d-front">
                  <img
                    src={about.image || "/placeholder.svg"}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
                  />
                </div>
                {/* Optionally add more faces for a true cube effect */}
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* 3D Cube CSS (use regular <style> tag; 'jsx' attribute is Next.js-specific) */}
  <style>{`
        .perspective-3d {
          perspective: 1200px;
        }
        .cube3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          animation: floatCube 4s ease-in-out infinite alternate;
        }
        .cube3d-animate {
          transform: rotateY(40deg) rotateX(25deg) scale(1.07);
        }
        .cube3d-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .cube3d-front {
          transform: translateZ(80px);
        }
        @keyframes floatCube {
          0% {
            transform: translateY(0px) rotateY(0deg) rotateX(0deg);
          }
          100% {
            transform: translateY(-18px) rotateY(20deg) rotateX(10deg);
          }
        }
      `}</style>
    </section>
  );
}

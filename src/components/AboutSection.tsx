
import { aboutData, type Role } from "@/data/portfolioData";

type AboutSectionProps = {
  activeRole: Role;
};

export default function AboutSection({ activeRole }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center neon-text">
            About Me
          </h2>
          
          <div className="glass-panel p-6 md:p-8">
            <p className="text-lg leading-relaxed mb-6">
              {aboutData[activeRole].bio}
            </p>
            <p className="text-lg leading-relaxed">
              {aboutData[activeRole].additionalInfo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

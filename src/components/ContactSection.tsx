
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ContactSection() {
  const handleDownloadResume = () => {
    // Create a link to download the resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assuming resume.pdf is in the public folder
    link.download = 'Reefah_Tasnia_Haque_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
            Contact Me
          </h2>
          
          <div className="glass-panel p-8 mb-8">
            <p className="text-lg mb-6">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:reefah@example.com" className="text-blue-500 hover:underline">
                  reefah@example.com
                </a>
              </div>
              
              <div>
                <p className="font-medium">LinkedIn</p>
                <a href="https://linkedin.com/in/reefah" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  linkedin.com/in/reefah
                </a>
              </div>
              
              <div>
                <p className="font-medium">GitHub</p>
                <a href="https://github.com/reefah" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  github.com/reefah
                </a>
              </div>
            </div>
            
            <Button 
              onClick={handleDownloadResume} 
              className="mt-6 group neon-border bg-transparent hover:bg-neon-blue/10 dark:hover:bg-neon-purple/10"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

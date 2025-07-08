"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ContactSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf" 
    link.download = "Reefah_Tasnia_Haque_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
            Contact Me
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm p-8 mb-8">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to connect!
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                <a href="mailto:reefah@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  reefah@example.com
                </a>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/reefah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  linkedin.com/in/reefah
                </a>
              </div>

              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">GitHub</p>
                <a
                  href="https://github.com/reefah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/reefah
                </a>
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="mt-6 group relative overflow-hidden border border-purple-500 dark:border-purple-400 bg-transparent hover:bg-purple-500/10 dark:hover:bg-purple-400/10 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

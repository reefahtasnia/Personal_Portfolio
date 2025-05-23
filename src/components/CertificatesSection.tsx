"use client"

import { useState, useEffect } from "react"
import { certificatesData, type Role } from "@/data/portfolioData"
import { cn } from "@/lib/utils"
import { Award, ExternalLink, X } from "lucide-react"

type CertificatesSectionProps = {
  activeRole: Role
}

export default function CertificatesSection({ activeRole }: CertificatesSectionProps) {
  const [prevRole, setPrevRole] = useState<Role>(activeRole)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  useEffect(() => {
    if (prevRole !== activeRole) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setPrevRole(activeRole)
        setIsAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [activeRole, prevRole])

  const certificates = certificatesData[prevRole]

  const getRoleName = (role: Role): string => {
    switch (role) {
      case "fullstack":
        return "Full Stack Developer"
      case "ctf":
        return "CTF Player"
      case "uiux":
        return "UI/UX Designer"
      case "management":
        return "Management & Leadership"
    }
  }

  const openCertificate = (index: number) => {
    setSelectedCertificate(index)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Certificates
        </h2>
        <p className="text-center text-lg mb-12">My credentials as a {getRoleName(activeRole)}</p>

        <div
          className={cn(
            "transition-all duration-300",
            isAnimating ? "opacity-0 transform translate-y-8" : "opacity-100 transform translate-y-0",
          )}
        >
          {certificates.length === 0 ? (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">No certification yet</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                  onClick={() => openCertificate(index)}
                >
                  <Award className="h-10 w-10 text-neon-blue dark:text-neon-purple mb-4" />
                  <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>

                  <div className="mt-4">
                    <button className="text-sm neon-text hover:underline">
                      View Certificate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate !== null && certificates[selectedCertificate] && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeCertificate}
          >
            <div
              className="bg-white dark:bg-gray-800 max-w-3xl w-full rounded-xl shadow-lg overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                {/* Close button - Moved outside of content area and made more visible */}
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-10 shadow-md"
                  onClick={closeCertificate}
                  aria-label="Close certificate view"
                >
                  <X className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                </button>

                <h3 className="text-xl font-bold mb-4 text-center pr-10">{certificates[selectedCertificate].name}</h3>

                <div className="flex flex-col md:flex-row gap-6">
                  {certificates[selectedCertificate].image && (
                    <div className="flex-1">
                      {/* Updated image path to ensure it loads correctly after refresh */}
                      <img
                        src={
                          certificates[selectedCertificate].image.startsWith("/")
                            ? certificates[selectedCertificate].image
                            : `/${certificates[selectedCertificate].image}`
                        }
                        alt={certificates[selectedCertificate].name}
                        className="w-full h-auto rounded-lg shadow-md"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement
                          console.error(`Failed to load image: ${target.src}`)
                          target.src = "/placeholder.svg?height=300&width=400"
                          target.alt = "Certificate image could not be loaded"
                        }}
                      />
                    </div>
                  )}

                  <div className={`flex-1 ${!certificates[selectedCertificate].image ? "w-full" : ""}`}>
                    <div className="mb-4">
                      <p className="text-sm font-semibold">Issued by</p>
                      <p>{certificates[selectedCertificate].issuer}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold">Date</p>
                      <p>{certificates[selectedCertificate].date}</p>
                    </div>

                    {certificates[selectedCertificate].description && (
                      <div className="mb-4">
                        <p className="text-sm font-semibold">Description</p>
                        <p className="text-gray-700 dark:text-gray-300">
                          {certificates[selectedCertificate].description}
                        </p>
                      </div>
                    )}

                    {certificates[selectedCertificate].link && (
                      <div className="mt-6">
                        <a
                          href={certificates[selectedCertificate].link}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md w-fit"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Original
                        </a>
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
  )
}

import { useState } from "react"
import { certificatesData } from "@/data/portfolioData"

type CertEntry = {
  name: string
  issuer: string
  date: string
  image?: string
  credentialUrl?: string
}

const PINNED: CertEntry[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google · Coursera",
    date: "Aug 2025",
    image: "/foundations of cybersecurity certificate-1.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9MIHMHGJVMK6",
  },
  {
    name: "Introduction to Software Quality Assurance",
    issuer: "Board Infinity · Coursera",
    date: "March 2026",
    image: "/Introduction to SQA by Board Infinity.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4QZKSBFTX683",
  },
  {
    name: "Pre Security Certificate",
    issuer: "TryHackMe",
    date: "February 2026",
    image: "/tryhackme pre security.png",
    credentialUrl: "https://tryhackme.com/certificate/THM-SBW9KSOKO4",
  },
]

const PINNED_NAMES = new Set(PINNED.map(p => p.name))

const getAllRest = (): CertEntry[] => {
  const seen = new Set<string>()
  const all: CertEntry[] = []
  Object.values(certificatesData).forEach(role =>
    role.forEach(c => {
      if (!PINNED_NAMES.has(c.name) && !seen.has(c.name)) {
        seen.add(c.name)
        all.push({ name: c.name, issuer: c.issuer, date: c.date, image: c.image, credentialUrl: c.credentialUrl })
      }
    })
  )
  return all
}

function CertCard({ cert }: { cert: CertEntry }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#111118",
        border: `1px solid ${hovered ? "rgba(167,139,250,0.25)" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "8px",
        overflow: "hidden",
        transition: "border-color 0.2s, background-color 0.2s",
        display: "flex",
        flexDirection: "column",
      } as React.CSSProperties}
    >
      {/* Certificate image */}
      <div
        style={{
          aspectRatio: "16/10",
          overflow: "hidden",
          backgroundColor: "#0d0d14",
          flexShrink: 0,
        }}
      >
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.03)" : "scale(1)",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.75rem" }}>Certificate</span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div
        style={{
          padding: "0.8rem 1rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "0.5rem",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.3rem",
            }}
          >
            {cert.issuer} · {cert.date}
          </p>
          <p style={{ fontWeight: 600, fontSize: "0.82rem", color: "#f0f0f0", lineHeight: 1.4 }}>
            {cert.name}
          </p>
        </div>

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#a78bfa",
              fontSize: "0.72rem",
              textDecoration: "none",
              transition: "opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View credential →
          </a>
        )}
      </div>
    </div>
  )
}

const GRID: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
  gap: "1rem",
}

export default function CertificatesSection() {
  const [expanded, setExpanded] = useState(false)
  const rest = getAllRest()

  return (
    <section id="certificates" style={{ padding: "5rem 0" }}>
      <div className="container mx-auto px-4">
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            color: "#f0f0f0",
            letterSpacing: "-0.01em",
            marginBottom: "2.5rem",
          }}
        >
          Certificates
        </h2>

        {/* Pinned three */}
        <div style={GRID}>
          {PINNED.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>

        {/* Toggle */}
        {rest.length > 0 && (
          <button
            onClick={() => setExpanded(v => !v)}
            style={{
              marginTop: "1.75rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#a78bfa",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              padding: 0,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            {expanded ? "Collapse ↑" : `View all certificates → (${rest.length} more)`}
          </button>
        )}

        {/* Accordion */}
        <div
          style={{
            maxHeight: expanded ? "10000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.7s ease",
          }}
        >
          <div style={{ ...GRID, paddingTop: "1rem" }}>
            {rest.map((cert, i) => (
              <CertCard key={i} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

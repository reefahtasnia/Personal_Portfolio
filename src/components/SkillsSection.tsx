import { useState } from "react"

const SKILLS = [
  {
    category: "Testing & QA",
    skills: "Manual Testing, API Testing (Postman), Functional Testing, Regression Testing, Bug Documentation, SUS-based UAT",
  },
  {
    category: "Languages",
    skills: "Python, JavaScript, Java, PHP, SQL (Oracle), Bash, C++, Dart",
  },
  {
    category: "Frameworks",
    skills: "React.js, Next.js, Node.js, Express.js, Flutter, Spring Boot",
  },
  {
    category: "Tools & Infra",
    skills: "Docker, Git, Cisco Packet Tracer, Unreal Engine 5, XAMPP, Postman",
  },
  {
    category: "Security",
    skills: "OSINT, Wireshark, Ghidra, Reverse Engineering, Cryptography basics",
  },
  {
    category: "Design",
    skills: "Figma, Adobe Illustrator, Wireframing, Prototyping, User Research",
  },
  {
    category: "Soft Skills",
    skills: "Team Leadership, Technical Writing, Agile Collaboration, Documentation",
  },
]

export default function SkillsSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section id="skills" style={{ padding: "5rem 0" }}>
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
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {SKILLS.map((row, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1rem 0.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                backgroundColor: hoveredRow === i ? "rgba(255,255,255,0.02)" : "transparent",
                transition: "background-color 0.2s",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#a78bfa",
                  fontWeight: 600,
                  minWidth: "160px",
                  flexShrink: 0,
                  paddingTop: "0.15rem",
                  lineHeight: 1.5,
                }}
              >
                {row.category}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                }}
              >
                {row.skills}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

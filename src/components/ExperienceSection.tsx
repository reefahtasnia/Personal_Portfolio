import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type ExpEntry = {
  title: string
  company: string
  duration: string
  description: string
  skills: string[]
}

const WORK: ExpEntry[] = [
  {
    title: "Digitalyst Intern",
    company: "Banglalink",
    duration: "June 2026 – Present",
    description:
      "Selected through a competitive hiring process for Banglalink's Digitalyst program, placed in the Business Assurance and Internal Control department. Working on revenue assurance, internal risk management and business operations analytics.",
    skills: ["Revenue Assurance", "Business Analytics", "Internal Audit", "Risk Management", "Telecom"],
  },
  {
      title: "Functional Testing (QA) Intern",
      company: "a1qa - QA Internship Program",
      duration: "April 2026 - June 2026",
      description:
          "Went through a group training and then an individual 1-on-1 mentorship on QA principles, Testing lifecycle and test documentation. Conducted 1-on-1 mentor-led testing on live training web applications, applying strict bug reporting standards, formal test documentation and spec-first testing discipline.",
      skills: [
          "Manual Testing",
          "Bug Reporting",
          "Jira",
          "Test Documentation",
          "Acceptance Sheets",
          "Test Surveys",
          "Boundary Value Analysis",
          "Fiddler Classic",
          "Charles Proxy",
          "Virtual Machine",
      ],
    },
  {
    title: "Industrial Trainee",
    company: "NEXT Ventures",
    duration: "May 2025",
    description:
      "15-day intensive rotation across SQA, DevOps, Data Engineering and Payment Systems. Built an LLM chatbot using vector databases and custom PDF input as a final project.",
    skills: ["SQA", "DevOps", "LLM Integration", "Vector Databases", "Docker", "Fintech"],
  },
]

const VOLUNTARY: ExpEntry[] = [
  {
    title: "General Secretary and Mentor",
    company: "MIST Cyber Security Club",
    duration: "2024 – Present",
    description:
      "Serving as General Secretary and mentoring junior CTF players, creating challenges, and organizing competition events.",
    skills: ["Challenge Creation", "Reverse Engineering", "Networking", "Mentorship", "Leadership"],
  },
  {
    title: "Management Team Lead",
    company: "MIST Mongol Barota — Mars Rover Society",
    duration: "2023 – 2025",
    description:
      "Actively managed people of multiple teams responsible for the development and documentation of the rover.",
    skills: ["Team Leadership", "Event Management", "Delegation", "Communication"],
  },
  {
    title: "Executive Member, Communications",
    company: "MIST Computer Club",
    duration: "2023 – Present",
    description:
      "Dynamic content writer crafting compelling narratives that captivate audiences and drive impactful communication.",
    skills: ["Dynamic Communication", "Web Content Writing"],
  },
]

function ExpCard({ exp }: { exp: ExpEntry }) {
  return (
    <div
      className="exp-card"
      style={{
        position: "relative",
        marginBottom: "1rem",
        willChange: "transform, opacity, filter",
      }}
    >
      {/* Timeline dot */}
      <div
        className="timeline-dot"
        style={{
          position: "absolute",
          left: "calc(-2rem - 8px)",
          top: "1.3rem",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "#0a0a0f",
          border: "2px solid #a78bfa",
          willChange: "transform",
          zIndex: 1,
        }}
      />

      <div
        style={{
          backgroundColor: "#111118",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
            marginBottom: "0.25rem",
          }}
        >
          <h3 style={{ color: "#f0f0f0", fontWeight: 600, fontSize: "1rem" }}>{exp.title}</h3>
          <span
            style={{
              fontSize: "0.72rem",
              color: "#888",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "0.15rem 0.65rem",
            }}
          >
            {exp.duration}
          </span>
        </div>

        <p style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.6rem" }}>
          {exp.company}
        </p>

        <p style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.9rem" }}>
          {exp.description}
        </p>

        <div className="skill-tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {exp.skills.map((skill, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.68rem",
                padding: "0.18rem 0.55rem",
                backgroundColor: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.22)",
                color: "#a78bfa",
                borderRadius: "4px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const workLineRef = useRef<HTMLDivElement>(null)
  const voluntaryLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced || !containerRef.current) return

    const ctx = gsap.context(() => {
      // Cards: slide in from left with blur fade
      const cards = containerRef.current!.querySelectorAll(".exp-card")
      cards.forEach(card => {
        gsap.from(card, {
          opacity: 0,
          x: -48,
          filter: "blur(6px)",
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Dots: pop in with bounce, offset slightly after the card
      const dots = containerRef.current!.querySelectorAll(".timeline-dot")
      dots.forEach(dot => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.45,
          ease: "back.out(3)",
          scrollTrigger: {
            trigger: dot,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Skill tags: stagger in after card
      const tagGroups = containerRef.current!.querySelectorAll(".skill-tags")
      tagGroups.forEach(group => {
        const tags = group.querySelectorAll("span")
        gsap.from(tags, {
          opacity: 0,
          y: 8,
          duration: 0.35,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: group,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Timeline lines: draw downward scrubbed to scroll
      ;[workLineRef.current, voluntaryLineRef.current].forEach(line => {
        if (!line) return
        gsap.from(line, {
          scaleY: 0,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.6,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const groupLabelStyle = (first: boolean): React.CSSProperties => ({
    fontSize: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    color: "#a78bfa",
    fontWeight: 600,
    marginBottom: "1.5rem",
    marginTop: first ? 0 : "3rem",
  })

  return (
    <section id="experience" style={{ padding: "5rem 0" }}>
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
          Experience
        </h2>

        <div ref={containerRef} style={{ maxWidth: "56rem" }}>

          <p style={groupLabelStyle(true)}>Work Experience</p>
          <div style={{ position: "relative", marginLeft: "1.25rem", paddingLeft: "2rem" }}>
            <div
              ref={workLineRef}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "#a78bfa",
                transformOrigin: "top center",
              }}
            />
            {WORK.map((exp, i) => <ExpCard key={i} exp={exp} />)}
          </div>

          <p style={groupLabelStyle(false)}>Voluntary &amp; Club Experience</p>
          <div style={{ position: "relative", marginLeft: "1.25rem", paddingLeft: "2rem" }}>
            <div
              ref={voluntaryLineRef}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "#a78bfa",
                transformOrigin: "top center",
              }}
            />
            {VOLUNTARY.map((exp, i) => <ExpCard key={i} exp={exp} />)}
          </div>

        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { projectsData, type ProjectItem } from "@/data/portfolioData"

gsap.registerPlugin(ScrollTrigger)

const getAllProjects = (): ProjectItem[] => {
  const all: ProjectItem[] = []
  Object.values(projectsData).forEach(rp => all.push(...rp))
  return all
}

const PROJECTS = getAllProjects()

function PreviewCard({ project }: { project: ProjectItem }) {
  return (
    <div
      style={{
        backgroundColor: "#111118",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div style={{ padding: "1.25rem 1.5rem" }}>
        <h3 style={{ color: "#f0f0f0", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.65rem",
                padding: "0.2rem 0.55rem",
                border: "1px solid #a78bfa",
                color: "#a78bfa",
                borderRadius: "4px",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: "0.78rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              GitHub →
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: "0.78rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function MobileProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div
      style={{
        backgroundColor: "#111118",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ padding: "1rem 1.25rem" }}>
        <h3 style={{ color: "#f0f0f0", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.5rem", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.tags.slice(0, 3).map((tag, i) => (
            <span key={i} style={{ fontSize: "0.62rem", padding: "0.15rem 0.5rem", border: "1px solid #a78bfa", color: "#a78bfa", borderRadius: "4px" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  )

  const triggerRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRefs = useRef<(HTMLParagraphElement | null)[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const quickTosX = useRef<any[]>([])
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number>(0)
  const stTriggersRef = useRef<ScrollTrigger[]>([])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isMobile) return

    // Init Lenis
    const lenis = new Lenis()
    lenisRef.current = lenis
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }
    rafIdRef.current = requestAnimationFrame(raf)

    // Wait one frame for refs to be fully laid out
    const initTimeout = setTimeout(() => {
      // Setup quickTo for each title x-offset
      quickTosX.current = titleRefs.current.map(el => {
        if (!el) return null
        return gsap.quickTo(el, "x", { duration: 0.5, ease: "power2.out" })
      })

      // Setup ScrollTrigger for each trigger zone
      triggerRefs.current.forEach((el, i) => {
        if (!el) return
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        })
        stTriggersRef.current.push(st)
      })
    }, 100)

    return () => {
      clearTimeout(initTimeout)
      cancelAnimationFrame(rafIdRef.current)
      lenis.destroy()
      stTriggersRef.current.forEach(t => t.kill())
      stTriggersRef.current = []
    }
  }, [isMobile])

  // Animate title x-offsets when active changes
  useEffect(() => {
    if (isMobile || !quickTosX.current.length) return
    quickTosX.current.forEach((qt, i) => {
      if (!qt) return
      const dist = Math.abs(i - activeIndex)
      const x = i === activeIndex ? 0 : Math.min(60 + dist * 8, 80)
      qt(x)
    })
  }, [activeIndex, isMobile])

  if (isMobile) {
    return (
      <section id="projects" style={{ padding: "5rem 1.5rem" }}>
        <h2 style={{ color: "#f0f0f0", fontSize: "2rem", fontWeight: 700, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
          Projects
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {PROJECTS.map((p, i) => <MobileProjectCard key={i} project={p} />)}
        </div>
      </section>
    )
  }

  return (
    <section id="projects" style={{ backgroundColor: "transparent" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* Left panel — sticky, full viewport height, vertically centered */}
        <div
          style={{
            width: "45%",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "visible",
            flexShrink: 0,
          }}
        >
          {/* Inner container: full height, flex-centered, relative for absolute preview card */}
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 4vw",
              position: "relative",
            }}
          >
            {/* Title list */}
            {PROJECTS.map((p, i) => (
              <p
                key={i}
                ref={el => { titleRefs.current[i] = el }}
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 3.2rem)",
                  fontWeight: 700,
                  color: i === activeIndex ? "#f0f0f0" : "rgba(255,255,255,0.18)",
                  lineHeight: 1.15,
                  marginBottom: "0.2rem",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                  willChange: "transform",
                  cursor: "default",
                }}
              >
                {p.title}
              </p>
            ))}

            {/* Preview card — absolute, extends into right panel */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "100%",
                marginLeft: "3vw",
                width: "min(460px, 46vw)",
                zIndex: 10,
              }}
            >
              <div style={{ position: "relative" }}>
                {PROJECTS.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      position: i === 0 ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      opacity: i === activeIndex ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      pointerEvents: i === activeIndex ? "auto" : "none",
                    }}
                  >
                    <PreviewCard project={p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — scroll trigger zones, no visible content */}
        <div style={{ width: "55%", flexShrink: 0 }}>
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              ref={el => { triggerRefs.current[i] = el }}
              style={{ height: "100vh" }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

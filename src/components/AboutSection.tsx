import { useEffect, useRef, useState } from "react"
import { aboutData } from "@/data/portfolioData"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const STATEMENT = "As a CSE graduate, I build things that work, test things that shouldn't break and figure out why systems fail."
const WORDS = STATEMENT.split(" ")

const FACTS = [
  { label: "Based in",  value: "Dhaka, Bangladesh" },
  { label: "Currently", value: "Digitalyst Intern, Banglalink" },
  { label: "Education", value: "BSc CSE, MIST (2022 – 2026)" },
  { label: "Available", value: "Open to full-time roles from late 2026" },
  { label: "Thesis",    value: "Cognitive Load in Game Onboarding (Unreal Engine 5 + NASA-TLX)" },
  { label: "Interests", value: "SQA, Systems Thinking, Cybersecurity, UI/UX" },
]

export default function AboutSection() {
  const about = aboutData.fullstack
  const sectionRef = useRef<HTMLElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const imageRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced || isMobile || !sectionRef.current) return

    const words = wordRefs.current.filter(Boolean) as HTMLSpanElement[]
    if (!words.length) return

    // Set initial state
    gsap.set(words, { opacity: 0, filter: "blur(8px)" })

    // Animate words on scroll
    const wordTween = gsap.to(words, {
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 10%",
        scrub: 1,
      },
    })

    // Animate image
    let imageTween: gsap.core.Tween | null = null
    if (imageRef.current) {
      imageTween = gsap.from(imageRef.current, {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
        },
      })
    }

    return () => {
      wordTween.kill()
      imageTween?.kill()
      ScrollTrigger.getAll()
        .filter(t => t.vars.trigger === sectionRef.current)
        .forEach(t => t.kill())
    }
  }, [isMobile])

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: isMobile ? "5rem 1.5rem 5rem" : "9rem 5vw 9rem",
        overflow: "hidden",
      }}
    >
      {/* Profile image — absolute right, visible only on desktop */}
      {!isMobile && (
        <div
          ref={imageRef}
          style={{
            position: "absolute",
            right: 0,
            top: "15%",
            width: "min(38vw, 450px)",
            aspectRatio: "3/4",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <img
            src={about.image || "/placeholder.svg"}
            alt="Reefah Tasnia Haque"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "right center",
              borderRadius: "180px 0 0 180px",
              display: "block",
              animation: "about-float 4s ease-in-out infinite",
            }}
          />
        </div>
      )}
      <style>{`
        @keyframes about-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-18px); }
        }
      `}</style>

      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Statement text */}
        <p
          style={{
            width: isMobile ? "100%" : "66%",
            fontSize: "clamp(1rem, 1.9vw, 1.85rem)",
            lineHeight: 1.55,
            color: "#f0f0f0",
            fontWeight: 400,
            marginBottom: isMobile ? "2rem" : "2.75rem",
          }}
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              ref={el => { wordRefs.current[i] = el }}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Bio — offset right on desktop */}
        <div
          style={{
            marginLeft: isMobile ? 0 : "20%",
            width: isMobile ? "100%" : "28%",
          }}
        >
          <p
            style={{
              color: "#666",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              marginBottom: 0,
            }}
          >
            {about.bio}
          </p>

          {/* Metadata facts */}
          <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
            {FACTS.map((fact, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "0.4rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#a78bfa",
                    minWidth: "100px",
                    flexShrink: 0,
                    paddingTop: "0.1rem",
                  }}
                >
                  {fact.label}
                </span>
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </div>

          {/* CV link */}
          <a
            href="/resume.pdf"
            download
            style={{
              display: "inline-block",
              color: "#a78bfa",
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View my CV →
          </a>
        </div>

      </div>
    </section>
  )
}

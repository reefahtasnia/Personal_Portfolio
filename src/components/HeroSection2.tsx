"use client"

import { useState, useEffect } from "react"
import { type Role } from "@/data/portfolioData"

const TYPEWRITER_STRINGS = [
  "Software QA Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Digitalyst - Banglalink",
]

type HeroSectionProps = {
  activeRole: Role
  setActiveRole: (role: Role) => void
}

export default function HeroSection(_props: HeroSectionProps) {
  const [twIndex, setTwIndex] = useState(0)
  const [twText, setTwText] = useState("")

  useEffect(() => {
    const target = TYPEWRITER_STRINGS[twIndex]

    if (twText === target) {
      const hold = setTimeout(() => {
        setTwIndex((i) => (i + 1) % TYPEWRITER_STRINGS.length)
        setTwText("")
      }, 2800)
      return () => clearTimeout(hold)
    }

    const type = setTimeout(() => {
      setTwText(target.slice(0, twText.length + 1))
    }, 75)
    return () => clearTimeout(type)
  }, [twText, twIndex])

  const cursor = (
    <span style={{ animation: "hero-blink 0.8s step-end infinite" }}>_</span>
  )

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      className="relative min-h-screen overflow-hidden select-none"
      style={{ backgroundColor: "#0a0a0f" }}
    >
      {/* Gradient blob — right-center */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "50%",
          right: "-150px",
          width: "700px",
          height: "700px",
          background: "rgba(124, 58, 237, 0.18)",
          filter: "blur(140px)",
          transform: "translateY(-50%)",
        }}
      />

      {/* ── DESKTOP LAYOUT (sm+) ── */}

      {/* Typewriter — ~30% from top, left-aligned */}
      <div
        className="absolute z-10 hidden sm:block"
        style={{ top: "30%", left: "5vw" }}
      >
        <span
          className="font-mono tracking-wider"
          style={{ color: "#a78bfa", fontSize: "0.85rem" }}
        >
          {twText}
          {cursor}
        </span>
      </div>

      {/* Name — bottom-third, full width, left-aligned */}
      <div
        className="absolute z-10 hidden sm:block"
        style={{ bottom: "130px", left: "2vw", right: "2vw" }}
      >
        <h1
          className="font-black text-white leading-none"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)", letterSpacing: "-0.02em" }}
        >
          REEFAH TASNIA
        </h1>
        <h1
          className="font-black text-white leading-none"
          style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)", letterSpacing: "-0.02em" }}
        >
          HAQUE
        </h1>
      </div>

      {/* Bottom bar — anchor line left, CTA buttons right */}
      <div className="absolute bottom-0 left-0 w-full hidden sm:flex justify-between items-end px-8 pb-8 z-10">
        <p
          className="italic"
          style={{ color: "#6b7280", fontSize: "0.8rem", maxWidth: "360px" }}
        >
          I build things, test them and figure out why they break.
        </p>
        <div className="flex flex-col gap-2 items-end">
          <button
            onClick={scrollToProjects}
            className="px-5 py-2 rounded-md text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "#7c3aed" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#6d28d9")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#7c3aed")
            }
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-md text-sm font-medium transition-colors text-center"
            style={{
              border: "1px solid #a78bfa",
              color: "#a78bfa",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement
              el.style.backgroundColor = "#7c3aed"
              el.style.color = "#ffffff"
              el.style.borderColor = "#7c3aed"
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement
              el.style.backgroundColor = "transparent"
              el.style.color = "#a78bfa"
              el.style.borderColor = "#a78bfa"
            }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* ── MOBILE LAYOUT (<sm) ── */}
      <div className="sm:hidden flex flex-col items-center justify-center min-h-screen gap-8 px-6 text-center">
        <div>
          <span
            className="font-mono tracking-wider"
            style={{ color: "#a78bfa", fontSize: "0.85rem" }}
          >
            {twText}
            {cursor}
          </span>
        </div>

        <div>
          <h1
            className="font-black text-white leading-none"
            style={{ fontSize: "12vw", letterSpacing: "-0.02em" }}
          >
            REEFAH TASNIA
          </h1>
          <h1
            className="font-black text-white leading-none"
            style={{ fontSize: "12vw", letterSpacing: "-0.02em" }}
          >
            HAQUE
          </h1>
        </div>

        <p
          className="italic"
          style={{ color: "#6b7280", fontSize: "0.85rem" }}
        >
          I build things, test them and figure out why they break.
        </p>

        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={scrollToProjects}
            className="w-full px-5 py-2.5 rounded-md text-sm font-medium text-white"
            style={{ backgroundColor: "#7c3aed" }}
          >
            View My Work
          </button>
          <a
            href="/Reefah_Tasnia_Haque_Digitalyst.pdf"
            download
            className="w-full px-5 py-2.5 rounded-md text-sm font-medium text-center"
            style={{ border: "1px solid #a78bfa", color: "#a78bfa" }}
          >
            Download CV
          </a>
        </div>
      </div>

      <style>{`
        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

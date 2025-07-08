"use client"

import { useState, useEffect } from "react"
import { aboutData, type Role } from "@/data/portfolioData"

const roles: { id: Role; label: string; style: string; selectedStyle: string }[] = [
  {
    id: "fullstack",
    label: "Full Stack Developer",
    style: "top-1/4 left-1/4 rotate-30",
    selectedStyle: "bg-cyan-400 text-black shadow-cyan-400/70",
  },
  {
    id: "ctf",
    label: "CTF Player",
    style: "bottom-1/3 left-1/4 rotate-3",
    selectedStyle: "bg-emerald-400 text-black shadow-emerald-400/70",
  },
  {
    id: "uiux",
    label: "UI/UX Designer",
    style: "top-1/4 right-1/4 -rotate-12",
    selectedStyle: "bg-purple-700 text-white shadow-purple-700/70",
  },
  {
    id: "management",
    label: "Management",
    style: "bottom-1/4 right-1/4 rotate-12",
    selectedStyle: "bg-pink-500 text-white shadow-pink-500/70",
  },
]

type HeroSectionProps = {
  activeRole: Role
  setActiveRole: (role: Role) => void
}

export default function HeroSection({ activeRole, setActiveRole }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden px-6 select-none">
      {/* Starry animated GIF background */}
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37f002aa-032d-480b-9aa7-474adef47ed6/daqohse-f79cb156-0096-4748-9f7e-39b15cf2e86e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ZjAwMmFhLTAzMmQtNDgwYi05YWE3LTQ3NGFkZWY0N2VkNlwvZGFxb2hzZS1mNzljYjE1Ni0wMDk2LTQ3NDgtOWY3ZS0zOWIxNWNmMmU4NmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J-x32M2EVAjG7wBPe_hvxGgyKH1dUGhBaoYqYjhUXW4"
        alt="Starry background"
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none opacity-100"
      />

      {/* Floating buttons */}
      {roles.map(({ id, label, style, selectedStyle }) => (
        <button
          key={id}
          onClick={() => setActiveRole(id)}
          className={`absolute px-6 py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 shadow-lg border-2 animate-float group ${style} ${
            activeRole === id
              ? `scale-110 shadow-2xl border-white/50 ring-2 ring-white/30 ${selectedStyle}`
              : "border-white/40 text-white bg-transparent hover:scale-105 hover:shadow-xl hover:border-white/60 hover:bg-white/10"
          }`}
          style={{ zIndex: 20 }}
          aria-pressed={activeRole === id}
        >
          <span className="relative z-10">{label}</span>
          {/* Glow effect for selected state */}
          {activeRole === id && <div className="absolute inset-0 rounded-xl bg-white/10 animate-pulse"></div>}
          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      ))}

      {/* Center content */}
      <div
        className={`text-center max-w-3xl z-10 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-green-400 font-semibold mb-4 tracking-wide">● Available For Work</p>

        {/* Glitch effect on name */}
        <h1 className="text-6xl font-extrabold mb-4 relative glitch-text" data-text={aboutData[activeRole].name}>
          {aboutData[activeRole].name}
        </h1>

        <p className="text-xl font-mono mb-10">{roles.find((r) => r.id === activeRole)?.label}</p>

        <button
          className="mx-auto border border-white rounded-full px-8 py-3 font-semibold text-white hover:bg-white hover:text-black transition"
          onClick={() => {
            const el = document.getElementById("contact")
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          Let's Connect 🤝
        </button>
      </div>

      {/* Glitch effect styles */}
      <style>{`
        .glitch-text {
          position: relative;
          color: white;
          font-weight: 900;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          overflow: hidden;
          opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-1 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.5deg);
          }
          10% {
            clip: rect(40px, 9999px, 95px, 0);
            transform: skew(0.2deg);
          }
          20% {
            clip: rect(25px, 9999px, 30px, 0);
            transform: skew(0.8deg);
          }
          30% {
            clip: rect(70px, 9999px, 75px, 0);
            transform: skew(-0.3deg);
          }
          40% {
            clip: rect(65px, 9999px, 95px, 0);
            transform: skew(0.4deg);
          }
          50% {
            clip: rect(10px, 9999px, 20px, 0);
            transform: skew(-0.1deg);
          }
          60% {
            clip: rect(80px, 9999px, 100px, 0);
            transform: skew(0.6deg);
          }
          70% {
            clip: rect(30px, 9999px, 50px, 0);
            transform: skew(-0.4deg);
          }
          80% {
            clip: rect(50px, 9999px, 60px, 0);
            transform: skew(0.2deg);
          }
          90% {
            clip: rect(15px, 9999px, 35px, 0);
            transform: skew(-0.2deg);
          }
          100% {
            clip: rect(60px, 9999px, 80px, 0);
            transform: skew(0.1deg);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(65px, 9999px, 80px, 0);
            transform: skew(-0.3deg);
          }
          15% {
            clip: rect(20px, 9999px, 40px, 0);
            transform: skew(0.4deg);
          }
          30% {
            clip: rect(85px, 9999px, 100px, 0);
            transform: skew(-0.1deg);
          }
          45% {
            clip: rect(35px, 9999px, 50px, 0);
            transform: skew(0.6deg);
          }
          60% {
            clip: rect(75px, 9999px, 90px, 0);
            transform: skew(-0.5deg);
          }
          75% {
            clip: rect(45px, 9999px, 65px, 0);
            transform: skew(0.2deg);
          }
          90% {
            clip: rect(55px, 9999px, 70px, 0);
            transform: skew(-0.3deg);
          }
          100% {
            clip: rect(25px, 9999px, 45px, 0);
            transform: skew(0.1deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CursorGlow() {
  const outerRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const mid = midRef.current
    const core = coreRef.current
    if (!outer || !mid || !core) return

    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    gsap.set([outer, mid, core], { opacity: 0 })
    gsap.set(outer, { x: cx, y: cy })
    gsap.set(mid, { x: cx, y: cy })
    gsap.set(core, { x: cx, y: cy })

    // Three layers at different lag speeds — creates depth parallax
    const qxOuter = gsap.quickTo(outer, "x", { duration: 1.8, ease: "power3.out" })
    const qyOuter = gsap.quickTo(outer, "y", { duration: 1.8, ease: "power3.out" })
    const qxMid   = gsap.quickTo(mid,   "x", { duration: 1.0, ease: "power3.out" })
    const qyMid   = gsap.quickTo(mid,   "y", { duration: 1.0, ease: "power3.out" })
    const qxCore  = gsap.quickTo(core,  "x", { duration: 0.35, ease: "power2.out" })
    const qyCore  = gsap.quickTo(core,  "y", { duration: 0.35, ease: "power2.out" })

    let revealed = false
    const onMove = (e: MouseEvent) => {
      if (!revealed) {
        gsap.to(outer, { opacity: 1, duration: 1.8, ease: "power2.out" })
        gsap.to(mid,   { opacity: 1, duration: 1.3, ease: "power2.out", delay: 0.1 })
        gsap.to(core,  { opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 })
        revealed = true
      }
      qxOuter(e.clientX); qyOuter(e.clientY)
      qxMid(e.clientX);   qyMid(e.clientY)
      qxCore(e.clientX);  qyCore(e.clientY)
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <>
      {/* Outer blob — deepest, slowest, largest. Morphs like a lava pool */}
      <div
        ref={outerRef}
        style={{
          position: "fixed",
          top: "-500px",
          left: "-500px",
          width: "1000px",
          height: "1000px",
          background:
            "radial-gradient(ellipse 55% 38% at 38% 32%, rgba(109,40,217,0.38) 0%, rgba(76,29,149,0.18) 40%, rgba(139,92,246,0.06) 65%, transparent 80%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 2,
          mixBlendMode: "screen",
          willChange: "transform",
          animation: "cg-morph-a 20s ease-in-out infinite",
        }}
      />

      {/* Mid blob — medium lag, different hue axis. Creates the swirl tension */}
      <div
        ref={midRef}
        style={{
          position: "fixed",
          top: "-320px",
          left: "-320px",
          width: "640px",
          height: "640px",
          background:
            "radial-gradient(ellipse 42% 62% at 58% 44%, rgba(124,58,237,0.55) 0%, rgba(167,139,250,0.22) 38%, rgba(196,181,253,0.06) 62%, transparent 78%)",
          filter: "blur(55px)",
          pointerEvents: "none",
          zIndex: 2,
          mixBlendMode: "screen",
          willChange: "transform",
          animation: "cg-morph-b 14s ease-in-out infinite reverse",
        }}
      />

      {/* Core — almost no lag, tight bright plume. The "drop of paint" */}
      <div
        ref={coreRef}
        style={{
          position: "fixed",
          top: "-180px",
          left: "-180px",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(220,210,255,0.55) 0%, rgba(196,181,253,0.32) 22%, rgba(167,139,250,0.14) 48%, rgba(124,58,237,0.04) 68%, transparent 82%)",
          filter: "blur(26px)",
          pointerEvents: "none",
          zIndex: 2,
          mixBlendMode: "screen",
          willChange: "transform",
          animation: "cg-morph-c 8s ease-in-out infinite",
        }}
      />

      <style>{`
        /* Organic blob morphing — 8-value border-radius to simulate fluid surface */
        @keyframes cg-morph-a {
          0%   { border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%; }
          20%  { border-radius: 38% 62% 70% 30% / 52% 68% 32% 48%; }
          40%  { border-radius: 74% 26% 38% 62% / 36% 74% 26% 64%; }
          60%  { border-radius: 30% 70% 58% 42% / 68% 28% 72% 32%; }
          80%  { border-radius: 56% 44% 28% 72% / 44% 58% 42% 56%; }
          100% { border-radius: 62% 38% 46% 54% / 60% 44% 56% 40%; }
        }
        @keyframes cg-morph-b {
          0%   { border-radius: 44% 56% 60% 40% / 56% 40% 60% 44%; }
          25%  { border-radius: 68% 32% 36% 64% / 38% 62% 38% 62%; }
          50%  { border-radius: 32% 68% 72% 28% / 64% 28% 72% 36%; }
          75%  { border-radius: 58% 42% 44% 56% / 44% 68% 32% 56%; }
          100% { border-radius: 44% 56% 60% 40% / 56% 40% 60% 44%; }
        }
        @keyframes cg-morph-c {
          0%   { border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%; }
          33%  { border-radius: 64% 36% 44% 56% / 40% 60% 40% 60%; }
          66%  { border-radius: 36% 64% 56% 44% / 64% 36% 64% 36%; }
          100% { border-radius: 50% 50% 60% 40% / 55% 45% 55% 45%; }
        }
      `}</style>
    </>
  )
}

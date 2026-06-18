"use client"

import { useState, useEffect, useRef } from "react"
import { aboutData } from "@/data/portfolioData"

const SESSION_KEY = "hasLoaded"
const MIN_DURATION = 2400

export default function LoadingScreen() {
  const [show] = useState(() => {
    if (typeof window !== "undefined") return !sessionStorage.getItem(SESSION_KEY)
    return false
  })

  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exiting" | "gone">("loading")
  const pctRef = useRef(0)

  useEffect(() => {
    if (!show) return

    // Preload the about image so it's in cache when screen exits
    const imgSrc = aboutData.fullstack.image
    const imgPromise = imgSrc
      ? new Promise<void>(res => {
          const img = new Image()
          img.onload = () => res()
          img.onerror = () => res()
          img.src = imgSrc
        })
      : Promise.resolve()

    const minTime = new Promise<void>(res => setTimeout(res, MIN_DURATION))
    const startTime = Date.now()
    let rafId: number

    // Count 0 → 88% over MIN_DURATION, then hold until assets ready
    const tick = () => {
      const elapsed = Date.now() - startTime
      const target = Math.min(88, Math.floor((elapsed / MIN_DURATION) * 88))
      if (target > pctRef.current) {
        pctRef.current = target
        setPct(target)
      }
      if (pctRef.current < 88) {
        rafId = requestAnimationFrame(tick)
      }
    }
    rafId = requestAnimationFrame(tick)

    Promise.all([minTime, imgPromise]).then(() => {
      cancelAnimationFrame(rafId)
      let p = pctRef.current
      // Quickly finish to 100%
      const finish = setInterval(() => {
        p = Math.min(100, p + 4)
        pctRef.current = p
        setPct(p)
        if (p >= 100) {
          clearInterval(finish)
          setTimeout(() => {
            setPhase("exiting")
            setTimeout(() => {
              setPhase("gone")
              sessionStorage.setItem(SESSION_KEY, "true")
            }, 800)
          }, 350)
        }
      }, 18)
    })

    return () => cancelAnimationFrame(rafId)
  }, [show])

  if (!show || phase === "gone") return null

  const display = String(pct).padStart(2, "0")
  const isComplete = pct === 100

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: phase === "exiting" ? "translateY(-100%)" : "translateY(0)",
        transition: phase === "exiting" ? "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
    >
      {/* Name label */}
      <p
        style={{
          fontSize: "0.58rem",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(167,139,250,0.45)",
          marginBottom: "2.75rem",
          fontFamily: "monospace",
        }}
      >
        Reefah Tasnia Haque
      </p>

      {/* Percentage counter */}
      <div
        style={{
          fontSize: "clamp(5rem, 14vw, 9rem)",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums",
          marginBottom: "2.75rem",
          color: isComplete ? "#c4b5fd" : "#f0f0f0",
          textShadow: isComplete ? "0 0 48px rgba(167,139,250,0.45)" : "none",
          transition: "color 0.5s ease, text-shadow 0.5s ease",
        }}
      >
        {display}
        <span
          style={{
            fontSize: "0.32em",
            color: "#a78bfa",
            verticalAlign: "0.18em",
            marginLeft: "0.06em",
          }}
        >
          %
        </span>
      </div>

      {/* Progress bar with traveling glow bead */}
      <div
        style={{
          width: "min(400px, 72vw)",
          height: "2px",
          backgroundColor: "rgba(255,255,255,0.07)",
          borderRadius: "2px",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Filled track */}
        <div
          style={{
            position: "absolute",
            inset: "0 auto 0 0",
            width: `${pct}%`,
            background: "linear-gradient(to right, rgba(109,40,217,0.85), #a78bfa)",
            borderRadius: "2px",
            transition: "width 80ms linear",
          }}
        />

        {/* Traveling glow bead at leading edge */}
        {pct > 0 && pct < 100 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: `${pct}%`,
              transform: "translate(-50%, -50%)",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#ede9fe",
              boxShadow: "0 0 12px 5px rgba(196,181,253,0.6)",
              transition: "left 80ms linear",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Completion flash */}
        {isComplete && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(109,40,217,0.85), #c4b5fd)",
              borderRadius: "2px",
              boxShadow: "0 0 20px 4px rgba(167,139,250,0.4)",
              animation: "ls-glow-pulse 0.5s ease-out",
            }}
          />
        )}
      </div>

      {/* Portfolio label */}
      <p
        style={{
          marginTop: "1.6rem",
          fontSize: "0.52rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.16)",
          fontFamily: "monospace",
        }}
      >
        Portfolio
      </p>

      <style>{`
        @keyframes ls-glow-pulse {
          0%   { opacity: 0.6; box-shadow: 0 0 6px 2px rgba(167,139,250,0.3); }
          100% { opacity: 1;   box-shadow: 0 0 22px 6px rgba(167,139,250,0.5); }
        }
      `}</style>
    </div>
  )
}

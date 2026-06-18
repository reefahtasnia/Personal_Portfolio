"use client"

import { useState, useEffect } from "react"

const TEXT = "reefah.portfolio()"
const SESSION_KEY = "hasLoaded"

export default function LoadingScreen() {
  const [show] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem(SESSION_KEY)
    }
    return false
  })

  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "holding" | "wiping" | "done">("typing")

  useEffect(() => {
    if (!show) return

    let index = 0
    const interval = setInterval(() => {
      if (index < TEXT.length) {
        index++
        setDisplayed(TEXT.slice(0, index))
      } else {
        clearInterval(interval)
        setPhase("holding")
        setTimeout(() => {
          setPhase("wiping")
          setTimeout(() => {
            setPhase("done")
            sessionStorage.setItem(SESSION_KEY, "true")
          }, 700)
        }, 500)
      }
    }, 60)

    return () => clearInterval(interval)
  }, [show])

  if (!show || phase === "done") return null

  return (
    <>
      {/* Base loading screen */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backgroundColor: "#0a0a0f" }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "1.1rem",
            letterSpacing: "0.15em",
            color: "#a78bfa",
          }}
        >
          {displayed}
          <span style={{ animation: "ls-blink 0.7s step-end infinite" }}>_</span>
        </p>
      </div>

      {/* Wipe panel — slides left → right over 700ms */}
      <div
        className="fixed inset-0 z-[10000]"
        style={{
          backgroundColor: "#0a0a0f",
          transformOrigin: "left center",
          transform: phase === "wiping" ? "scaleX(1)" : "scaleX(0)",
          transition: phase === "wiping" ? "transform 700ms ease-in-out" : "none",
        }}
      />

      <style>{`
        @keyframes ls-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  )
}

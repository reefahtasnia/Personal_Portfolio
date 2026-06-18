const ITEMS: { text: string; highlight: boolean }[] = [
  { text: "Software QA Engineer", highlight: false },
  { text: "Full Stack Developer", highlight: false },
  { text: "Creative & Leadership", highlight: false },
  { text: "MIST 2026", highlight: false },
  { text: "Dhaka, Bangladesh", highlight: false },
  { text: "Digitalyst @ Banglalink", highlight: true },
  { text: "CTF Player", highlight: false },
  { text: "Open to Work", highlight: true },
  { text: "Systems Thinker", highlight: false },
  { text: "Google Cybersecurity Certified", highlight: false },
  { text: "General Secretary, MIST Cyber Security Club", highlight: false },
  { text: "2nd Place, Anatolian Rover Challenge 2024", highlight: false },
]

function Strip() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {ITEMS.map((item, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: item.highlight ? "#a78bfa" : "rgba(255,255,255,0.45)",
              whiteSpace: "nowrap",
            }}
          >
            {item.text}
          </span>
          <span
            style={{
              color: "#a78bfa",
              margin: "0 1.5rem",
              fontSize: "0.55rem",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ●
          </span>
        </span>
      ))}
    </div>
  )
}

export default function MarqueeTicker() {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        height: "48px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          animation: "marquee-scroll 40s linear infinite",
          willChange: "transform",
        }}
      >
        <Strip />
        <Strip />
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

"use client"

import { type Role } from "@/data/portfolioData"

const PILLS: { id: Role; label: string }[] = [
  { id: "fullstack", label: "Full Stack Developer" },
  { id: "ctf", label: "SQA" },
  { id: "uiux", label: "UI/UX Designer" },
  { id: "management", label: "Management" },
]

type Props = {
  activeRole: Role
  setActiveRole: (role: Role) => void
}

export default function RoleSwitcherBar({ activeRole, setActiveRole }: Props) {
  return (
    <div
      className="sticky top-12 z-40 flex justify-center gap-2 flex-wrap px-4 py-3"
      style={{ backgroundColor: "#0a0a0f", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {PILLS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveRole(id)}
          className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
          style={
            activeRole === id
              ? {
                  backgroundColor: "rgba(124, 58, 237, 0.2)",
                  color: "#a78bfa",
                  borderColor: "rgba(167, 139, 250, 0.4)",
                }
              : {
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,0.4)",
                  borderColor: "rgba(255,255,255,0.1)",
                }
          }
          onMouseEnter={(e) => {
            if (activeRole !== id) {
              const el = e.currentTarget
              el.style.color = "rgba(255,255,255,0.75)"
              el.style.borderColor = "rgba(255,255,255,0.25)"
            }
          }}
          onMouseLeave={(e) => {
            if (activeRole !== id) {
              const el = e.currentTarget
              el.style.color = "rgba(255,255,255,0.4)"
              el.style.borderColor = "rgba(255,255,255,0.1)"
            }
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

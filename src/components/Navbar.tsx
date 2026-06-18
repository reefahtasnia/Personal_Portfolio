import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Gallery", href: "/gallery" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/reefahtasnia" },
  { label: "LinkedIn", href: "#" },
  { label: "CV", href: "/resume.pdf", download: true },
]

const LINK_STYLE = {
  color: "#888",
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  transition: "color 0.3s",
  fontWeight: 400,
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isGallery = location.pathname === "/gallery"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (location.pathname !== "/") return
      const anchorLinks = navLinks.filter(l => l.href.startsWith("#"))
      const positions = anchorLinks.map(l => {
        const el = document.querySelector(l.href)
        return el ? el.getBoundingClientRect().top + window.scrollY - 100 : 0
      })
      const idx = positions.findIndex((pos, i) => {
        const next = positions[i + 1] ?? Number.MAX_SAFE_INTEGER
        return window.scrollY >= pos && window.scrollY < next
      })
      if (idx !== -1) setActiveLink(anchorLinks[idx].href)
      else if (window.scrollY < (positions[0] ?? 0)) setActiveLink("")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) { setMobileOpen(false); return }
    if (location.pathname !== "/") { setMobileOpen(false); return }
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setActiveLink(href)
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          padding: "0 2rem",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: isScrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.12em",
            textDecoration: "none",
          }}
        >
          RTH
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={isGallery && link.href.startsWith("#") ? `/${link.href}` : link.href}
              style={{
                ...LINK_STYLE,
                color: activeLink === link.href && !isGallery ? "#fff" : "#888",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = activeLink === link.href && !isGallery ? "#fff" : "#888")}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}

          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.7rem" }}>|</span>

          {socialLinks.map((s, i, arr) => (
            <span key={s.label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <a
                href={s.href}
                download={s.download || undefined}
                target={s.download ? undefined : "_blank"}
                rel={s.download ? undefined : "noopener noreferrer"}
                style={LINK_STYLE}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
              >
                {s.label}
              </a>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "0.7rem" }}>/</span>
              )}
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.25rem",
            color: "#888",
          }}
          className="flex items-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            backgroundColor: "#0a0a0f",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
          className="md:hidden"
        >
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={isGallery && link.href.startsWith("#") ? `/${link.href}` : link.href}
              style={{
                color: "#888",
                fontSize: "1.5rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}

          <div style={{ width: "1px", height: "1.5rem", backgroundColor: "rgba(255,255,255,0.1)" }} />

          <div style={{ display: "flex", gap: "2rem" }}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                download={s.download || undefined}
                target={s.download ? undefined : "_blank"}
                rel={s.download ? undefined : "noopener noreferrer"}
                style={{
                  color: "#888",
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

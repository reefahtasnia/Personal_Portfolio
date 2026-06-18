import { useState } from "react"
import Navbar from "@/components/Navbar"
import { galleryImages } from "@/data/portfolioData"
import { Link } from "react-router-dom"

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null)

  const openImage = (index: number) => setActiveImage(index)
  const closeImage = () => setActiveImage(null)

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImage !== null) setActiveImage((activeImage + 1) % galleryImages.length)
  }

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImage !== null) setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0f", color: "#fff" }}>
      <Navbar />

      <main style={{ paddingTop: "6rem", paddingBottom: "5rem" }}>
        <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <Link
              to="/"
              style={{
                display: "inline-block",
                color: "#888",
                fontSize: "0.85rem",
                textDecoration: "none",
                marginBottom: "1.5rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              ← Back to portfolio
            </Link>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Gallery
            </h1>
            <p style={{ color: "#555", fontSize: "0.95rem", marginTop: "1rem" }}>
              Memorable moments from competitions, events, and achievements
            </p>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {galleryImages.map((item, index) => (
              <div
                key={index}
                onClick={() => openImage(index)}
                style={{
                  backgroundColor: "#111118",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "scale(1.02)"
                  el.style.borderColor = "rgba(255,255,255,0.28)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = "scale(1)"
                  el.style.borderColor = "rgba(255,255,255,0.08)"
                }}
              >
                <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div style={{ padding: "0.9rem 1rem" }}>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: "0.8rem",
                      letterSpacing: "0.04em",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal */}
      {activeImage !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={closeImage}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1100px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeImage}
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                zIndex: 10,
                background: "rgba(255,255,255,0.08)",
                border: "none",
                borderRadius: "50%",
                width: "2.25rem",
                height: "2.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
              }}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Image row with prev/next */}
              <div style={{ position: "relative" }}>
                {/* Prev */}
                <button
                  onClick={goToPrev}
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    background: "rgba(255,255,255,0.08)",
                    border: "none",
                    borderRadius: "50%",
                    width: "2.25rem",
                    height: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  aria-label="Previous"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <img
                  src={galleryImages[activeImage].image}
                  alt={galleryImages[activeImage].alt}
                  style={{
                    width: "100%",
                    maxHeight: "65vh",
                    objectFit: "contain",
                    display: "block",
                    borderRadius: "8px",
                  }}
                />

                {/* Next */}
                <button
                  onClick={goToNext}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    background: "rgba(255,255,255,0.08)",
                    border: "none",
                    borderRadius: "50%",
                    width: "2.25rem",
                    height: "2.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Story panel */}
              <div
                style={{
                  backgroundColor: "#111118",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "#f0f0f0",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    marginBottom: "0.6rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {galleryImages[activeImage].caption}
                </h3>
                <p style={{ color: "#d1d5db", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  {galleryImages[activeImage].story || "A memorable moment captured during one of my professional events or achievements."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/portfolioData";
import { GalleryHorizontal, ArrowDown, ArrowUp, Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const navigate = useNavigate();

  const openImage = (index: number) => {
    setActiveImage(index);
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImage !== null) {
      setActiveImage((activeImage + 1) % galleryImages.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImage !== null) {
      setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-20">
          <section className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-center neon-text mr-4">
                Gallery
              </h1>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Back</span>
                </button>
                
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </div>
            </div>
            
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
              A collection of memorable moments from competitions, events, and achievements
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openImage(index)}
                  className="glass-panel overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <GalleryHorizontal className="h-5 w-5 text-neon-blue dark:text-neon-purple" />
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modal for full screen image view */}
          {activeImage !== null && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              onClick={closeImage}
            >
              <div className="relative w-full max-w-6xl p-4 flex flex-col md:flex-row items-center md:items-start gap-4">
                <button
                  onClick={closeImage}
                  className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="relative flex-1 min-w-0">
                  <div className="relative">
                    <button
                      onClick={goToPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                      aria-label="Previous"
                    >
                      <ArrowUp className="h-6 w-6" />
                    </button>
                    
                    <img
                      src={galleryImages[activeImage].image}
                      alt={galleryImages[activeImage].alt}
                      className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    />
                    
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                      aria-label="Next"
                    >
                      <ArrowDown className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                <div className="md:max-w-xs w-full bg-gray-900/60 p-6 rounded-lg text-white backdrop-blur">
                  <h3 className="text-xl font-medium mb-4 text-neon-blue dark:text-neon-purple">
                    {galleryImages[activeImage].caption}
                  </h3>
                  <p className="text-gray-200">
                    {galleryImages[activeImage].story || "A memorable moment captured during one of my professional events or achievements."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

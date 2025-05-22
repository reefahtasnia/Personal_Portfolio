
import { useState } from "react";
import { galleryImages } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { GalleryHorizontal } from "lucide-react";

export default function GallerySection() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

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

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center neon-text">
          Gallery
        </h2>
        <p className="text-center text-lg mb-12">
          Memorable moments from competitions and events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="flex items-center gap-2 mb-2">
                  <GalleryHorizontal className="h-5 w-5 text-neon-blue dark:text-neon-purple" />
                  <p className="text-sm font-medium">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full screen image view */}
        {activeImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={closeImage}
          >
            <div className="relative w-full max-w-5xl p-4">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <img
                src={galleryImages[activeImage].image}
                alt={galleryImages[activeImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <p className="text-center text-white mt-4 font-medium">
                {galleryImages[activeImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

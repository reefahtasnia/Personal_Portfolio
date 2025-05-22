
import { useState, useEffect } from "react";
import { Moon, Sun, Home } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Only do section detection on main page
      if (location.pathname === "/") {
        // Find the current active section
        const sections = navLinks
          .filter(link => link.href.startsWith('#')) // Only process anchor links
          .map((link) => document.querySelector(link.href));
        
        const sectionPositions = sections.map((section) => {
          if (!section) return 0;
          return section.getBoundingClientRect().top + window.scrollY - 100;
        });

        const currentSectionIndex = sectionPositions.findIndex((position, index) => {
          const nextPosition = sectionPositions[index + 1] || Number.MAX_SAFE_INTEGER;
          return scrollPosition >= position && scrollPosition < nextPosition;
        });

        if (currentSectionIndex !== -1) {
          const filteredLinks = navLinks.filter(link => link.href.startsWith('#'));
          setActiveLink(filteredLinks[currentSectionIndex].href);
        } else if (scrollPosition < sectionPositions[0]) {
          setActiveLink(""); // At the top, before first section
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== "/") {
        // If we're not on the home page, don't prevent default
        // This will navigate to home page first
        setMobileMenuOpen(false);
        return;
      }
      
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveLink(href);
        setMobileMenuOpen(false);
      }
    } else {
      // For non-anchor links, just close the mobile menu
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-3",
        isScrolled
          ? "bg-white/80 dark:bg-near-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold neon-text">
            RTH
          </Link>
          
          {isGalleryPage && (
            <Link 
              to="/"
              className="ml-4 flex items-center text-sm font-medium transition-colors hover:text-neon-blue dark:hover:text-neon-purple"
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Link>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <Link
                key={link.name}
                to={isGalleryPage ? `/${link.href}` : link.href}
                className={cn(
                  "font-medium text-sm transition-all duration-300 hover:text-neon-blue dark:hover:text-neon-purple",
                  activeLink === link.href && !isGalleryPage ? "neon-text" : ""
                )}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium text-sm transition-all duration-300 hover:text-neon-blue dark:hover:text-neon-purple",
                  location.pathname === link.href ? "neon-text" : ""
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-near-black shadow-lg animate-slide-down">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <Link
                  key={link.name}
                  to={isGalleryPage ? `/${link.href}` : link.href}
                  className={cn(
                    "font-medium transition-all duration-300 py-2",
                    activeLink === link.href && !isGalleryPage ? "neon-text" : ""
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-medium transition-all duration-300 py-2",
                    location.pathname === link.href ? "neon-text" : ""
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

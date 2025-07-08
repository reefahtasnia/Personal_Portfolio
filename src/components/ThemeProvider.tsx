
import { createContext, useContext, useEffect } from "react";

// Simplified ThemeProvider that only supports dark mode
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
    // Remove the background override that might hide the starry background
    document.documentElement.style.removeProperty("background-color");
    document.body.style.removeProperty("background-color");
  }, []);

  return <>{children}</>;
}

// Dummy useTheme hook for compatibility
export function useTheme() {
  return {
    theme: "dark" as const,
    toggleTheme: () => {},
    setTheme: () => {},
    themeWasManuallyToggled: false,
    setThemeWasManuallyToggled: () => {},
  };
}

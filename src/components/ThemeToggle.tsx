"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Ensure we don't render the toggle during SSR to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return <div className="w-10 h-10" />;
  }

  return (
    <Button
      variant="outline"
      className="p-2 aspect-square flex items-center justify-center rounded-full border-chic-brown/20 bg-chic-bg/50 hover:bg-chic-brown/10 backdrop-blur-sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-chic-brown" />
      ) : (
        <Moon className="h-4 w-4 text-chic-brown" />
      )}
    </Button>
  );
}

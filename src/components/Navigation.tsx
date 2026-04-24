import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  onMenuOpen: () => void;
}

const Navigation = ({ onMenuOpen }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Hamburger */}
        <button
          onClick={onMenuOpen}
          className="flex flex-col gap-[5px] group p-2 -ml-2"
          aria-label="Open menu"
        >
          <span
            className={`block w-6 h-[1.5px] transition-colors duration-300 ${
              scrolled ? "bg-foreground" : "bg-cream"
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] transition-colors duration-300 ${
              scrolled ? "bg-foreground" : "bg-cream"
            }`}
          />
        </button>

        {/* Centered brand name — appears on scroll */}
        <a
          href="#"
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src="/thomason_logo.png" 
            alt="Thomason" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Order CTA */}
        <a
          href="#coffee"
          className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-all duration-300 border px-4 py-2 hidden md:block ${
            scrolled
              ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              : "border-cream/40 text-cream hover:bg-cream/10"
          }`}
        >
          Our Menu
        </a>

        {/* Mobile spacer */}
        <div className="w-10 md:hidden" />
      </div>
    </motion.nav>
  );
};

export default Navigation;

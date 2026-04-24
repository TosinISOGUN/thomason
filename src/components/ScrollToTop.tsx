import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute bottom-14 right-6 md:right-12 z-10 w-11 h-11 md:w-12 md:h-12 bg-foreground/10 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-foreground/20 transition-all duration-300 border border-primary-foreground/10"
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 14V2M8 2L2 8M8 2L14 8" />
      </svg>
    </button>
  );
};

export default ScrollToTop;

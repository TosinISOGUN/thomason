import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coffee.jpg";
import heroLatteArt from "@/assets/hero-latteart.jpg";
import heroInterior from "@/assets/hero-interior.jpg";

const slides = [
  { image: heroImg, alt: "Barista pouring latte art in warm morning light" },
  { image: heroLatteArt, alt: "Detailed latte art in a porcelain cup" },
  { image: heroInterior, alt: "Warm café interior bathed in golden light" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden grain-overlay">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          animate={{ opacity: i === current ? 1 : 0, scale: i === current ? 1 : 1.05 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
            fetchPriority={i === 0 ? "high" : "low"}
          />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-charcoal/35 z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-5xl font-light tracking-[0.25em] text-cream sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Thomason
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-6 font-sans text-sm font-light tracking-[0.3em] uppercase text-cream/80 sm:text-base"
        >
          Coffee, quietly perfected.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-cream/30"
          />
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-cream"
                : "w-1.5 h-1.5 bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import beansImg from "@/assets/beans-closeup.jpg";

const ParallaxQuote = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden grain-overlay">
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <img
          src={beansImg}
          alt="Coffee beans"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/50 z-[2]" />
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl"
        >
          <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-cream leading-relaxed">
            Sourced with care.
            <br />
            Roasted with patience.
          </p>
          <footer className="mt-8 font-sans text-[10px] tracking-[0.4em] uppercase text-cream/40">
            Since 2019 — Brooklyn, NY
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ParallaxQuote;

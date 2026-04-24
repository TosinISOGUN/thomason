import { motion } from "framer-motion";
import pourOverImg from "@/assets/pour-over.jpg";

const FeaturedExperience = () => {
  return (
    <section className="relative min-h-screen flex items-center grain-overlay overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pourOverImg}
          alt="Pour over coffee ritual in morning light"
          loading="lazy"
          width={960}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/60 mb-6">
            Featured Ritual
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1]">
            The Morning
            <br />
            Pour Over
          </h2>
          <p className="mt-8 font-sans text-sm md:text-base leading-relaxed text-cream/70 max-w-sm">
            A slow, meditative brew. Water meets bean at precisely 96°C.
            Three minutes of patience. A lifetime of flavor.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedExperience;

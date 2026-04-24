import { motion } from "framer-motion";

const mentions = [
  { source: "New York Times", quote: '"A quiet revolution in Brooklyn coffee."' },
  { source: "Eater NY", quote: '"The most intentional cup you\'ll find."' },
  { source: "Bon Appétit", quote: '"Where simplicity meets sophistication."' },
  { source: "Monocle", quote: '"A masterclass in restraint and flavor."' },
];

const PressStrip = () => {
  return (
    <section className="bg-background border-y border-border py-16 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-6 md:px-12"
      >
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-center mb-12">
          As Featured In
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {mentions.map((m, i) => (
            <motion.div
              key={m.source}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-sm italic text-muted-foreground leading-relaxed mb-3">
                {m.quote}
              </p>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/40">
                — {m.source}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PressStrip;

import { motion } from "framer-motion";
import handsImg from "@/assets/hands-coffee.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const BrandStory = () => {
  return (
    <section id="story" className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-foreground">
              Every cup begins
              <br />
              <em className="font-light">with intention.</em>
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed text-muted-foreground max-w-md">
              We believe coffee is a quiet ritual. A moment to pause,
              to breathe, to be present. Thomason exists for those moments.
            </p>
            <a
              href="#coffee"
              className="inline-block mt-10 font-sans text-xs tracking-[0.25em] uppercase border border-foreground/30 px-8 py-3.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Explore Our Coffee
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="overflow-hidden">
              <img
                src={handsImg}
                alt="Hands cradling a warm cup of coffee"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

import { motion } from "framer-motion";
import spaceInteriorImg from "@/assets/space-interior.jpg";
import spaceDetailImg from "@/assets/space-detail.jpg";
import handsImg from "@/assets/hands-coffee.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SpaceGallery = () => {
  return (
    <section id="space" className="bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-right"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Space
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground">
            Where quiet lives.
          </h2>
        </motion.div>

        {/* Asymmetric masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 overflow-hidden"
          >
            <img
              src={spaceInteriorImg}
              alt="Thomason café interior with natural light"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-5 overflow-hidden"
          >
            <img
              src={spaceDetailImg}
              alt="Handcrafted ceramic bowls on wooden shelves"
              loading="lazy"
              width={960}
              height={1280}
              className="w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-12 overflow-hidden"
          >
            <img
              src={handsImg}
              alt="An intimate moment with coffee"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full aspect-[21/9] object-cover hover:scale-[1.01] transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaceGallery;

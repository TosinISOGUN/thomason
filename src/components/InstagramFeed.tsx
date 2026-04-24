import { motion } from "framer-motion";
import insta1 from "@/assets/insta_1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta_4.jpg";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import espressoImg from "@/assets/espresso-shot.jpg";

const images = [
  { src: insta1, alt: "Iced coffee in sunlight" },
  { src: insta2, alt: "Fresh pastry on a plate" },
  { src: cappuccinoImg, alt: "Cappuccino with latte art" },
  { src: insta3, alt: "Coffee and a book by the window" },
  { src: espressoImg, alt: "Espresso being pulled" },
  { src: insta4, alt: "Hands holding coffee beans" },
];

const InstagramFeed = () => {
  return (
    <section className="bg-background py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Follow Along
        </p>
        <a
          href="https://instagram.com/thomason.coffee"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-2xl md:text-3xl font-light text-foreground hover:text-accent transition-colors duration-300"
        >
          @thomason.coffee
        </a>
      </motion.div>

      {/* Full-width grid, no container padding */}
      <div className="grid grid-cols-3 md:grid-cols-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="overflow-hidden aspect-square group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={540}
              height={540}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InstagramFeed;

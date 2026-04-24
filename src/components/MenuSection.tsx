import { motion } from "framer-motion";
import { useState } from "react";
import cappuccinoImg from "@/assets/cappuccino.jpg";
import pourOverImg from "@/assets/pour-over.jpg";
import espressoImg from "@/assets/espresso-shot.jpg";

const menuItems = [
  {
    name: "The Ritual",
    description: "Pour over, single origin, clean and bright",
    price: "6.00",
    image: pourOverImg,
  },
  {
    name: "Morning Fog",
    description: "Cappuccino with oat milk, velvety and warm",
    price: "6.00",
    image: cappuccinoImg,
  },
  {
    name: "The Essential",
    description: "Double espresso, rich crema, bold finish",
    price: "4.50",
    image: espressoImg,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface MenuSectionProps {
  onViewFullMenu: () => void;
}

const MenuSection = ({ onViewFullMenu }: MenuSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="coffee" className="bg-secondary py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Signature
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground">
              Our Coffee
            </h2>
          </div>
          <button
            onClick={onViewFullMenu}
            className="inline-block font-sans text-xs tracking-[0.25em] uppercase border border-foreground/30 px-8 py-3.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 self-start md:self-auto"
          >
            View Full Menu
          </button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={onViewFullMenu}
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={960}
                  height={1280}
                  className={`w-full aspect-[3/4] object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="font-sans text-sm text-foreground/60 pt-1 shrink-0">
                  ${item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

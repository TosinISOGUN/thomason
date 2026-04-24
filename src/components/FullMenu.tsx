import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface FullMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = [
  {
    name: "Espresso",
    description: "Bold, concentrated, timeless.",
    items: [
      { name: "The Essential", desc: "Double espresso, rich crema, bold finish", price: "4.50" },
      { name: "Cortado", desc: "Equal parts espresso and steamed milk", price: "5.00" },
      { name: "Flat White", desc: "Velvety microfoam, double ristretto", price: "5.50" },
      { name: "Americano", desc: "Espresso lengthened with hot water", price: "4.50" },
      { name: "Macchiato", desc: "Espresso marked with a dot of foam", price: "4.50" },
    ],
  },
  {
    name: "Slow Brew",
    description: "Patient, nuanced, rewarding.",
    items: [
      { name: "The Ritual", desc: "Pour over, single origin, clean and bright", price: "6.00" },
      { name: "Cold Brew", desc: "18-hour steeped, smooth and deep", price: "5.50" },
      { name: "Iced Filter", desc: "Japanese flash brew over ice", price: "5.50" },
      { name: "Chemex", desc: "Clean, full-bodied, for two", price: "10.00" },
    ],
  },
  {
    name: "Milk & Signature",
    description: "Crafted with warmth.",
    items: [
      { name: "Morning Fog", desc: "Cappuccino with oat milk, velvety and warm", price: "6.00" },
      { name: "Latte", desc: "Espresso, steamed milk, choice of oat or whole", price: "5.50" },
      { name: "Dirty Chai", desc: "Spiced chai with a shot of espresso", price: "6.50" },
      { name: "Matcha Latte", desc: "Ceremonial grade, stone-ground, with oat milk", price: "6.50" },
      { name: "Golden Milk", desc: "Turmeric, ginger, honey, steamed oat", price: "6.00" },
    ],
  },
  {
    name: "Baked",
    description: "Simple, fresh, honest.",
    items: [
      { name: "Almond Croissant", desc: "Twice-baked, frangipane filled", price: "5.50" },
      { name: "Banana Bread", desc: "Brown butter, walnut, seasonal", price: "4.50" },
      { name: "Cardamom Bun", desc: "Swedish-style, lightly spiced", price: "5.00" },
      { name: "Pain au Chocolat", desc: "Laminated dough, dark chocolate", price: "5.00" },
      { name: "Seasonal Cookie", desc: "Ask your barista — it changes weekly", price: "4.00" },
    ],
  },
];

const FullMenu = ({ isOpen, onClose }: FullMenuProps) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] bg-background overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="mx-auto max-w-5xl px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
              <button
                onClick={onClose}
                className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <span className="font-serif text-lg tracking-[0.15em] text-foreground">
                Thomason
              </span>
              <div className="w-16" />
            </div>
          </div>

          {/* Menu content */}
          <div className="mx-auto max-w-5xl px-6 md:px-12 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                The Menu
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground mb-4">
                What we brew.
              </h1>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md mb-16">
                Every item on our menu reflects the same care we put into our space — simple, honest, and made with intention.
              </p>
            </motion.div>

            {/* Category tabs */}
            <div className="flex gap-2 md:gap-4 mb-16 overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
              {menuCategories.map((cat, i) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(i)}
                  className={`whitespace-nowrap font-sans text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                    activeCategory === i
                      ? "bg-foreground text-background border-foreground"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Active category items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-10">
                  {menuCategories[activeCategory].description}
                </p>

                <div className="divide-y divide-border">
                  {menuCategories[activeCategory].items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="py-6 md:py-8 flex items-start justify-between gap-6 group"
                    >
                      <div className="flex-1">
                        <h3 className="font-serif text-lg md:text-xl font-light text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      <span className="font-sans text-sm text-foreground/70 pt-1 shrink-0">
                        ${item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Note */}
            <div className="mt-16 pt-10 border-t border-border">
              <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-md">
                All milk drinks available with oat, almond, or whole milk. Oat milk is our default.
                Seasonal specials rotate monthly — ask your barista.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullMenu;

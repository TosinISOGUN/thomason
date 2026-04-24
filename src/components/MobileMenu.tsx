import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Coffee", href: "#coffee" },
  { label: "The Space", href: "#space" },
  { label: "Visit", href: "#visit" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 bottom-0 z-[70] w-full max-w-sm bg-background"
          >
            <div className="flex flex-col h-full px-8 py-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="self-start p-2 -ml-2 mb-12"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-8">
                {menuLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                    className="font-serif text-3xl font-light text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom info */}
              <div className="mt-auto">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Coffee, quietly perfected.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

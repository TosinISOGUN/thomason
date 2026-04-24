import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VisitSection = () => {
  return (
    <section id="visit" className="bg-primary pt-16 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile Logo */}
            <div className="md:hidden mb-6">
              <img 
                src="/thomason_logo.png" 
                alt="Thomason" 
                className="h-14 w-auto object-contain opacity-40" 
              />
            </div>

            <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">
              Visit
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-primary-foreground leading-tight">
              Find us.
            </h2>
            <p className="mt-8 font-sans text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
              We'd love for you to experience Thomason in person. Pull up a chair, take a breath, and let us make you something beautiful.
            </p>

            {/* Laptop Logo */}
            <div className="hidden md:block mt-12">
              <img 
                src="/thomason_logo.png" 
                alt="Thomason" 
                className="h-28 w-auto object-contain opacity-30" 
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">
                Address
              </p>
              <p className="font-serif text-lg text-primary-foreground/90">
                42 Quiet Lane
                <br />
                Brooklyn, NY 11201
              </p>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">
                Hours
              </p>
              <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">
                Monday – Friday: 7am – 5pm
                <br />
                Saturday – Sunday: 8am – 6pm
              </p>
            </div>

            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-3">
                Contact
              </p>
              <p className="font-sans text-sm text-primary-foreground/70">
                hello@thomason.coffee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;

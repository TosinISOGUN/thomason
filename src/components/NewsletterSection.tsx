import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
            Join the ritual.
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10 max-w-md mx-auto">
            Seasonal menus, quiet stories, and first access to new offerings—delivered to your inbox.
          </p>

          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans text-sm text-accent tracking-wide"
            >
              Thank you. We'll be in touch.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-foreground/20 px-5 py-3.5 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 transition-colors"
              />
              <button
                type="submit"
                className="font-sans text-xs tracking-[0.25em] uppercase bg-foreground text-background px-8 py-3.5 hover:bg-accent transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;

import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="relative bg-primary pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] tracking-wide text-primary-foreground/30">
            © {new Date().getFullYear()} Thomason Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-[10px] tracking-wide text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import ParallaxQuote from "@/components/ParallaxQuote";
import MenuSection from "@/components/MenuSection";
import FullMenu from "@/components/FullMenu";
import SpaceGallery from "@/components/SpaceGallery";
import FeaturedExperience from "@/components/FeaturedExperience";
import PressStrip from "@/components/PressStrip";
import InstagramFeed from "@/components/InstagramFeed";
import NewsletterSection from "@/components/NewsletterSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  return (
    <>
      <Navigation onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <FullMenu isOpen={fullMenuOpen} onClose={() => setFullMenuOpen(false)} />
      <main>
        <HeroSection />
        <BrandStory />
        <ParallaxQuote />
        <MenuSection onViewFullMenu={() => setFullMenuOpen(true)} />
        <SpaceGallery />
        <FeaturedExperience />
        <PressStrip />
        <InstagramFeed />
        <NewsletterSection />
        <VisitSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;

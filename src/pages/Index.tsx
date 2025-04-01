
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import JurySection from "@/components/JurySection";
import SponsorsSection from "@/components/SponsorsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isAnchor = target.tagName === 'A' && target.getAttribute('href')?.startsWith('#');
      
      if (isAnchor) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <PrizesSection />
      <TimelineSection />
      <ChallengeSection />
      <JurySection />
      <SponsorsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;

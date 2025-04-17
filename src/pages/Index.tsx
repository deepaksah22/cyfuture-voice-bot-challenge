import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EligibilitySection from "@/components/EligibilitySection";
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
              top: targetElement.offsetTop - 30,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />

      {/* Instead of space-y-0, use direct stacking and spacing per section */}
      <HeroSection />
      <div className="my-10" />
      <PrizesSection />
      <div className="my-10" />
      <EligibilitySection />
      <div className="my-10" />
      <ChallengeSection />
      <div className="my-10" />
      <TimelineSection />
      <div className="my-10" />
      <JurySection />
      <div className="my-10" />
      <SponsorsSection />
      <div className="my-10" />
      <FaqSection />

      <Footer />
    </div>
  );
};

export default Index;

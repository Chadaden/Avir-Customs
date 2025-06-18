import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import MissionSection from "@/components/mission-section";
import TeamSection from "@/components/team-section";
import ProcessSection from "@/components/process-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-dark text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <TeamSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}

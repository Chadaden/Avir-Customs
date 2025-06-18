import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImg from "@assets/7bd67264-d2bf-45c0-9eab-de445b0c15b4_1750258299391.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Avi.r</span>
          <span className="signal-red block sm:inline"> Customs</span>
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 font-light">
          Deep in the heart of Durban's industrial district, we breathe new life into 25-year-old Land Rover Defenders
        </p>
        
        <div>
          <Button 
            onClick={scrollToAbout}
            className="bg-signal-red hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explore the Build
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-white text-xl opacity-70" />
      </div>
    </section>
  );
}

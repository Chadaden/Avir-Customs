import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* Placeholder for logo icon if re-added */}
              {/* <div className="bg-signal-red w-8 h-6 transform -skew-x-12"></div> */}
              <span className="text-xl font-bold">
                <span className="text-white">Avi's</span>
                <span className="signal-red"> Customs</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('mission')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Mission
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Gallery
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-signal-red text-white hover:bg-red-600 transition-colors"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
            >
              Gallery
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-signal-red text-white block mx-3 my-2"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

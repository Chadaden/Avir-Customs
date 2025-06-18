import { useState } from "react";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your message.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in your Land Rover restoration services.

Name: ${formData.name}
Email: ${formData.email}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/27760464792?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message has been prepared and WhatsApp is opening.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <span className="signal-red"> Begin?</span>
          </h2>
          <div className="w-20 h-1 bg-golden-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            "Every Defender we restore carries a timeless legacy, bridging the gap between heritage and the horizons ahead."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-signal-red rounded-full flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:avi.r.customs@gmail.com" 
                    className="text-white hover:text-golden-yellow transition-colors"
                  >
                    avi.r.customs@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone - Avesh */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center">
                  <Phone className="text-slate-dark w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Avesh</p>
                  <a 
                    href="tel:+27760464792" 
                    className="text-white hover:text-golden-yellow transition-colors"
                  >
                    +27 76 046 4792
                  </a>
                </div>
              </div>

              {/* Phone - Yuvidiya */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-signal-red rounded-full flex items-center justify-center">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Yuvidiya</p>
                  <a 
                    href="tel:+27820626924" 
                    className="text-white hover:text-golden-yellow transition-colors"
                  >
                    +27 82 062 6924
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center">
                  <MapPin className="text-slate-dark w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Workshop Location</p>
                  <p className="text-white">
                    16 Bassa Crescent<br />
                    Queensmead Industrial<br />
                    Queensburgh 4093
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-6">
                <Button 
                  onClick={() => window.open('https://wa.me/27760464792', '_blank')}
                  className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.102"/>
                  </svg>
                  Start Your Project on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-charcoal rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-400 text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-2 bg-slate-dark border-gray-600 text-white focus:border-signal-red"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-400 text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-2 bg-slate-dark border-gray-600 text-white focus:border-signal-red"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-400 text-sm font-medium">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your Defender and restoration goals..."
                    className="mt-2 bg-slate-dark border-gray-600 text-white focus:border-signal-red"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-signal-red hover:bg-red-600 text-white font-semibold transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gray-800">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-signal-red w-8 h-6 transform -skew-x-12"></div>
            <span className="golden-yellow font-bold text-xl">AVI.R</span>
            <span className="text-white font-light text-sm">CUSTOMS</span>
          </div>
          <p className="text-gray-400 mb-4">Land Rover Defenders. Reimagined.</p>
          <p className="text-gray-500 text-sm">
            © 2024 Avi's Customs. All rights reserved. | Crafted with passion in Durban, South Africa.
          </p>
        </div>
      </footer>
    </section>
  );
}

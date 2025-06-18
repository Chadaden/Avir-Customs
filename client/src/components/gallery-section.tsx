import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import galleryImg1 from "@assets/3df6e336-e7bd-4503-81f2-c63e3d38677b_1750258299390.jpg";
import galleryImg2 from "@assets/7bd67264-d2bf-45c0-9eab-de445b0c15b4_1750258299391.jpg";
import galleryImg3 from "@assets/82cb7b80-da5a-4b8b-ba8a-dd6f2318e310_1750258299392.jpg";
import galleryImg4 from "@assets/87cce036-7af0-4802-bce1-621d72c2497f_1750258299392.jpg";
import galleryImg5 from "@assets/4369e8c1-619d-448d-81d0-d8aeac734602_1750258299393.jpg";
import galleryImg6 from "@assets/9444e1e0-4c72-4d24-af7f-89f7a50bc624_1750258299394.jpg";
import galleryImg7 from "@assets/be892460-12ef-4994-bb5b-3e0c2469057a_1750258299394.jpg";

const galleryImages = [
  {
    src: galleryImg1,
    alt: "Land Rover Defender front detail with custom headlights and grille",
    category: "after"
  },
  {
    src: galleryImg2,
    alt: "Complete Land Rover Defender restoration in workshop setting",
    category: "workshop"
  },
  {
    src: galleryImg3,
    alt: "Land Rover Defender wheel and tire detail showing off-road capability",
    category: "after"
  },
  {
    src: galleryImg4,
    alt: "Atmospheric lighting on completed Land Rover Defender",
    category: "after"
  },
  {
    src: galleryImg5,
    alt: "Land Rover Defender front end with premium finish",
    category: "after"
  },
  {
    src: galleryImg6,
    alt: "Custom red leather interior of restored Land Rover Defender",
    category: "after"
  },
  {
    src: galleryImg7,
    alt: "Premium leather detailing in Land Rover Defender interior",
    category: "after"
  }
];

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Before", value: "before" },
  { label: "After", value: "after" },
  { label: "Workshop", value: "workshop" }
];

export default function GallerySection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="signal-red"> Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-golden-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Witness the transformation. Each project tells a unique story of resurrection and renewal.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                variant={activeFilter === option.value ? "default" : "outline"}
                className={`${
                  activeFilter === option.value 
                    ? "bg-signal-red text-white hover:bg-red-600" 
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 border-gray-600"
                } px-6 py-2 rounded-full font-medium transition-colors`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${activeFilter}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl hover:transform hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-signal-red transition-colors"
              >
                <X className="h-8 w-8" />
              </Button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={lightboxImage}
                alt=""
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

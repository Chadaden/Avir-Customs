import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import aboutImg from "@assets/82cb7b80-da5a-4b8b-ba8a-dd6f2318e310_1750258299392.jpg";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Who</span>
              <span className="signal-red"> We Are</span>
            </h2>
            <div className="w-20 h-1 bg-golden-yellow mb-8"></div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Avi's Customs, we don't just restore Land Rover Defenders – we breathe new life into legends. 
              Every bolt, every panel, every stitch tells a story of meticulous craftsmanship and unwavering passion.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Based in the heart of Durban, our workshop is where automotive dreams become reality. We're 
              <span className="golden-yellow font-semibold"> crafting companions for South Africa's wild beauty</span>, 
              building vehicles that don't just traverse landscapes – they conquer them.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the first sketch to the final polish, every Defender that leaves our workshop carries our 
              signature blend of heritage respect and modern innovation.
            </p>
          </div>
          
          <div>
            <img 
              src={aboutImg}
              alt="Land Rover Defender restoration in progress at Avi's Customs workshop" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

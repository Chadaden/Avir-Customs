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
              Deep in the heart of Durban's industrial district, we breathe new life into 25-year-old Land Rover Defenders. 
              At Avi.r Customs, we reimagine these icons with robust luxury, crafting companions for South Africa's wild beauty.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Every restoration project tells a story of meticulous craftsmanship and unwavering passion. We don't just restore vehicles - 
              <span className="golden-yellow font-semibold"> we craft legends that honor the Defender's heritage</span> 
              while embracing modern luxury and performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the first bolt to the final polish, every Defender that leaves our workshop carries our 
              signature blend of authentic restoration and contemporary innovation.
            </p>
          </div>
          
          <div>
            <img 
              src={aboutImg}
              alt="Land Rover Defender restoration in progress at Avi.r Customs workshop" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

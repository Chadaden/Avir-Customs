import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function MissionSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="mission" className="py-20 bg-slate-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="signal-red"> Mission</span>
          </h2>
          <div className="w-20 h-1 bg-signal-red mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              To build the best Defenders in South Africa, where every part is custom or brand new, 
              and luxury meets adventure.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              At Avi.r Customs, we reimagine these icons with robust luxury, crafting companions for South Africa's wild beauty. 
              Our mission extends beyond restoration – we're creating timeless machines built for the modern adventurer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

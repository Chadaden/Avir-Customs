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
              To preserve the iconic spirit of Land Rover Defenders while elevating them to meet the demands 
              of modern adventurers. We bridge the gap between classic heritage and contemporary performance, 
              ensuring every restoration honors the past while embracing the future.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission extends beyond restoration – we're guardians of automotive history, 
              creating timeless machines that will inspire generations of explorers to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Wrench, Hammer, Cog, CheckCircle } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Stripping",
    description: "Complete disassembly and assessment. Every component is carefully catalogued and evaluated for restoration potential.",
    icon: Wrench,
    hoverColor: "hover:border-red-500"
  },
  {
    number: 2,
    title: "Fabrication",
    description: "Precision metalwork and custom fabrication. Damaged components are restored or recreated to original specifications.",
    icon: Hammer,
    hoverColor: "hover:border-yellow-400"
  },
  {
    number: 3,
    title: "Assembly",
    description: "Methodical reassembly with upgraded components. Modern reliability meets classic design principles.",
    icon: Cog,
    hoverColor: "hover:border-red-500"
  },
  {
    number: 4,
    title: "Quality Control",
    description: "Rigorous testing and final inspection. Every system is validated before delivery to ensure perfection.",
    icon: CheckCircle,
    hoverColor: "hover:border-yellow-400"
  }
];

export default function ProcessSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="process" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Restoration</span>
            <span className="signal-red"> Process</span>
          </h2>
          <div className="w-20 h-1 bg-golden-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every Defender undergoes our meticulous four-stage transformation, 
            ensuring perfection in every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                className="text-center"
              >
                <div className={`bg-charcoal rounded-2xl p-8 h-full border border-gray-700 ${step.hoverColor} transition-colors duration-300`}>
                  <div className={`w-16 h-16 ${step.number % 2 === 1 ? 'bg-signal-red' : 'bg-golden-yellow'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`${step.number % 2 === 1 ? 'text-white' : 'text-slate-dark'} w-8 h-8`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.number}. {step.title}</h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

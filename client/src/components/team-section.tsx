import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const executiveTeam = [
  {
    name: "Avesh",
    role: "Founder & Lead Craftsman",
    description: "Master of restoration with 15+ years experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    borderColor: "border-red-500"
  },
  {
    name: "Yuvidiya",
    role: "Operations Director",
    description: "Strategic operations and client relations expert",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    borderColor: "border-yellow-400"
  },
  {
    name: "Zito",
    role: "Technical Director",
    description: "Engineering precision and innovation specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    borderColor: "border-red-500"
  }
];

const productionCrew = [
  {
    name: "Sydney",
    role: "Fabrication Specialist",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Steph",
    role: "Paint & Finish Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Felix",
    role: "Engine Restoration",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
  },
  {
    name: "Thabiso",
    role: "Quality Control",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
  }
];

export default function TeamSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="team" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">More Than Mechanics.</span>
          </h2>
          <p className="text-2xl golden-yellow font-light mb-4">Storytellers of Steel and Soul.</p>
          <div className="w-20 h-1 bg-golden-yellow mx-auto"></div>
        </motion.div>

        {/* Executive Team */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 ${member.borderColor}`}
                />
                <h4 className="text-xl font-semibold text-white mb-2">{member.name}</h4>
                <p className={`font-medium mb-2 ${member.borderColor.includes('red') ? 'signal-red' : 'golden-yellow'}`}>
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Production Crew */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Production Crew</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productionCrew.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-gray-600"
                />
                <h5 className="text-white font-medium">{member.name}</h5>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

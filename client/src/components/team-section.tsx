import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import aveshImg from "@assets/Avesh_1750261429889.jpg";
import yuvidiyaImg from "@assets/Yuvidiya_1750261429895.jpg";
import zitoImg from "@assets/Zito_1750261429888.jpg";
import sydneyImg from "@assets/Sydney_1750261429893.jpg";
import stephImg from "@assets/Steph_1750261429893.jpg";
import felixImg from "@assets/Felix_1750261429891.jpg";
import thabisoImg from "@assets/Thabiso_1750261429894.jpg";
import danteImg from "@assets/Dante_1750261429890.jpg";
import chikoImg from "@assets/Chiko_1750261429890.jpg";
import rickyImg from "@assets/Ricky_1750261429892.jpg";

const executiveTeam = [
  {
    name: "Avesh",
    role: "Founder & Lead Designer",
    description: "The visionary behind every restoration project",
    image: aveshImg,
    borderColor: "border-signal-red"
  },
  {
    name: "Yuvidiya", 
    role: "Operations Director",
    description: "Ensuring every detail meets our premium standards",
    image: yuvidiyaImg,
    borderColor: "border-golden-yellow"
  },
  {
    name: "Zito",
    role: "Technical Manager", 
    description: "Master of mechanical precision and innovation",
    image: zitoImg,
    borderColor: "border-signal-red"
  }
];

const productionCrew = [
  { name: "Sydney", role: "Lead Technician", image: sydneyImg },
  { name: "Steph", role: "Restoration Specialist", image: stephImg },
  { name: "Felix", role: "Paint & Finish Expert", image: felixImg },
  { name: "Thabiso", role: "Engine Specialist", image: thabisoImg },
  { name: "Dante", role: "Interior Craftsman", image: danteImg },
  { name: "Chiko", role: "Quality Inspector", image: chikoImg },
  { name: "Ricky", role: "Parts & Logistics", image: rickyImg }
];

export default function TeamSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="team" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">More Than Mechanics.</span>
          </h2>
          <p className="text-2xl golden-yellow font-light mb-4">Storytellers of Steel and Soul.</p>
          <div className="w-20 h-1 bg-golden-yellow mx-auto"></div>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Executive Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <div 
                key={member.name}
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
              </div>
            ))}
          </div>
        </div>

        {/* Production Crew */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Production Crew</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productionCrew.map((member, index) => (
              <div 
                key={member.name}
                className="text-center"
              >
                <img 
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-2 border-gray-600"
                />
                <h5 className="text-white font-medium">{member.name}</h5>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
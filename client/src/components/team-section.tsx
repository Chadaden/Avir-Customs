import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import aveshImg from "@assets/2afcc629-9b51-45f9-843f-b0dd69f43659_1750257951447.jpg";
import yuvidiyaImg from "@assets/2fb93a67-1076-4922-bc4a-5d58d91adedb_1750257951448.jpg";
import zitoImg from "@assets/8c62f278-8075-4bcc-9b5d-7ffb3d0882d1_1750257951449.jpg";
import sydneyImg from "@assets/9d0a87c9-9851-40e5-b5ea-3fb289ce72c6_1750257951450.jpg";
import stephImg from "@assets/98cc89a1-aafb-4c1f-b8f9-360d1aa3c173_1750257951450.jpg";
import felixImg from "@assets/680caf2f-78f8-4d52-aa7f-e8e5af34779b_1750257951451.jpg";
import thabisoImg from "@assets/87678c2d-0d90-4ee8-8cc3-cc7ec1f35152_1750257951452.jpg";

const executiveTeam = [
  {
    name: "Avesh",
    role: "Founder & Lead Craftsman",
    description: "Master of restoration with 15+ years experience",
    image: aveshImg,
    borderColor: "border-red-500"
  },
  {
    name: "Yuvidiya",
    role: "Operations Director",
    description: "Strategic operations and client relations expert",
    image: yuvidiyaImg,
    borderColor: "border-yellow-400"
  },
  {
    name: "Zito",
    role: "Technical Director",
    description: "Engineering precision and innovation specialist",
    image: zitoImg,
    borderColor: "border-red-500"
  }
];

const productionCrew = [
  {
    name: "Sydney",
    role: "Fabrication Specialist",
    image: sydneyImg
  },
  {
    name: "Steph",
    role: "Paint & Finish Expert",
    image: stephImg
  },
  {
    name: "Felix",
    role: "Engine Restoration",
    image: felixImg
  },
  {
    name: "Thabiso",
    role: "Quality Control",
    image: thabisoImg
  }
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

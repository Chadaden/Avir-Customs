import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import aveshImg from "@assets/2afcc629-9b51-45f9-843f-b0dd69f43659_1750257951447.jpg";
import yuvidiyaImg from "@assets/2fb93a67-1076-4922-bc4a-5d58d91adedb_1750257951448.jpg";
import zitoImg from "@assets/8c62f278-8075-4bcc-9b5d-7ffb3d0882d1_1750257951449.jpg";
import sydneyImg from "@assets/9d0a87c9-9851-40e5-b5ea-3fb289ce72c6_1750257951450.jpg";
import stephImg from "@assets/680caf2f-78f8-4d52-aa7f-e8e5af34779b_1750257951451.jpg";
import felixImg from "@assets/87678c2d-0d90-4ee8-8cc3-cc7ec1f35152_1750257951452.jpg";
import thabisoImg from "@assets/bb9adb5a-ca05-4312-85eb-dba35e5cdaaa_1750257951453.jpg";
import danteImg from "@assets/c919daeb-6791-4187-ac64-dd0209d9de5b_1750257951453.jpg";
import chikoImg from "@assets/98cc89a1-aafb-4c1f-b8f9-360d1aa3c173_1750257951450.jpg";
import rickyImg from "@assets/dd5c3643-8142-4050-a086-2a1cc2b7b54c_1750257951454.jpg";

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
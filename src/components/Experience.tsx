import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Products & Strategy",
    company: "Dell",
    period: "2024-Present",
    description: [
      "Facing rapid AI market growth, I led Dell Pro AI Studio's v1 strategy, execution against defined roadmap, securing executive buy-in for key AI investments, positioning Dell as an industry leader.",
      "Identifying AI opportunities, I developed and implemented impactful features with cross-functional teams, driving research using sources like Crunchbase, GLG, IDC and more.",
      "To optimize Dell's trusted updates platform, I managed its roadmap, using data to prioritize enhancements that drove reduction in calls and dispatches."
    ]
  },
  {
    title: "Venture Capital Analyst",
    company: "Primodial.io",
    period: "2023-2024",
    description: [
      "I sourced $250K in deals (e-commerce, AI, home services) with 2X return.",
      "Financial Analysis & Valuation: My MBA finance built custom unit economics and cash flow models, now standard at Primordial.io.",
      "Ecosystem Development & M&A: I drove 3 acquisitions, built 15+ partnerships, reducing risk by 40%.",
      "Technology Trend Analysis: I identified early disruptive tech, yielding a strong 3.5X investment return."
    ]
  },
  {
    title: "Principal Product Manager, Technical Advisor to CTO",
    company: "Microsoft",
    period: "2021-2022",
    description: [
      "Served as technical advisor to the CTO, leading critical strategic initiatives and providing technical leadership.",
      "Developed and implemented product strategies that aligned with Microsoft's technological vision.",
      "Led cross-functional teams to deliver innovative solutions that addressed complex business challenges.",
      "Provided mentorship to junior product managers, fostering growth and development within the organization."
    ]
  },
  {
    title: "Senior Product Manager, Startup Ecosystem Development & Innovation",
    company: "Microsoft",
    period: "2019-2021",
    description: [
      "Led initiatives for startup ecosystem development, focusing on nurturing and growing startup partnerships.",
      "Created and executed strategies for incorporating startup innovations into Microsoft's product ecosystem.",
      "Managed relationships with key startup partners, facilitating mutual growth and innovation opportunities.",
      "Developed and implemented programs to support startups in scaling their technologies."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-blue-600">{exp.company}</h4>
                </div>
              </div>
              
              <div className="flex items-center text-gray-500 mb-4 text-sm">
                <Calendar size={16} className="mr-1" />
                <span>{exp.period}</span>
              </div>
              
              <ul className="space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
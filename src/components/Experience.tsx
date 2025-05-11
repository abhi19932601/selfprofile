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
    period: "2023-Present",
    description: [
      "I sourced $250K in deals (e-commerce, AI, SaaS, home services) with 2X return.",
      "Financial Analysis & Valuation: My MBA finance built custom unit economics, operating expense forecasts and cash flow models for evaluating 100+ deals.",
      "Ecosystem Development & M&A: I sourced and funded 3 deals built 15+ funnel pipeline across SaaS, Consumer, Real-Estate Tech, Mar-Tech.",
      "Technology Trend Analysis: I identified early disruptive tech, yielding a strong 3.5X investment velocity."
    ]
  },
  {
    title: "Principal PM, Special Projects",
    company: "Swiggy", 
    period: "2021-2022",
    description: [
      "Led the development and launch of Swiggy's quick commerce platform, scaling to 4M+ users across 134 cities in India.",
      "Orchestrated partnerships with 2000+ local stores, implementing ML-driven inventory management that reduced stockouts by 40%.",
      "Developed and executed the data automation intelligence product roadmap for Swiggy's 30-min delivery promise, achieving 98% on-time parity with competitors.",
      "Implemented dynamic pricing algorithms that increased merchant revenue by 25% while maintaining customer satisfaction."
    ]
  },
  {
    title: "Senior PM, Strategy & Tech Innovation",
    company: "Swiggy",
    period: "2019-2021", 
    description: [
      "Spearheaded the redesign of Swiggy's restraurant onboarding experience, resulting in a 30% increase in onboarding",
      "Built and scaled the restaurant partner dashboard, enabling real-time pricing intelligence management for 140,000+ restaurants.",
      "Launched Swiggy's financial reconcillation program, across 100,000+ delivery partners across cash and online collectionechanisms.",
      "Led the development of AI-powered cloud kitchen menu parity recommendations, reducing parity complaint rates by 35%."
    ]
  },
  {
    title: "Chief of Staff",
    company: "Belong.co",
    period: "2016-2019",
    description: [
      "Led product strategy and development for AI-powered talent acquisition platform.",
      "Implemented machine learning algorithms for candidate matching and assessment.",
      "Scaled platform to serve 40+ enterprise clients with 75% retention rate.",
      "Drove 40% improvement in demand generation, sales playbook metrics through automated workflows on Salesforce, Semrush, Marketo, Hubspot."
    ]
  },
  {
    title: "Product Manager",
    company: "Mercer-Mettl",
    period: "2014-2015",
    description: [
      "Managed end-to-end product lifecycle for online assessment platform.",
      "Launched remote proctoring solution used by 100+ universities globally.",
      "Developed innovative anti-cheating features using computer vision.",
      "Increased assessment completion rates by 35% through UX improvements."
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
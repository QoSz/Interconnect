import { 
    PhoneCall, 
    FileText, 
    Code, 
    Rocket, 
    HeartHandshake 
} from "lucide-react";
import { Card } from "../ui/card";

export default function OurProcess() {
    const processSteps = [
        {
            title: "Initial Consultation",
            description: "We start with a discovery call to understand your business needs and goals.",
            icon: <PhoneCall className="h-10 w-10 text-purple-400" />
        },
        {
            title: "Custom Proposal",
            description: "We create a tailored plan that fits your budget and timeline.",
            icon: <FileText className="h-10 w-10 text-purple-400" />
        },
        {
            title: "Development",
            description: "Our team builds your solution with regular updates and feedback sessions.",
            icon: <Code className="h-10 w-10 text-purple-400" />
        },
        {
            title: "Launch",
            description: "We deploy your project and ensure everything runs smoothly.",
            icon: <Rocket className="h-10 w-10 text-purple-400" />
        },
        {
            title: "Ongoing Support",
            description: "We provide continued assistance and optimization after launch.",
            icon: <HeartHandshake className="h-10 w-10 text-purple-400" />
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8 relative">
            {/* Background elements */}
            <div className="absolute top-1/3 left-1/5 w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-1/4 right-1/5 w-36 h-36 md:w-56 md:h-56 rounded-full bg-purple-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }} />
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">How We Work</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Our streamlined process makes it simple to bring your vision to life.
                        We focus on communication, quality, and results.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 relative">
                    {processSteps.map((step, index) => (
                        <Card key={index} className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem]">
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                                    {step.icon}
                                </div>
                                <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-200 text-xs rounded-full mb-2">
                                    Step {index + 1}
                                </span>
                                <h3 className="text-xl font-semibold text-purple-100 mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-base mt-1">{step.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
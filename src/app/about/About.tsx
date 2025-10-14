"use client";

import { User, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Yash Shah",
    title: "Co-Founder & Tech Lead",
    description: "Yash is a passionate technologist and problem solver, dedicated to crafting innovative and efficient digital solutions. He leads our development efforts with a keen eye for detail and a drive for excellence.",
    linkedin: "https://www.linkedin.com/in/yashashah7/",
  },
  {
    id: 2,
    name: "Nirav Challa",
    title: "Co-Founder & Strategy Lead",
    description: "Nirav brings strategic vision and a client-focused approach to Interconnect. He excels at understanding business needs and translating them into impactful digital strategies that drive growth.",
    linkedin: "https://www.linkedin.com/in/niravchalla/",
  },
    {
    id: 3,
    name: "Dhruv Patel",
    title: "Technical Director",
    description: "Dhruv is a skilled web developer and technology lead who guides Interconnect technical direction. Focused on creating efficient, scalable, and user-centered digital solutions that drive real results.",
    linkedin: "https://www.linkedin.com/in/dhruv-patel-a40ba5222/",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen text-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient & Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute top-1/4 left-[5%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-purple-600/10 blur-3xl animate-pulse -z-10" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-1/4 right-[5%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            We are a passionate duo dedicated to bringing your digital visions to life. Get to know the minds behind Interconnect.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-800/50 backdrop-blur-md border border-purple-700/30 rounded-[1.618rem] p-6 sm:p-8 shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center"
            >
              {/* Profile Placeholder */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-purple-600/30 to-indigo-600/30 border-2 border-purple-500/50 flex items-center justify-center mb-6 shadow-lg">
                <User className="w-16 h-16 sm:w-20 sm:h-20 text-purple-300/80" />
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-1">
                {member.name}
              </h3>
              {/* Title */}
              <p className="text-sm text-indigo-400 mb-4 font-medium tracking-wide">
                {member.title}
              </p>
              {/* Description */}
              <p className="text-gray-300/90 text-base leading-relaxed mb-6">
                {member.description}
              </p>
              
              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-400/40 border border-blue-400/20 hover:border-blue-300/40"
              >
                <Linkedin className="w-5 h-5 text-blue-200" />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-pulse {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.7; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.03); 
          }
        }
      `}</style>
    </div>
  );
}
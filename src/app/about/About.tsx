"use client";

import { User, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Yash Shah",
    title: "Co-Founder & Tech Lead",
    description: [
      "I'm Yash Shah, a computer science graduate who can't help but chase what's next. I live at the intersection of code, creativity, and understanding how people think, where technology meets the mind, and innovation meets real purpose.",
      "Right now, I'm exploring AI, Blockchain, cryptocurrency, and DeFi. I love building systems that challenge how things have always been done, that reimagine how we interact with value, trust, and intelligence. I work with Python, JavaScript/TypeScript, Java, and C/C++, and I focus on web development, cyber security, and network engineering. But I don't just write code, I design experiences. I care about UI/UX and graphic design because I think about the person using what I build.",
      "I believe in quality over quantity. Always. When I'm debugging a system at 2 AM or designing an interface, I give it everything. I don't do half-measures.",
      "When I'm not coding, you'll find me playing padel or watching F1, tennis, or football. Sports teach me things code can't - how to perform under pressure, how to read patterns in real-time, how to stay resilient when things don't go my way.",
      "I read a lot about psychology and finance because they connect to everything I do. I chase ideas that challenge how I think, books that shift my perspective, conversations that make me uncomfortable in the best way. I try to look at situations objectively, strip away the noise, and see what's actually there. Whether I'm analyzing markets, debugging human behavior, or diving into research papers, I'm always asking: What am I missing? What assumptions am I making?",
      "I push myself to keep evolving, stay fit, stay sharp, and keep stepping into territories that scare me a little. That's where real growth happens.",
    ],
    linkedin: "https://www.linkedin.com/in/yashashah7/",
  },
  {
    id: 2,
    name: "Nirav Challa",
    title: "Co-Founder & Strategy Lead",
    description: ["Nirav brings strategic vision and a client-focused approach to Interconnect. He excels at understanding business needs and translating them into impactful digital strategies that drive growth."],
    linkedin: "https://www.linkedin.com/in/niravchalla/",
  },
    {
    id: 3,
    name: "Dhruv Patel",
    title: "Technical Director",
    description: ["Dhruv is a skilled web developer and technology lead who guides Interconnect technical direction. Focused on creating efficient, scalable, and user-centered digital solutions that drive real results."],
    linkedin: "https://www.linkedin.com/in/dhruv-patel-a40ba5222/",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-gray-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient & Decorative Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-sky-50 to-sky-100 dark:from-gray-900 dark:via-gray-950 dark:to-black" />
      <div
        className="absolute top-1/4 left-[5%] w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-sky-300/30 dark:bg-purple-600/10 blur-3xl animate-pulse -z-10"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-1/4 right-[5%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-blue-300/30 dark:bg-indigo-600/10 blur-3xl animate-pulse -z-10"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-pink-400 mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            We are a passionate duo dedicated to bringing your digital visions to life. Get to know the minds behind Interconnect.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md border border-sky-200/60 dark:border-purple-700/30 rounded-[1.618rem] p-6 sm:p-8 shadow-xl shadow-sky-200/30 dark:shadow-purple-900/30 hover:shadow-sky-300/60 dark:hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center text-center"
            >
              {/* Profile Placeholder */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-sky-300/30 to-blue-300/30 dark:from-purple-600/30 dark:to-indigo-600/30 border-2 border-sky-400/50 dark:border-purple-500/50 flex items-center justify-center mb-6 shadow-lg shadow-sky-200/40 dark:shadow-purple-900/40">
                <User className="w-16 h-16 sm:w-20 sm:h-20 text-sky-500/80 dark:text-purple-300/80" />
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-purple-300 dark:to-indigo-300 mb-1">
                {member.name}
              </h3>
              {/* Title */}
              <p className="text-sm text-blue-600 dark:text-indigo-400 mb-4 font-medium tracking-wide">
                {member.title}
              </p>
              {/* Description */}
              <div className="text-slate-600 dark:text-gray-300/90 text-base leading-relaxed mb-6 space-y-4 text-left">
                {Array.isArray(member.description) ? (
                  member.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{member.description}</p>
                )}
              </div>
              
              {/* LinkedIn Button */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 dark:from-purple-600 dark:to-indigo-600 hover:from-sky-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-200/60 dark:shadow-indigo-500/25 hover:shadow-sky-300/80 dark:hover:shadow-indigo-400/40 border border-sky-200/40 dark:border-blue-400/20 hover:border-sky-300/60 dark:hover:border-blue-300/40"
              >
                <Linkedin className="w-5 h-5 text-blue-100 dark:text-blue-200" />
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

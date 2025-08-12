"use client";

import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-[80vh] relative flex flex-col items-center justify-center text-gray-100 px-4 py-12 sm:py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/15 to-transparent pointer-events-none" />
            
            {/* Decorative elements similar to Hero */}
            <div className="absolute top-1/4 left-[10%] w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-blue-600/10 blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-1/4 right-[10%] w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-indigo-600/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="z-10 max-w-md sm:max-w-2xl w-full text-center bg-gray-800/50 backdrop-blur-md p-6 sm:p-8 rounded-[1.618rem] shadow-xl border border-purple-500/30">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-200 mb-4 sm:mb-6">
                    Contact Us
                </h1>
                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
                    We'd love to hear from you! Reach out through any of the channels below.
                </p>

                <div className="space-y-4 sm:space-y-6">
                    {/* Email Section */}
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3 group">
                        <Mail className="w-5 h-5 flex-shrink-0 text-purple-400 group-hover:text-blue-400 transition-colors duration-200" />
                        <a 
                            href="mailto:info@interconnect.co.ke" 
                            className="text-lg sm:text-xl text-gray-200 font-medium transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent"
                        >
                            info@interconnect.co.ke
                        </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                         <div className="flex items-center justify-center space-x-2 sm:space-x-3 group">
                             <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-blue-400 transition-colors duration-200" />
                             <a 
                                 href="tel:+254788871946" 
                                 className="text-lg sm:text-xl text-gray-200 font-medium transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent"
                             >
                                 +254 788 871 946
                             </a>
                         </div>
                         <div className="flex items-center justify-center space-x-2 sm:space-x-3 group">
                             <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-blue-400 transition-colors duration-200" />
                             <a 
                                 href="tel:+447586752568" 
                                 className="text-lg sm:text-xl text-gray-200 font-medium transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent"
                             >
                                 +44 7586 752 568
                             </a>
                         </div>
                    </div>
                </div>
            </div>
             {/* Add inline CSS for animations if needed, or ensure Tailwind config handles it */}
             <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 0.3; transform: scale(1.05); }
                }
                .animate-pulse {
                    animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}
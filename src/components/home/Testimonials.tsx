'use client'

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "The team at Interconnect truly understands our vision. Their approach to developing our platform was both innovative and practical.",
    name: "Sarah Johnson",
    position: "Product Director"
  },
  {
    id: 2,
    quote: "Working with Interconnect transformed our digital strategy. Their attention to detail and technical expertise exceeded our expectations.",
    name: "Michael Chen",
    position: "CTO"
  },
  {
    id: 3,
    quote: "What impressed me most was how quickly they understood our unique challenges and delivered solutions that perfectly aligned with our needs.",
    name: "Emily Rodriguez",
    position: "Operations Manager"
  },
  {
    id: 4,
    quote: "The streamlined process and clear communication made our project run smoothly from start to finish. Highly recommended for any tech implementation.",
    name: "Dev Patel",
    position: "Digital Strategist"
  },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    
    // Clone the first testimonial and add it to the end for seamless looping
    const displayedTestimonials = [...testimonials, testimonials[0]];
    
    // Handle the transition end to create the seamless loop
    const handleTransitionEnd = () => {
        if (currentIndex >= testimonials.length) {
            setIsTransitioning(true);
            // Reset to beginning without animation
            setCurrentIndex(0);
            // Enable animation after a small delay
            setTimeout(() => setIsTransitioning(false), 50);
        }
    };
    
    // Auto-scroll functionality
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % (testimonials.length + 1));
        }, 5000);
        
        return () => clearInterval(interval);
    }, [isPaused]);
    
    // Navigation functions
    const handlePrev = () => {
        // For consistency, still move forward but to the previous item
        setCurrentIndex(prev => {
            if (prev === 0) return testimonials.length - 1;
            return prev - 1;
        });
    };
    
    const handleNext = () => {
        setCurrentIndex(prev => (prev + 1) % (testimonials.length + 1));
    };

    return (
        <section id="testimonials" className="py-16 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#121212] relative">
            {/* Background elements - matching OurProcess.tsx */}
            <div className="absolute top-1/3 left-1/5 w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-1/4 right-1/5 w-36 h-36 md:w-56 md:h-56 rounded-full bg-purple-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }} />
            
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Real experiences from professionals who have collaborated with us on transformative projects.
                    </p>
                </div>
                
                <div className="relative mx-auto px-0 sm:px-10 md:px-14">
                    {/* Navigation buttons - HIDDEN on mobile, visible on larger screens */}
                    <button 
                        onClick={handlePrev}
                        className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-purple-900/70 hover:bg-purple-800 text-white p-2 sm:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    
                    <button 
                        onClick={handleNext}
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-purple-900/70 hover:bg-purple-800 text-white p-2 sm:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                    </button>
                    
                    {/* Testimonials carousel */}
                    <div 
                        className="overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <motion.div 
                            className="flex"
                            animate={{ 
                                x: `calc(-${currentIndex * (100 / displayedTestimonials.length)}%)`
                            }}
                            transition={{ 
                                ease: "easeInOut", 
                                duration: isTransitioning ? 0 : 0.7 
                            }}
                            onAnimationComplete={handleTransitionEnd}
                            style={{
                                width: `${displayedTestimonials.length * 100}%`,
                            }}
                        >
                            {displayedTestimonials.map((testimonial, index) => (
                                <div 
                                    key={`${testimonial.id}-${index}`}
                                    style={{ width: `${100 / displayedTestimonials.length}%` }}
                                    className="px-0 sm:px-2 md:px-4" // Removed padding on small screens
                                >
                                    <div className="bg-gray-900/50 border border-purple-900/50 p-3 sm:p-4 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] h-full">
                                        <div className="flex flex-col h-full">
                                            <blockquote className="flex flex-col h-full">
                                                <p className="text-gray-400 text-sm sm:text-base md:text-lg italic mb-2 md:mb-4 break-words">
                                                    "{testimonial.quote}"
                                                </p>
                                                <footer className="mt-auto pt-2 md:pt-3">
                                                    <p className="text-lg sm:text-xl font-semibold text-purple-100 mb-1">{testimonial.name}</p>
                                                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.position}</p>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    
                    {/* Mobile navigation buttons - shown below the testimonial on small screens */}
                    <div className="flex justify-center items-center mt-6 space-x-4 sm:hidden">
                        <button 
                            onClick={handlePrev}
                            className="bg-purple-900/70 hover:bg-purple-800 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        
                        <button 
                            onClick={handleNext}
                            className="bg-purple-900/70 hover:bg-purple-800 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>
                
                {/* Why Choose Us section */}
                <div className="mt-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-purple-200 mb-12">Why Choose Interconnect</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 relative">
                        <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                            <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-purple-100 mb-2">Rapid Development</h4>
                            <p className="text-gray-400 text-base mt-1">Our streamlined process and experienced team deliver high-quality solutions in record time.</p>
                        </div>
                        
                        <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                            <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-purple-100 mb-2">Security-First Approach</h4>
                            <p className="text-gray-400 text-base mt-1">We build with security in mind from day one, ensuring your data and systems remain protected.</p>
                        </div>
                        
                        <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                            <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-purple-100 mb-2">Tailored Solutions</h4>
                            <p className="text-gray-400 text-base mt-1">We don't believe in one-size-fits-all. Every solution is custom-built for your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
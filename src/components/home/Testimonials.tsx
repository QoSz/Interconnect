'use client'

import { useState, useEffect } from 'react';
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
                                                    &ldquo;{testimonial.quote}&rdquo;
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
            </div>
        </section>
    );
}
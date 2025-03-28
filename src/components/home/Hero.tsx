'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const messages = [
        "Interconnect: Your connection to digital world...",
        "Websites that don't just exist, they engage.",
        "Amplify your brand, dominate social media.",
        "Secure your connections, protect your future.",
        "Strategic IT insights for exponential growth.",
        "Let's build something amazing, together."
    ];
    
    const handleTyping = useCallback(() => {
        const currentMessage = messages[messageIndex];
        
        // Clear any existing timeouts
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        if (!isDeleting && displayText === currentMessage) {
            // Finished typing, wait before deleting
            timeoutRef.current = setTimeout(() => {
                setIsDeleting(true);
                setTypingSpeed(50);
            }, 2000);
            return;
        }
        
        if (isDeleting && displayText === '') {
            // Finished deleting, move to next message
            setIsDeleting(false);
            setMessageIndex((prev) => (prev + 1) % messages.length);
            setTypingSpeed(100);
            return;
        }
        
        // Set the next text
        const newText = isDeleting 
            ? displayText.substring(0, displayText.length - 1)
            : currentMessage.substring(0, displayText.length + 1);
            
        timeoutRef.current = setTimeout(() => {
            setDisplayText(newText);
        }, typingSpeed);
        
    }, [displayText, isDeleting, messageIndex, messages, typingSpeed]);
    
    useEffect(() => {
        handleTyping();
        
        // Cleanup timeout on unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [handleTyping]);
    
    return (
        <div className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-8 md:py-16">
            {/* Gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none" />
            
            {/* Floating elements for decoration */}
            <div className="absolute top-1/4 left-[10%] md:left-1/5 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-600/10 blur-3xl" 
                 style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-1/4 right-[10%] md:right-1/5 w-36 h-36 md:w-72 md:h-72 rounded-full bg-indigo-600/10 blur-3xl" 
                 style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '700ms' }} />
            
            <div className="z-10 max-w-5xl w-full">
                <div className="min-h-[80px] sm:min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-4 md:mb-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-purple-200 font-bold leading-tight">
                        {displayText}
                        <span className="inline-block w-0.5 h-6 sm:w-1 sm:h-8 md:w-1.5 md:h-10 lg:h-12 bg-purple-400 ml-0.5 sm:ml-1" 
                              style={{ animation: 'blink 1s step-end infinite' }}>
                        </span>
                    </h1>
                </div>
                
                <p className="text-base sm:text-lg text-gray-300 mb-5 md:mb-8 max-w-3xl mx-auto px-2">
                    Specializing in Web Development, Social Media Management, 
                    Cyber Security, and Professional IT Consulting
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link href="/contact" className="w-auto inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25 text-sm sm:text-base">
                        Get Started
                    </Link>
                    <Link href="/services" className="w-auto inline-block px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-purple-500 text-purple-200 font-medium rounded-lg hover:bg-purple-900/30 transform hover:scale-105 transition duration-300 text-sm sm:text-base">
                        Our Services
                    </Link>
                </div>
            </div>
            
            {/* Add inline CSS for animations */}
            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
}
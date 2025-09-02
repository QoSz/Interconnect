'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Shadcn UI Button component

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-8 md:py-16 overflow-hidden">
            {/* Gradient background effect like Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pointer-events-none -z-10" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-blue-600/10 blur-3xl opacity-50 animate-pulse -z-10" />
            <div className="absolute bottom-1/4 right-[10%] w-56 h-56 md:w-80 md:h-80 rounded-full bg-indigo-600/10 blur-3xl opacity-50 animate-pulse animation-delay-700 -z-10" />

            <div className="z-10 max-w-2xl w-full">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-purple-400 mb-4 animate-fade-in-down">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6 animate-fade-in-up animation-delay-200">
                    Oops! Page Not Found
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md mx-auto animate-fade-in-up animation-delay-400">
                    The page you&#39;re looking for doesn&#39;t seem to exist. Maybe it was moved, or perhaps you mistyped the URL?
                </p>
                <div className="animate-fade-in-up animation-delay-600">
                    <Link href="/">
                        <Button 
                            variant="default"
                            size="lg" 
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/30"
                        >
                            Go Back Home
                        </Button>
                    </Link>
                </div>
            </div>
            {/* Add inline CSS for animations if needed, or ensure they are in globals.css */}
             <style jsx>{`
                .animation-delay-200 { animation-delay: 200ms; }
                .animation-delay-400 { animation-delay: 400ms; }
                .animation-delay-600 { animation-delay: 600ms; }
                
                @keyframes fade-in-down {
                  from { opacity: 0; transform: translateY(-20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                 @keyframes pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.2; }
                }

                .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
                .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
            `}</style>
        </div>
    );
}
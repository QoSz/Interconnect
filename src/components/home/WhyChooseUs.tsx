export default function WhyChooseUs() {
    return (
        <section className="py-16 px-4 md:px-8 relative bg-gradient-to-br from-[#0a0a0a] to-[#121212]">
            {/* Background elements */}
            <div className="absolute top-1/3 left-1/5 w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-1/4 right-1/5 w-36 h-36 md:w-56 md:h-56 rounded-full bg-purple-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }} />
            
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-200 mb-12">Why Choose Interconnect</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 relative">
                    <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                        <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-100 mb-2">Rapid Development</h3>
                        <p className="text-gray-400 text-base mt-1">Our streamlined process and experienced team deliver high-quality solutions in record time.</p>
                    </div>
                    
                    <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                        <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-100 mb-2">Security-First Approach</h3>
                        <p className="text-gray-400 text-base mt-1">We build with security in mind from day one, ensuring your data and systems remain protected.</p>
                    </div>
                    
                    <div className="relative z-10 bg-gray-900/50 border border-purple-900/50 p-5 md:p-6 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 rounded-[1.618rem] text-center">
                        <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-3 border border-purple-700/50 shadow-md shadow-purple-600/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-purple-100 mb-2">Tailored Solutions</h3>
                        <p className="text-gray-400 text-base mt-1">We don&#39;t believe in one-size-fits-all. Every solution is custom-built for your specific needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

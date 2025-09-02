import Link from "next/link";

export default function ContactCTA() {
    return (
        <div className="relative py-16 px-6 text-center bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-sm rounded-[1.618rem] shadow-2xl max-w-3xl mx-auto my-12 border border-purple-500/20 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-400/40 hover:from-slate-700/90 hover:to-slate-800/95 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-purple-800/15 rounded-[1.618rem] opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
            
            {/* Subtle animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-indigo-600/5 rounded-[1.618rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
            
            <h2 className="text-4xl font-bold mb-6 text-white relative z-10">
                Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg relative z-10">
                Let&#39;s discuss how we can help you achieve your goals. Contact us today for a free consultation!
            </p>
            
            {/* Enhanced button with better hover effects */}
            <Link href="/contact" 
                className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-indigo-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/40 hover:shadow-xl text-lg relative z-10 border border-purple-400/20 hover:border-purple-300/40"
            >
                Get In Touch
            </Link>
        </div>
    )
}
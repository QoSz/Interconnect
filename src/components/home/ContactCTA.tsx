import Link from "next/link";

export default function ContactCTA() {
    return (
        <div className="relative py-16 px-6 text-center backdrop-blur-sm rounded-[1.618rem] shadow-2xl max-w-3xl mx-auto my-12 border border-[var(--cta-border)] transition-all duration-500 hover:shadow-[var(--cta-shadow-hover)] hover:shadow-2xl hover:border-[var(--cta-border-hover)] group"
                 style={{
                    background: `linear-gradient(to bottom right, var(--cta-bg-start), var(--cta-bg-end))`,
                 }}>
                <div className="absolute inset-0 rounded-[1.618rem] opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                     style={{ background: `linear-gradient(to bottom right, var(--cta-overlay-start), var(--cta-overlay-mid), var(--cta-overlay-end))` }}></div>

                {/* Subtle animated background effect */}
                <div className="absolute inset-0 rounded-[1.618rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"
                     style={{ background: `linear-gradient(to right, var(--cta-animated-start), transparent, var(--cta-animated-end))` }}></div>

                <h2 className="text-4xl font-bold mb-6 text-[var(--cta-title)] relative z-10">
                    Ready to Start Your Project?
                </h2>
                <p className="text-[var(--cta-description)] mb-10 max-w-xl mx-auto text-lg relative z-10">
                    Let&#39;s discuss how we can help you achieve your goals. Contact us today for a free consultation!
                </p>

                {/* Enhanced button with better hover effects */}
                <Link href="/contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/25 text-lg relative z-10"
                >
                    Get In Touch
                </Link>
            </div>
    )
}
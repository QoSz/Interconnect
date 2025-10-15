import Link from "next/link";

export default function ContactCTA() {
    return (
        <div className="relative py-16 px-6 text-center backdrop-blur-sm rounded-[1.618rem] shadow-2xl max-w-3xl mx-auto my-12 border border-[var(--cta-border)] transition-all duration-500 hover:border-[var(--cta-border-hover)] group bg-gradient-to-br from-[var(--cta-bg-start)] to-[var(--cta-bg-end)]">
                <div className="absolute inset-0 rounded-[1.618rem] opacity-60 transition-opacity duration-500 group-hover:opacity-80 bg-gradient-to-br from-[var(--cta-overlay-start)] via-[var(--cta-overlay-mid)] to-[var(--cta-overlay-end)]"></div>

                {/* Subtle animated background effect */}
                <div className="absolute inset-0 rounded-[1.618rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x bg-gradient-to-r from-[var(--cta-animated-start)] via-transparent to-[var(--cta-animated-end)]"></div>

                <h2 className="text-4xl font-bold mb-6 text-[var(--cta-title)] relative z-10">
                    Ready to Start Your Project?
                </h2>
                <p className="text-[var(--cta-description)] mb-10 max-w-xl mx-auto text-lg relative z-10">
                    Let&#39;s discuss how we can help you achieve your goals. Contact us today for a free consultation!
                </p>

                {/* Enhanced button with better hover effects */}
                <Link href="/contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-sky-500 to-blue-500 dark:from-purple-600 dark:to-indigo-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-indigo-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-sky-500/25 dark:shadow-indigo-500/25 text-lg relative z-10"
                >
                    Get In Touch
                </Link>
            </div>
    )
}
import Link from "next/link";

export default function ContactCTA() {
    return (
        <div className="relative py-16 px-6 text-center bg-[#fffbf4] rounded-[1.618rem] shadow-lg max-w-3xl mx-auto my-12 border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 rounded-[1.618rem] opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
            
            <h2 className="text-4xl font-bold mb-6 text-popover-foreground relative z-10">
                Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg relative z-10">
                Let's discuss how we can help you achieve your goals. Contact us today for a free consultation!
            </p>
            
            {/* Matching the gradient style from Hero.tsx */}
            <Link href="/contact" 
                className="inline-block px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25 text-lg relative z-10"
            >
                Get In Touch
            </Link>
        </div>
    )
}
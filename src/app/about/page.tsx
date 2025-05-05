'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.3, duration: 0.8 }
        }
    };

    return (
        <div className="relative min-h-screen text-foreground py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent pointer-events-none -z-10" />
            
            <div className="absolute top-1/4 left-[10%] md:left-1/5 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-600/10 blur-3xl -z-10" 
                 style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-[30%] left-[45%] w-48 h-48 rounded-full bg-purple-600/5 blur-3xl -z-10 animate-pulse duration-[5s]" />
            <div className="absolute bottom-1/4 right-[10%] md:right-1/5 w-36 h-36 md:w-72 md:h-72 rounded-full bg-indigo-600/10 blur-3xl -z-10" 
                 style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '700ms' }} />

            <div className="relative max-w-4xl mx-auto z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-12 text-center"
                >
                    Our Story
                </motion.h1>

                <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="bg-black/30 backdrop-blur-md p-8 rounded-[1.618rem] shadow-xl border border-border/50 mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-6">
                        From Nairobi to Now: A Shared Journey
                    </h2>
                    <div className="space-y-5 text-lg text-muted-foreground">
                        <p>
                            Life has a funny way of bringing people together. Our story begins continents apart, in the vibrant landscapes of Kenya. We, the founders of Interconnect, grew up unaware of each other, pursuing our individual paths. Yet, fate had a surprising plan in store.
                        </p>
                        <p>
                            Driven by a shared passion for technology, we both independently decided to pursue Computer Science degrees abroad. Little did we know, our journeys would converge in Cardiff, where we were both studying. The real twist? We ended up living in the same shared accommodation.
                        </p>
                        <p>
                            Discovering we were both from Kenya, studying the same demanding degree in the same city, felt like serendipity. It was an instant connection, a shared understanding forged far from home. Those initial chats quickly evolved into late-night conversations, often happening during walks. We were tackling the demanding 75 Hard Challenge at the time, which required a daily outdoor activity. With our busy days, these walks often happened late at night – I even remember one walk we did at 2 am after going out! During these hours, we shared deep thoughts, plenty of laughs, and discovered a mutual, burning ambition. We both felt that drive, that need to 'go big,' deeply motivated by the hard work of our parents and grandparents and wanting to give them the future they deserved. This shared intensity forged a connection that felt far deeper than the few months we'd actually known each other in Cardiff.
                        </p>
                        <p>
                            We realized our combined skills, experiences, and relentless drive could fill a gap. Businesses needed reliable, innovative, and trustworthy technology partners. That's when Interconnect was born – not just as a company, but as a culmination of our shared journey and vision.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-semibold text-primary-foreground mb-8 text-center">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Innovation", description: "Driving progress with creative solutions and cutting-edge technology." },
                            { title: "Reliability", description: "Building trust through consistent performance and dependable support." },
                            { title: "Partnership", description: "Collaborating closely with clients to achieve shared success." },
                            { title: "Integrity", description: "Operating with transparency, honesty, and ethical practices." }
                        ].map((value, index) => (
                            <div 
                                key={index} 
                                className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-border/40 shadow-lg hover:border-purple-500/50 transition-colors duration-300"
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-base">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="text-center mb-12"
                >
                     <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-6">
                        Our Mission
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        We founded Interconnect with a simple goal: to be the dependable IT partner you can trust. Whether it's crafting stunning websites, navigating the complexities of cybersecurity, or providing strategic IT consulting, we are committed to delivering excellence and solving your technology challenges, allowing you to focus on what you do best.
                    </p>
                     <Link href="/contact"
                        className="inline-block px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg shadow-indigo-500/25 text-lg"
                    >
                        Let's Connect
                    </Link>
                </motion.div>

                {/* Optional: Add team photos or more sections here */}

            </div>
             <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.05); }
                }
            `}</style>
        </div>
    );
}
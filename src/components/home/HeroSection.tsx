'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const services = [
    "Web Development",
    "IT Consulting",
    "Social Media",
    "Cyber Security",
    "AI Chatbots"
]

export default function HeroSection() {
    const [currentService, setCurrentService] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden">
            <div className="container text-center z-10">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Connecting Your Business to
                    <br />
                    <span className="text-primary">
                        <motion.span
                            key={currentService}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {services[currentService]}
                        </motion.span>
                    </span>
                </motion
                    .h1>
                <motion.p
                    className="text-xl mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Empowering businesses with cutting-edge IT solutions for a digital future.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button asChild size="lg" className="mr-4">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">Our Services</Link>
                    </Button>
                </motion.div>
            </div>
            <div className="absolute inset-0 z-0">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0,0 Q50,50 100,0 V100 H0 Z"
                        fill="url(#gradient)"
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="rgba(var(--primary-rgb), 0.2)" />
                            <stop offset="100%" stopColor="rgba(var(--primary-rgb), 0.1)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}


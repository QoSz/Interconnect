'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CTASection() {
    return (
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container text-center">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                    className="text-xl mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Let's collaborate to bring your vision to life with our cutting-edge IT solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button asChild size="lg" variant="secondary" className="mr-4">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}


'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Server, Share2, Shield, Bot } from 'lucide-react'

const services = [
    {
        title: "Web Development",
        description: "Create stunning, responsive websites tailored to your needs.",
        icon: Globe
    },
    {
        title: "IT Consulting",
        description: "Expert advice to optimize your IT infrastructure and processes.",
        icon: Server
    },
    {
        title: "Social Media Handling",
        description: "Boost your online presence with our social media management.",
        icon: Share2
    },
    {
        title: "Cyber Security",
        description: "Protect your digital assets with our advanced security solutions.",
        icon: Shield
    },
    {
        title: "AI Chatbot Creation",
        description: "Enhance customer experience with intelligent chatbot solutions.",
        icon: Bot
    }
]

export default function ServicesOverview() {
    return (
        <section className="container py-20">
            <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <service.icon className="w-10 h-10 text-primary mb-4" />
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


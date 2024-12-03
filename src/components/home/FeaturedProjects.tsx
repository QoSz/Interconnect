'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
    {
        title: "E-commerce Platform",
        description: "A scalable online store built with Next.js and Shopify",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Healthcare Management System",
        description: "Streamlined patient care with our custom software solution",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        title: "Financial Analytics Dashboard",
        description: "Real-time data visualization for informed decision-making",
        image: "/placeholder.svg?height=200&width=300"
    }
]

export default function FeaturedProjects() {
    return (
        <section className="container py-20">
            <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <Card>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


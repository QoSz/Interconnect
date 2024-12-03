'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "John Doe",
        company: "Tech Innovators Inc.",
        testimonial: "Interconnect transformed our online presence. Their web development team delivered a stunning, high-performance site that exceeded our expectations.",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Jane Smith",
        company: "Global Solutions Ltd.",
        testimonial: "The IT consulting services provided by Interconnect helped us streamline our processes and significantly reduce operational costs. Highly recommended!",
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        name: "Mike Johnson",
        company: "Secure Systems Co.",
        testimonial: "Interconnect's cybersecurity team identified and resolved critical vulnerabilities in our network. Their expertise has been invaluable in protecting our digital assets.",
        image: "/placeholder.svg?height=100&width=100"
    }
]

export default function Testimonials() {
    return (
        <section className="container py-20">
            <motion.h2
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                What Our Clients Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div>
                                    <CardTitle>{testimonial.name}</CardTitle>
                                    <CardDescription>{testimonial.company}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


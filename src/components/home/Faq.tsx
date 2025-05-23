import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
    return (
        <section id="faq" className="py-16 px-4 md:px-8 relative bg-gradient-to-br from-[#0a0a0a] to-[#121212]">
            {/* Background elements matching other sections */}
            <div className="absolute top-1/3 left-1/5 w-32 h-32 md:w-48 md:h-48 rounded-full bg-indigo-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
            <div className="absolute bottom-1/4 right-1/5 w-36 h-36 md:w-56 md:h-56 rounded-full bg-purple-600/10 blur-3xl" 
                 style={{ animation: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '1s' }} />
            
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-200 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Everything you need to know about our services
                    </p>
                </div>
                
                <div className="grid gap-6 md:gap-8">
                    <Accordion type="single" collapsible className="w-full">
                        {[
                            {
                                question: "What services do you offer?",
                                answer: "We specialize in providing tailored solutions across Web Development, Social Media Management, Cyber Security, and IT Consulting. As a focused team, we work closely with you to understand your unique needs and deliver high-impact results."
                            },
                            {
                                question: "How does your pricing work?",
                                answer: "Our pricing is customized based on the specific services you require and the scope of the work involved. We believe in transparent and fair pricing tailored to your project's needs. Contact us for a personalized consultation and quote."
                            },
                            {
                                question: "Who will be working on my project?",
                                answer: "As a dedicated two-person startup, you'll work directly with the founders. This ensures clear communication, deep understanding of your goals, and a highly personalized service experience from start to finish."
                            },
                            {
                                question: "How do you ensure the quality and security of your web development and cyber security services?",
                                answer: "We adhere to industry best practices for both development and security. Our process includes rigorous testing, code reviews, and proactive security measures to protect your digital assets and ensure robust, reliable solutions."
                            },
                            {
                                question: "What makes your approach to Social Media Management effective?",
                                answer: "We focus on creating authentic engagement and data-driven strategies tailored to your brand's voice and audience. Our approach combines creative content with analytics to maximize your social media impact and achieve measurable results."
                            },
                            {
                                question: "How quickly can you start on a new project?",
                                answer: "Our flexible structure allows us to onboard new projects efficiently. The exact start time depends on our current capacity and the project's requirements. Contact us to discuss your timeline, and we'll provide a clear estimate."
                            }
                        ].map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left font-semibold text-purple-100 hover:text-purple-300">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
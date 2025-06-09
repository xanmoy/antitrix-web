"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
    question: string
    answer: string
}

interface FAQSectionProps {
    title?: string
    subtitle?: string
    faqs?: FAQItem[]
    className?: string
}

const defaultFAQs: FAQItem[] = [
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
        question: "What's included in the consultation call?",
        answer:
            "Our free 30-minute consultation includes project scope discussion, technology recommendations, timeline estimation, and pricing overview. We'll also answer any questions you have about our development process and how we can help achieve your goals.",
    },
    {
        question: "Do you provide ongoing support after project completion?",
        answer:
            "Yes! All our plans include post-launch support. Starter plans include 3 months, Growth plans include 6 months, and Enterprise plans include 12 months of support. We also offer extended maintenance packages for long-term partnerships.",
    },
    {
        question: "Can you work with our existing team or systems?",
        answer:
            "We're experienced in collaborating with existing teams and integrating with current systems. We can work as an extension of your team or independently, depending on your preferences and project requirements.",
    },
    {
        question: "What technologies do you specialize in?",
        answer:
            "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. For mobile development, we use React Native and Flutter. We always choose the best technology stack for your specific needs.",
    },
    {
        question: "How do you handle project communication and updates?",
        answer:
            "We maintain transparent communication through regular updates, scheduled check-ins, and project management tools. You'll have direct access to our team and receive weekly progress reports with demos of completed features.",
    },
    {
        question: "What if I need changes during development?",
        answer:
            "We understand that requirements can evolve. We build flexibility into our process and include reasonable change requests in our plans. Major scope changes are discussed and quoted separately to ensure transparency.",
    },
    {
        question: "Do you offer fixed-price or hourly billing?",
        answer:
            "We primarily work with fixed-price projects based on clearly defined scope and deliverables. This provides you with cost certainty and allows us to focus on delivering quality results rather than tracking hours.",
    },
]

export default function FAQSection({
    title = "Frequently Asked Questions",
    subtitle = "Get answers to common questions about our services and process.",
    faqs = defaultFAQs,
    className = "",
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={`relative w-full py-20 md:py-28 ${className}`}>
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
                                >
                                    <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                                    <div className="flex-shrink-0">
                                        {openIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-indigo-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <div className="border-t border-gray-700 pt-4">
                                                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA at bottom of FAQ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">Still have questions? We're here to help!</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/schedule-call"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-6 text-base font-medium border-0 rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 text-white"
                        >
                            Schedule a Call
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center h-12 px-6 text-base font-medium border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 rounded-lg backdrop-blur-sm"
                        >
                            Send a Message
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

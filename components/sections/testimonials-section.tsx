"use client"

import { motion } from "framer-motion"

export default function TestimonialsSection() {
    return (
        <section className="relative w-full py-20 md:py-28 z-10">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center max-w-5xl mx-auto mb-12 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                            Client Testimonials
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            quote:
                                "ANTITRIX transformed our digital presence with a stunning website that perfectly captures our brand. Their team was professional, responsive, and delivered beyond our expectations.",
                            author: "John Doe",
                            role: "Business Owner, Australia",
                        },
                        {
                            quote:
                                "Working with ANTITRIX on our mobile app development project was a game-changer. Their technical expertise and attention to detail resulted in a product that our users love.",
                            author: "Jane Smith",
                            role: "Business Owner, England",
                        },
                        {
                            quote:
                                "The e-commerce platform ANTITRIX built for us has significantly increased our online sales. Their understanding of user experience and conversion optimization is impressive.",
                            author: "Robert Johnson",
                            role: "E-commerce Manager, USA",
                        },
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="text-indigo-400 mb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 mb-6 text-lg italic">{testimonial.quote}</p>
                                    <div>
                                        <p className="font-semibold text-white">{testimonial.author}</p>
                                        <p className="text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
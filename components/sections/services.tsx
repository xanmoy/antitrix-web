"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServicesSection() {
    return(
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
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            We offer a comprehensive range of technology services to help your business succeed.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Web Development",
                            description: "Custom websites and web applications built with the latest technologies.",
                            href: "/services/web-development",
                            icon: "🌐",
                        },
                        {
                            title: "App Development",
                            description: "Native and cross-platform mobile applications for iOS and Android.",
                            href: "/services/app-development",
                            icon: "📱",
                        },
                        {
                            title: "DevOps",
                            description: "Streamline your development and operations with automated workflows.",
                            href: "/services/devops",
                            icon: "⚡",
                        },
                        {
                            title: "UI/UX Design",
                            description: "User-centered design that enhances user experience and engagement.",
                            href: "/services/ui-ux",
                            icon: "🎨",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <Link href={service.href}>
                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="text-3xl mb-4">{service.icon}</div>
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">{service.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <Link href="/services">
                        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-6 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                            View All Services
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
) }
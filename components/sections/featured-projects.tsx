"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


export default function FeaturedProjects() {
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
                            Featured Projects
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            Take a look at some of our recent work and see how we&apos;ve helped our clients succeed.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "International Conference on Cybber Security and Artificial Intelligence - JIS Group",
                            description: "A comprehensive event management system for the JIS Group conference, featuring speaker profiles, session scheduling, and attendee registration.",
                            href: "/work/jis-conference",
                            image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154842/Screenshot_From_2025-06-06_01-50-13_pwyhgh.png",
                        },
                        {
                            title: "CYBERTRON - An Initiative by the Department of Computer Science and Engineering - Future Group of Institutions",
                            description: "A dynamic web platform for the Future Group of Institutions' Cybertron event, showcasing speakers, schedules, and interactive features for attendees.",
                            href: "/work/cybertron-fgi",
                            image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156351/Screenshot_From_2025-06-06_02-15-00_gjoyqs.png",
                        },
                        {
                            title: "Surotsav - Flagship Annual Tech and Cultural Fest - DSCSITSC",
                            description: "A vibrant event website for DSCSITSC's Surotsav, featuring event schedules, speaker bios, and interactive elements to engage attendees.",
                            href: "/work/surotsav-dscsit",
                            image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156949/Screenshot_From_2025-06-06_02-25-32_lpufpf.png",
                        },
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
                                <div className="relative h-[250px] w-full overflow-hidden">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        fill
                                        alt={project.title}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <Link href={project.href}>
                                        <Button
                                            variant="link"
                                            className="p-0 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                                        >
                                            View Project
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
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
                    <Link href="/work">
                        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-6 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                            View All Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
"use client"

import Link from "next/link"
import { Calendar, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ScheduleCallHighlightProps {
    title?: string
    description?: string
    className?: string
}

export default function ScheduleCallHighlight({
    title = "Ready to Get Started?",
    description = "Schedule a free consultation to discuss your project and see how we can help you achieve your goals.",
    className = "",
}: ScheduleCallHighlightProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 rounded-3xl" />

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px]">
                <div className="h-full w-full rounded-3xl bg-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 mb-6"
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            <span className="font-medium">Free Consultation</span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent"
                        >
                            {title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-300 mb-6 leading-relaxed"
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link href="/schedule-call">
                                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-14 px-8 text-lg font-medium border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 group">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Schedule a Call
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button
                                    variant="outline"
                                    className="h-14 px-8 text-lg font-medium border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 backdrop-blur-sm"
                                >
                                    View Pricing
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                            {/* Animated Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="absolute inset-0 border-2 border-indigo-500/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="absolute inset-4 border-2 border-purple-500/30 rounded-full border-dashed"
                            />

                            {/* Center Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <Calendar className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                                    <div className="text-2xl font-bold text-white mb-2">30 Min</div>
                                    <div className="text-sm text-gray-400">Free Consultation</div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center"
                            >
                                <Zap className="w-4 h-4 text-white" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

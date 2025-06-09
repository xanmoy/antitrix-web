"use client"

import Link from "next/link"
import { motion } from "framer-motion"


export default function NotFound() {
    return (
        <main className="relative flex-1 bg-black text-white overflow-hidden min-h-screen flex items-center justify-center">
            {/* Animated Background Grid */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                {/* Floating circles */}
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-24 h-24 bg-indigo-600 rounded-full opacity-30 blur-xl"
                />
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-20 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"
                />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-1/3 w-20 h-20 bg-indigo-400 rounded-full opacity-25 blur-lg"
                />
            </div>

            <section className="relative z-10 max-w-xl text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 select-none"
                >
                    404
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-gray-300 mb-8"
                >
                    The page you are looking for does not exist or has been moved.
                </motion.p>

                <Link
                    href="/"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50 hover:from-indigo-500 hover:to-purple-500 transition-transform duration-300 transform hover:scale-105 font-semibold text-white"
                >
                    Go back to Home
                </Link>
            </section>
        </main>
    );
}
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Code, Rocket, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
      <section className="relative w-full py-20 md:py-28 z-10">
          <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="space-y-6"
                  >
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                          About ANTITRIX
                      </h2>
                      <p className="text-xl text-gray-300 font-light">
                          ANTITRIX is a forward-thinking technology service company dedicated to helping businesses thrive in the
                          digital age. We combine technical expertise with creative innovation to deliver solutions that drive
                          growth and efficiency.
                      </p>
                      <p className="text-xl text-gray-300 font-light">
                          Our team of experts works closely with clients to understand their unique challenges and develop
                          tailored strategies that leverage the latest technologies and best practices.
                      </p>
                      <Link href="/about">
                          <Button
                              variant="link"
                              className="p-0 text-indigo-400 hover:text-indigo-300 text-base transition-colors duration-300"
                          >
                              Learn more about us
                              <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                      </Link>
                  </motion.div>
                  <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative h-[400px] w-full"
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                      <Image
                          src="https://res.cloudinary.com/da0a9gxjs/image/upload/v1749152058/img1_c8icdf.jpg"
                          fill
                          alt="About ANTITRIX"
                          className="object-cover rounded-2xl border border-indigo-500/30 relative z-10"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-20" />
                  </motion.div>
              </div>
          </div>
      </section>
  );
}
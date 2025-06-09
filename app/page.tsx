"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Code, Rocket, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import HeroSection from "@/components/sections/hero"
import ServicesSection from "@/components/sections/services"
import ScheduleCallHighlight from "@/components/sections/schedule-call-highlight"
import FAQSection from "@/components/sections/faq-section"
import AboutSection from "@/components/sections/about"
import FeaturedProjects from "@/components/sections/featured-projects"
import TestimonialsSection from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Schedule Call Highlight */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <ScheduleCallHighlight
            title="Ready to Transform Your Business?"
            description="Book a free 30-minute consultation to discuss your project goals, explore solutions, and discover how we can help bring your vision to life."
          />
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      <TestimonialsSection />
      {/* FAQ Section */}
      <FAQSection className="z-10" />

      {/* Clients Section */}
      {/* <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Trusted By Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl">
              We've partnered with forward-thinking companies across industries to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "JISGroup", logo: "https://www.jisgroup.org/images/logo.png" },
              { name: "Future", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvSRYQv4rhImU_QztrqlZmy5aXIr1Z18A1g&s" },
              { name: "DSCSITSC", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjR5tlhVIr0_uoISAdfyVy25CJg9f0MG4UFA&s" },
              // { name: "HealthPlus", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "EduTech", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "LogiFlow", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "PropertyConnect", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "FoodieHub", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "MediaStream", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "TravelNow", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "GreenEnergy", logo: "/placeholder.svg?height=60&width=120" },
              // { name: "SecurityPlus", logo: "/placeholder.svg?height=60&width=120" },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4"
              >
                <div className="relative h-12 w-full opacity-80 hover:opacity-100 transition-opacity duration-300 hover:grayscale-0">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Impact Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Our Impact By The Numbers
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl">
              Measurable results that demonstrate our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "20+",
                label: "Projects Completed",
                description: "Successful projects delivered across various industries",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                description: "Our clients rate their experience as excellent",
              },
              {
                number: "40%",
                label: "Average ROI",
                description: "Average return on investment for our clients",
              },
              {
                number: "12k+",
                label: "Users Reached",
                description: "Combined user base of platforms we've built",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Let&apos;s discuss how ANTITRIX can help you achieve your digital goals.
              </p>
              <div className="pt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-8 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

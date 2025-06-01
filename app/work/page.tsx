"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WorkPage() {
  const projects = [
    {
      title: "Fintech Dashboard",
      description: "A comprehensive financial analytics platform for enterprise clients.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Web Development", "UI/UX", "Dashboard"],
      slug: "fintech-dashboard",
    },
    {
      title: "E-commerce Platform",
      description: "A scalable online shopping solution with integrated payment processing.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Web Development", "E-commerce", "API"],
      slug: "ecommerce-platform",
    },
    {
      title: "Health & Wellness App",
      description: "A mobile application for tracking fitness goals and health metrics.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["App Development", "UI/UX", "Healthcare"],
      slug: "health-app",
    },
    {
      title: "Corporate Intranet",
      description: "A secure internal portal for employee communication and resource management.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Web Development", "Enterprise", "Security"],
      slug: "corporate-intranet",
    },
    {
      title: "Real Estate Marketplace",
      description: "A platform connecting property buyers, sellers, and agents with advanced search capabilities.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Web Development", "Marketplace", "Maps"],
      slug: "real-estate-marketplace",
    },
    {
      title: "Logistics Management System",
      description: "An end-to-end solution for tracking shipments, managing inventory, and optimizing routes.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Custom Software", "Logistics", "Analytics"],
      slug: "logistics-management",
    },
    {
      title: "Educational Platform",
      description: "An interactive learning management system with course creation and student progress tracking.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["Web Development", "Education", "UI/UX"],
      slug: "educational-platform",
    },
    {
      title: "Restaurant Ordering App",
      description: "A mobile application for food ordering, table reservations, and loyalty programs.",
      image: "/placeholder.svg?height=240&width=360",
      tags: ["App Development", "Hospitality", "Payment"],
      slug: "restaurant-app",
    },
  ]

  return (
    <main className="flex-1 bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Our Work
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Explore our portfolio of successful projects across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${project.slug}`}>
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
            className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Let's discuss how ANTITRIX can help bring your vision to life.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-6">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-8 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

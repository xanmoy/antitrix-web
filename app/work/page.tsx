"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WorkPage() {
  const projects = [
    {
      title: "International Conference on Cybber Security and Artificial Intelligence - JIS Group",
      description:
        "A comprehensive event management system for the JIS Group conference, featuring speaker profiles, session scheduling, and attendee registration.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154842/Screenshot_From_2025-06-06_01-50-13_pwyhgh.png",
      tags: ["Web Development", "UI/UX", "Event Management"],
      slug: "jis-conference",
      client: "JIS Group",
      year: "2025",
    },
    {
      title: "CYBERTRON - An Initiative by the Department of Computer Science and Engineering - Future Group of Institutions",
      description:
        "A dynamic web platform for the Future Group of Institutions' Cybertron event, showcasing speakers, schedules, and interactive features for attendees.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156351/Screenshot_From_2025-06-06_02-15-00_gjoyqs.png",
      tags: ["Web Development", "UI/UX", "Event Management"],
      slug: "cybertron-fgi",
      client: "Future Group of Institutions",
      year: "2024",
    },
    {
      title: "Surotsav - Flagship Annual Tech and Cultural Fest - DSCSITSC",
      description:
        "A vibrant event website for DSCSITSC's Surotsav, featuring event schedules, speaker bios, and interactive elements to engage attendees.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156949/Screenshot_From_2025-06-06_02-25-32_lpufpf.png",
      tags: ["App Development", "UI/UX", "Healthcare"],
      slug: "surotsav-dscsit",
      client: "Dr. Sudir Chandra Sur Institute of Technology and Sports Complex",
      year: "2025",
    },
    {
      title: "FR CAFE",
      description:
        "A modern cafe website with an online menu, reservation system, and customer feedback features, enhancing the dining experience.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157906/Screenshot_From_2025-06-06_02-40-30_nsbeex.png",
      tags: ["Web Development", "UI/UX", "Food & Beverage"],
      slug: "fr-cafe",
      client: "FR CAFE",
      year: "2024",
    },
    {
      title: "Metaverse Madness",
      description:
        "Step into the metaverse — a virtual world that feels real. With just a VR headset, you can explore, experience, and turn your dreams into reality. Scroll down and dive into the madness of the metaverse.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158394/Screenshot_From_2025-06-06_02-48-22_apb5eq.png",
      tags: ["Web Development", "Metaverse", "VR"],
      slug: "metaverse-madness",
      client: "Metaverse Innovations",
      year: "2024",
    },
    {
      title: "Ecom Store - ShopEase",
      description:
        "A fully functional e-commerce platform with product listings, shopping cart, and secure payment integration, designed for a seamless shopping experience.",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158851/Screenshot_From_2025-06-06_02-56-28_gfu7ux.png",
      tags: ["Web Development", "E-commerce", "Payment Integration"],
      slug: "ecom-store-shopease",
      client: "ShopEase Online Store",
      year: "2024",
    },
    // {
    //   title: "Educational Platform",
    //   description:
    //     "An interactive learning management system with course creation, student progress tracking, and real-time collaboration tools.",
    //   image: "/placeholder.svg?height=240&width=360",
    //   tags: ["Web Development", "Education", "UI/UX"],
    //   slug: "educational-platform",
    //   client: "EduTech Academy",
    //   year: "2023",
    // },
    // {
    //   title: "Restaurant Ordering App",
    //   description:
    //     "A mobile application for food ordering, table reservations, and loyalty programs with multi-restaurant support.",
    //   image: "/placeholder.svg?height=240&width=360",
    //   tags: ["App Development", "Hospitality", "Payment"],
    //   slug: "restaurant-app",
    //   client: "FoodieHub Restaurants",
    //   year: "2023",
    // },
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
              Explore our portfolio of successful projects across various industries and technologies.
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
                <Link href={`/work/${project.slug}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 h-full">
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-gray-300">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
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
                      <div className="text-indigo-400 flex items-center group-hover:text-indigo-300 transition-colors duration-300">
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-4">
              Project Impact
            </h2>
            <p className="text-xl text-gray-400 font-light">Numbers that showcase our commitment to excellence</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "4+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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

"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      slug: "web-development",
    },
    {
      icon: "📱",
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      slug: "app-development",
    },
    {
      icon: "⚡",
      title: "DevOps",
      description: "Streamline your development and operations with automated workflows.",
      slug: "devops",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement.",
      slug: "ui-ux",
    },
    {
      icon: "🔧",
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business needs.",
      slug: "custom-software",
    },
    {
      icon: "🗄️",
      title: "Database Solutions",
      description: "Efficient database design, migration, and optimization services.",
      slug: "database-solutions",
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Improve the speed and efficiency of your existing applications.",
      slug: "performance-optimization",
    },
    {
      icon: "📊",
      title: "Analytics & Reporting",
      description: "Data visualization and reporting tools to help you make informed decisions.",
      slug: "analytics-reporting",
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
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-4xl mb-6">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="text-indigo-400 flex items-center group-hover:text-indigo-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Learn more</span>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 font-light">
              Contact us today to discuss how we can help you achieve your technology goals.
            </p>
            <div className="pt-6">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-8 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

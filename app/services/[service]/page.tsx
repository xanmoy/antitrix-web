"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import React from "react"

interface ServicePageProps {
  params: {
    service: string
  }
}

export default function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = React.use(params)

  // Service data - in a real app, this would come from a database or API
  const services = {
    "web-development": {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159273/shutter-speed-PBTEeIadS20-unsplash_ntj59j.jpg",
      details: [
        "Responsive website design and development",
        "Progressive Web Applications (PWAs)",
        "E-commerce solutions",
        "Content Management Systems (CMS)",
        "Custom web applications",
        "API development and integration",
      ],
      benefits: [
        "Improved user experience and engagement",
        "Increased conversion rates",
        "Enhanced brand presence",
        "Scalable solutions that grow with your business",
        "SEO-friendly architecture",
      ],
    },
    "app-development": {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159343/lxrcbsv-cOOUKEBpnIw-unsplash_ncaeqb.jpg",
      details: [
        "Native iOS and Android development",
        "Cross-platform development with React Native",
        "App UI/UX design",
        "App testing and quality assurance",
        "App store submission and optimization",
        "Ongoing maintenance and support",
      ],
      benefits: [
        "Reach users on their preferred devices",
        "Create seamless brand experiences",
        "Leverage device features for enhanced functionality",
        "Improve customer engagement and retention",
        "Generate new revenue streams",
      ],
    },
    devops: {
      title: "DevOps",
      description: "Streamline your development and operations with automated workflows.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159649/growtika-wLknZfsKmxQ-unsplash_ohqfdi.jpg",
      details: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration with Kubernetes",
        "Cloud infrastructure management",
        "Monitoring and logging solutions",
        "Security implementation and best practices",
      ],
      benefits: [
        "Faster time to market",
        "Improved collaboration between teams",
        "Increased deployment frequency",
        "Enhanced system stability and reliability",
        "Reduced operational costs",
      ],
    },
    "ui-ux": {
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159516/mehdi-mirzaie-kUe-dIOu5FE-unsplash_txfk2y.jpg",
      details: [
        "User research and persona development",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Accessibility compliance",
      ],
      benefits: [
        "Improved user satisfaction and engagement",
        "Reduced development costs through early problem identification",
        "Increased conversion rates",
        "Stronger brand identity",
        "Competitive advantage through superior user experience",
      ],
    },
    "custom-software": {
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business needs.",
      banner: "/placeholder.svg?height=400&width=1200",
      details: [
        "Business process analysis",
        "Custom software architecture",
        "Enterprise application development",
        "Legacy system modernization",
        "Integration with existing systems",
        "Ongoing support and maintenance",
      ],
      benefits: [
        "Solutions tailored to your exact requirements",
        "Improved operational efficiency",
        "Competitive advantage through unique capabilities",
        "Scalable architecture that grows with your business",
        "Full ownership of intellectual property",
      ],
    },
    "database-solutions": {
      title: "Database Solutions",
      description: "Efficient database design, migration, and optimization services.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159767/growtika-ahgsuFHlIFo-unsplash_kefofe.jpg",
      details: [
        "Database architecture and design",
        "Data migration and integration",
        "Performance optimization",
        "Database security implementation",
        "Backup and recovery solutions",
        "NoSQL and SQL database expertise",
      ],
      benefits: [
        "Improved data integrity and reliability",
        "Enhanced query performance",
        "Scalable data storage solutions",
        "Reduced operational costs",
        "Secure data management",
      ],
    },
    "performance-optimization": {
      title: "Performance Optimization",
      description: "Improve the speed and efficiency of your existing applications.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159823/growtika-183Yxo3vsGY-unsplash_pq3lre.jpg",
      details: [
        "Performance auditing and analysis",
        "Front-end optimization",
        "Back-end optimization",
        "Database query optimization",
        "Caching strategies implementation",
        "Load testing and scalability planning",
      ],
      benefits: [
        "Improved user experience through faster load times",
        "Reduced bounce rates",
        "Higher conversion rates",
        "Lower infrastructure costs",
        "Better search engine rankings",
      ],
    },
    "analytics-reporting": {
      title: "Analytics & Reporting",
      description: "Data visualization and reporting tools to help you make informed decisions.",
      banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749159857/deng-xiang--WXQm_NTK0U-unsplash_hy9sij.jpg",
      details: [
        "Custom dashboard development",
        "Data visualization implementation",
        "Business intelligence solutions",
        "Real-time analytics",
        "Predictive analytics",
        "Integration with existing data sources",
      ],
      benefits: [
        "Data-driven decision making",
        "Improved business insights",
        "Identification of trends and opportunities",
        "Enhanced operational efficiency",
        "Competitive advantage through better market understanding",
      ],
    },
  }

  const serviceData = services[service as keyof typeof services]

  if (!serviceData) {
    notFound()
  }

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
              {serviceData.title}
            </h1>
            <p className="text-xl text-gray-300 font-light">{serviceData.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="relative w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[300px] md:h-[400px] mx-4 md:mx-6 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
          <Image
            src={serviceData.banner || "/placeholder.svg"}
            alt={serviceData.title}
            fill
            className="object-cover border border-indigo-500/30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </section>

      {/* Service Details */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                What We Offer
              </h2>
              <ul className="space-y-4">
                {serviceData.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Why Choose ANTITRIX
              </h2>
              <ul className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-1 h-5 w-5 text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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
              Contact us today to discuss how our {serviceData.title.toLowerCase()} services can help your business
              succeed.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row pt-6">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-8 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

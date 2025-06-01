"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>


      {/* Hero Section */}
      <section className="relative w-full h-auto mt-16 flex items-center justify-center z-10">
        <div className="container px-4 md:px-6 flex justify-center">
          <div className="flex flex-col justify-center items-center text-center space-y-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Next-Gen Technology Solutions
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
                >
                  Transforming Ideas Into Digital Reality
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-gray-300 text-xl md:text-2xl font-light"
                >
                  We deliver cutting-edge software solutions that empower businesses to thrive in the digital landscape.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col gap-4 min-[400px]:flex-row justify-center mt-8"
              >
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-6 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="h-12 px-6 text-base border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                  >
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12"
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

      {/* About Section */}
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
                src="/placeholder.svg?height=400&width=600"
                fill
                alt="About ANTITRIX"
                className="object-cover rounded-2xl border border-indigo-500/30 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start max-w-5xl mx-auto mb-12"
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
                title: "Fintech Dashboard",
                description: "A comprehensive financial analytics platform for enterprise clients.",
                href: "/work/fintech-dashboard",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "E-commerce Platform",
                description: "A scalable online shopping solution with integrated payment processing.",
                href: "/work/ecommerce-platform",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Health & Wellness App",
                description: "A mobile application for tracking fitness goals and health metrics.",
                href: "/work/health-app",
                image: "/placeholder.svg?height=300&width=500",
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

      {/* Testimonials */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start max-w-5xl mx-auto mb-12"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "ANTITRIX transformed our digital presence with a stunning website that perfectly captures our brand. Their team was professional, responsive, and delivered beyond our expectations.",
                author: "John Doe",
                role: "CEO, TechCorp",
              },
              {
                quote:
                  "Working with ANTITRIX on our mobile app development project was a game-changer. Their technical expertise and attention to detail resulted in a product that our users love.",
                author: "Jane Smith",
                role: "CTO, FinanceApp",
              },
              {
                quote:
                  "The e-commerce platform ANTITRIX built for us has significantly increased our online sales. Their understanding of user experience and conversion optimization is impressive.",
                author: "Robert Johnson",
                role: "Marketing Director, RetailPlus",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-indigo-400 mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
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

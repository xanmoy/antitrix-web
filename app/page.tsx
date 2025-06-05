"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Code, Rocket, Shield, Star } from "lucide-react"
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
      <section className="relative w-full  flex items-center py-20 md:py-32 lg:py-40 z-10">
        <div className="container px-4 md:px-6 relative w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto">
            {/* Floating Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-10 text-indigo-400/30"
              >
                <Code size={40} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-32 right-16 text-purple-400/30"
              >
                <Rocket size={35} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-40 left-20 text-indigo-400/30"
              >
                <Shield size={30} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-32 right-12 text-purple-400/30"
              >
                <Star size={25} />
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="font-medium">Next-Gen Technology Solutions</span>
              <div className="ml-2 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Let&apos;s Build
                </span>
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Vision
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-3xl text-gray-300 text-xl md:text-2xl font-light leading-relaxed"
            >
              Transforming ideas into digital realities with cutting-edge technology solutions that drive innovation and
              growth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-14 px-8 text-lg font-medium border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="h-14 px-8 text-lg font-medium border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 backdrop-blur-sm"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 w-full max-w-4xl"
            >
              {[
                { number: "50+", label: "Projects Delivered", icon: "🚀" },
                { number: "98%", label: "Client Satisfaction", icon: "⭐" },
                { number: "5+", label: "Years Experience", icon: "💎" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="flex flex-col items-center space-y-2 text-gray-400"
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="w-1 h-3 bg-indigo-400 rounded-full mt-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
          />
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
            className="flex flex-col items-start max-w-5xl mx-auto mb-12"
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
                number: "50+",
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
                number: "5M+",
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

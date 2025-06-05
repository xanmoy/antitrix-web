"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Tanmoy Ganguly",
      role: "Cheif Executive Officer",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749152180/WhatsApp_Image_2025-03-22_at_14.55.44_tmshlh.jpg",
      bio: "Tanmoy is a visionary tech leader with a passion for innovation, steering Antitrix to deliver fast, scalable web and mobile solutions that empower businesses.",
    },
    {
      name: "Sreejan Naru",
      role: "Chief Technology Officer",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749152415/1667393879236_noa165.jpg",
      bio: "Sreejan is a seasoned technologist with a passion for innovation, leading our engineering team to build cutting-edge solutions that empower businesses.",
    },
    {
      name: "Avijit Sarkar",
      role: "Vice President of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Avijit is a dynamic engineering leader with a track record of delivering high-quality software solutions, ensuring our projects are executed with excellence and efficiency.",
    },
    {
      name: "Rithuraj Debnath",
      role: "Human Resources Manager",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749152545/1744110134741_wvod2l.jpg",
      bio: "Rithuraj is a dedicated HR professional, fostering a positive and inclusive workplace culture at Antitrix, ensuring our team thrives and grows together.",
    },
    {
      name: "Ayush Mukherjee",
      role: "Business Development Manager",
      image: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749152915/1683448500229_kidli6.jpg",
      bio: "Ayush is a strategic thinker and business development expert, driving growth and forging partnerships that expand Antitrix's reach and impact in the tech industry.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do.",
      icon: "⭐",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their success.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices.",
      icon: "🛡️",
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
              About ANTITRIX
            </h1>
            <p className="text-xl text-gray-300 font-light">
              We are a team of passionate technologists dedicated to helping businesses succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
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
                Our Story
              </h2>
              <p className="text-gray-300 text-lg font-light">
                Founded in 2025, ANTITRIX began with a simple mission: to help businesses leverage technology to achieve
                their goals. What started as a small team of passionate developers has grown into a full-service
                technology company serving clients across industries and around the world.
              </p>
              <p className="text-gray-300 text-lg font-light">
                Our journey has been defined by a commitment to excellence, innovation, and client success. We believe
                that technology should be an enabler, not a barrier, and we work tirelessly to create solutions that are
                both powerful and accessible.
              </p>
              <p className="text-gray-300 text-lg font-light">
                Today, ANTITRIX is recognized as a leader in web and mobile development, with a portfolio of successful
                projects spanning from startups to enterprise clients. Our team continues to grow, but our core values
                and commitment to client success remain unchanged.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
              <Image
                src="https://res.cloudinary.com/da0a9gxjs/image/upload/v1749153192/img2_ekl6dn.jpg"
                fill
                alt="ANTITRIX Office"
                className="object-cover rounded-2xl border border-indigo-500/30 relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl">
              These core principles guide everything we do at ANTITRIX.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
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
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-indigo-300 mb-3">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-20 md:py-28 z-10">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-3xl">
              Meet the talented individuals who make ANTITRIX exceptional.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
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
                      src={member.image || "/placeholder.svg"}
                      fill
                      alt={member.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-indigo-400 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-400">{member.bio}</p>
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
                Join Our Journey
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Partner with ANTITRIX and let&apos;s build something amazing together.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row pt-6 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

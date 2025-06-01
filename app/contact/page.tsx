"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch soon!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-indigo-400" />,
      title: "Address",
      content: (
        <>
          123 Tech Street, Suite 100
          <br />
          San Francisco, CA 94107
        </>
      ),
    },
    {
      icon: <Mail className="h-6 w-6 text-indigo-400" />,
      title: "Email",
      content: (
        <Link href="mailto:info@antitrix.com" className="hover:text-indigo-400 transition-colors duration-300">
          info@antitrix.com
        </Link>
      ),
    },
    {
      icon: <Phone className="h-6 w-6 text-indigo-400" />,
      title: "Phone",
      content: (
        <Link href="tel:+1234567890" className="hover:text-indigo-400 transition-colors duration-300">
          +1 (234) 567-890
        </Link>
      ),
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Have a question or ready to start your project? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
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
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Your email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="min-h-[150px] bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-gray-400">Reach out to us directly using the information below.</p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                        <div className="text-gray-400">{info.content}</div>
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
                className="relative h-[300px] rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800"
              >
                {/* This would be a map in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Interactive map would be displayed here</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

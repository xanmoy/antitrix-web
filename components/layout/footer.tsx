"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                ANTITRIX
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming ideas into digital realities with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {[
                // { Icon: Facebook, href: "#", label: "Facebook" },
                // { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "https://www.instagram.com/antitrix.corp/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/antitrix/", label: "LinkedIn" },
              ].map(({ Icon, href, label }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 block p-2"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Services",
              links: [
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/app-development", label: "App Development" },
                { href: "/services/devops", label: "DevOps" },
                { href: "/services/ui-ux", label: "UI/UX Design" },
              ],
            },
            {
              title: "Company",
              links: [
                { href: "/about", label: "About Us" },
                { href: "/work", label: "Our Work" },
                { href: "/contact", label: "Contact" },
                { href: "/careers", label: "Careers" },
              ],
            },
            {
              title: "Contact",
              links: [
                { href: "mailto:antitrixcorp@proton.me", label: "antitrixcorp@proton.me" },
                // { href: "tel:+1234567890", label: "+1 (234) 567-890" },
                { href: "#", label: "Greater Kolkata, West Bengal, India" },
              ],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300 block py-1"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ANTITRIX. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

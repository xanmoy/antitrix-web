"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md"
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Antitrix
          </motion.span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/work", label: "Work" },
            {
              href: "/pricing",
              label: "Pricing",
            },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.href)
                    ? "text-indigo-400"
                    : "text-gray-300 hover:text-indigo-400"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href="/schedule-call">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-10 border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
              Schedule a Call
            </Button>
          </Link>
        </div>
        <button className="block md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="container md:hidden bg-black/95 backdrop-blur-md"
        >
          <nav className="flex flex-col space-y-4 py-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/work", label: "Work" },
              {
                href: "/pricing",
                label: "Pricing",
              },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-indigo-400" : "text-gray-300"
                }`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/schedule-call" onClick={toggleMenu}>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 mt-2 border-0">
                Schedule a Call
              </Button>
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

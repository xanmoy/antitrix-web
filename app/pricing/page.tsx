"use client"

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ScheduleCallHighlight from "@/components/sections/schedule-call-highlight"
import FAQSection from "@/components/sections/faq-section"

export default function PricingPage() {
    const plans = [
        {
            id: "starter",
            name: "Starter",
            description: "Ideal for startups looking to launch quickly with essential features.",
            features: [
                "1 web or mobile application (MVP)",
                "Clean, responsive UI with basic UX",
                "Rapid development: 3–4 weeks delivery",
                "Free 1-month maintenance after launch",
                "Basic deployment setup (VPS/shared hosting)",
                "Source code with deployment instructions",
            ],
        },
        {
            id: "growth",
            name: "Growth",
            description: "Perfect for growing businesses needing scalability and performance.",
            popular: true,
            features: [
                "Multiple apps or cross-platform support",
                "Custom UI/UX with brand alignment",
                "Agile sprints & modular architecture",
                "Free 2-month maintenance & bug fixing",
                "CI/CD pipeline, Docker-based deployment",
                "API integration (payment, auth, etc.)",
                "Performance optimization included",
            ],
        },
        {
            id: "enterprise",
            name: "Enterprise",
            description: "Comprehensive solution for high-scale systems and enterprise-grade needs.",
            features: [
                "Enterprise-grade architecture (microservices/SOA)",
                "Advanced UI/UX, animations, accessibility",
                "Dedicated team & project manager",
                "Free 3-month maintenance & system health checks",
                "Custom infrastructure (AWS, GCP, Azure, hybrid cloud)",
                "Security protocols (OWASP, SSL, GDPR compliance)",
                "Team training, onboarding & technical documentation",
                "Performance monitoring & advanced logging",
            ],
        },
    ]
      

    const pricingFAQs = [
        {
            question: "How do you determine the final project cost?",
            answer:
                "Project costs are determined based on scope, complexity, timeline, and specific requirements. After our consultation call, we'll provide a detailed proposal with transparent pricing and no hidden fees.",
        },
        {
            question: "Do you offer payment plans?",
            answer:
                "Yes! We offer flexible payment plans with milestone-based payments. Typically, we structure payments as 30% upfront, 40% at midpoint, and 30% upon completion, but we can customize this based on your needs.",
        },
        {
            question: "What's included in the support period?",
            answer:
                "Support includes bug fixes, minor updates, technical assistance, and guidance on using your application. Major feature additions or significant changes are quoted separately.",
        },
        {
            question: "Can I upgrade my plan during the project?",
            answer:
                "If your requirements grow during development, we can upgrade your plan or add additional services. We'll provide transparent pricing for any scope changes.",
        },
        {
            question: "Do you offer discounts for non-profits or startups?",
            answer:
                "Yes, we offer special pricing for qualifying non-profits and early-stage startups. Contact us during your consultation to discuss available discounts.",
        },
    ]

    return (
        <main className="flex-1 bg-black text-white overflow-hidden">
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>

            <section className="relative w-full py-20 md:py-32 z-10">
                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                            Choose Your Plan
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
                            Select the perfect plan for your project. All plans include our commitment to quality and excellence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className={`relative group ${plan.popular ? "md:-mt-4" : ""}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}

                                <div
                                    className={`bg-gray-900/50 backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden ${plan.popular
                                            ? "border-indigo-500/50 hover:border-indigo-400"
                                            : "border-gray-800 hover:border-indigo-500/50"
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                            <p className="text-gray-400">{plan.description}</p>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            {plan.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/schedule-call?plan=${plan.id}`}>
                                            <Button
                                                className={`w-full h-12 text-base font-medium border-0 transition-all duration-300 group ${plan.popular
                                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                                                        : "bg-gray-800 hover:bg-gray-700 text-white"
                                                    }`}
                                            >
                                                Schedule a Call
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-16"
                    >
                        <p className="text-gray-400 mb-6">
                            Not sure which plan is right for you? Let's discuss your specific needs.
                        </p>
                        <Link href="/schedule-call">
                            <Button
                                variant="outline"
                                className="h-12 px-8 text-base border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                            >
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Call Highlight */}
            <section className="relative w-full py-20 md:py-28 z-10">
                <div className="container px-4 md:px-6">
                    <ScheduleCallHighlight
                        title="Let's Discuss Your Project"
                        description="Every project is unique. Schedule a free consultation to get a personalized quote and timeline that fits your specific needs and budget."
                    />
                </div>
            </section>

            {/* Pricing FAQ */}
            <FAQSection
                title="Pricing Questions"
                subtitle="Common questions about our pricing and payment process."
                faqs={pricingFAQs}
                className="z-10"
            />
        </main>
    )
}

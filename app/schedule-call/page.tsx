"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar, Clock, User, Mail, MessageSquare, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"

export default function ScheduleCallPage() {
    const searchParams = useSearchParams()
    const preSelectedPlan = searchParams.get("plan")

    const [formData, setFormData] = useState({
        date: "",
        time: "",
        name: "",
        email: "",
        description: "",
        plan: preSelectedPlan || "starter",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (preSelectedPlan) {
            setFormData((prev) => ({ ...prev, plan: preSelectedPlan }))
        }
    }, [preSelectedPlan])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handlePlanChange = (plan: string) => {
        setFormData((prev) => ({ ...prev, plan }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/schedule-call-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setIsSubmitted(true)
                setFormData({
                    date: "",
                    time: "",
                    name: "",
                    email: "",
                    description: "",
                    plan: preSelectedPlan || "starter",
                })
            }
        } catch (err) {
            console.error("Call scheduling email failed", err)
        } finally {
            setIsSubmitting(false)
        }
    }
      

    const timeSlots = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
    ]

    const plans = [
        { id: "starter", name: "Starter", description: "Perfect for small projects" },
        { id: "growth", name: "Growth", description: "Ideal for growing businesses" },
        { id: "enterprise", name: "Enterprise", description: "For large-scale solutions" },
    ]

    if (isSubmitted) {
        return (
            <main className="flex-1 bg-black text-white overflow-hidden">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                </div>

                <section className="relative w-full min-h-screen flex items-center py-20 z-10">
                    <div className="container px-4 md:px-6 relative w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto"
                        >
                            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                                Thanks! We'll get in touch soon.
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                We've received your request and will contact you within 24 hours to schedule your call.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
        )
    }

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
                        className="max-w-2xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                                Schedule a Call
                            </h1>
                            <p className="text-xl text-gray-400 font-light">
                                Let's discuss your project and how we can help you achieve your goals.
                            </p>
                            <p className="text-sm text-gray-500 mt-2">Timezone: Asia/Kolkata (IST)</p>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Date Selection */}
                                <div className="space-y-3">
                                    <Label htmlFor="date" className="text-gray-300 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Choose a Date
                                    </Label>
                                    <Input
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="bg-gray-800/50 border-gray-700 text-white h-12 text-lg"
                                    />
                                </div>

                                {/* Time Selection */}
                                <div className="space-y-3">
                                    <Label className="text-gray-300 flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        Choose a Time
                                    </Label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setFormData((prev) => ({ ...prev, time }))}
                                                className={`p-3 rounded-xl border transition-all duration-300 ${formData.time === time
                                                        ? "bg-indigo-600 border-indigo-500 text-white"
                                                        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-indigo-500/50"
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Name */}
                                <div className="space-y-3">
                                    <Label htmlFor="name" className="text-gray-300 flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Your full name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-gray-800/50 border-gray-700 text-white h-12 text-lg"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-gray-300 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-gray-800/50 border-gray-700 text-white h-12 text-lg"
                                    />
                                </div>

                                {/* Description */}
                                <div className="space-y-3">
                                    <Label htmlFor="description" className="text-gray-300 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Brief Description
                                    </Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Tell us about your project..."
                                        required
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="bg-gray-800/50 border-gray-700 text-white min-h-[120px] text-lg"
                                    />
                                </div>

                                {/* Plan Selection */}
                                <div className="space-y-3">
                                    <Label className="text-gray-300 flex items-center gap-2">
                                        <Package className="w-4 h-4" />
                                        Choose a Plan
                                    </Label>
                                    <div className="space-y-3">
                                        {plans.map((plan) => (
                                            <button
                                                key={plan.id}
                                                type="button"
                                                onClick={() => handlePlanChange(plan.id)}
                                                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${formData.plan === plan.id
                                                        ? "bg-indigo-600/20 border-indigo-500 text-white"
                                                        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-indigo-500/50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`w-4 h-4 rounded-full border-2 ${formData.plan === plan.id ? "bg-indigo-500 border-indigo-500" : "border-gray-500"
                                                            }`}
                                                    />
                                                    <div>
                                                        <div className="font-medium">{plan.name}</div>
                                                        <div className="text-sm text-gray-400">{plan.description}</div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={isSubmitting || !formData.time}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-14 text-lg font-medium border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
                                >
                                    {isSubmitting ? "Scheduling..." : "Schedule Now"}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

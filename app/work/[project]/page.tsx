"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import React from "react"

interface ProjectPageProps {
    params: {
        project: string
    }
}

export default function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
    const { project } = React.use(params)

    // Project data - in a real app, this would come from a database or API
    interface ProjectData {
        title: string;
        description: string;
        client: string;
        year: string;
        category: string;
        banner: string;
        images: string[];
        technologies: string[];
        features: string[];
        challenges: string[];
        results: string[];
        liveUrl: string | null;
        githubUrl?: string | null;
    }

    const projects: { [key: string]: ProjectData } = {
        "jis-conference": {
            title: "International Conference on Cybber Security and Artificial Intelligence - JIS Group",
            description: "A comprehensive conference management system for organizing international events.",
            client: "JIS Group",
            year: "2025",
            category: "Web Development",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154842/Screenshot_From_2025-06-06_01-50-13_pwyhgh.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154972/Screenshot_From_2025-06-06_01-51-35_j7jxu9.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154974/Screenshot_From_2025-06-06_01-52-27_dga8ns.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749154972/Screenshot_From_2025-06-06_01-51-35_j7jxu9.png",
            ],
            technologies: ["React", "Next.js", "TypeScript", "Node.js", "Microsoft CMT", "Cloudinary", "Framer Motion"],
            features: [
                "User registration and profile management",
                "Conference schedule management",
                "Paper submission and review system",
                "Speaker and attendee management",
                "Real-time notifications and updates",
                "Mobile-responsive design",
            ],
            challenges: [
                "Handling high traffic during peak registration periods",
                "Ensuring smooth paper submission and review process",
                "Integrating with existing conference management tools",
                "Creating an intuitive user interface for diverse users",
            ],
            results: [
                "Successfully managed over 300 registrations",
                "Streamlined paper submission process with 500+ submissions",
                "Enhanced user engagement with real-time updates",
                "Improved conference organization efficiency by 40%",
                "Achieved 95% user satisfaction rating",
            ],
            liveUrl: "https://iccsai.org/",
            // githubUrl: "https://github.com/example",
        },
        "cybertron-fgi": {
            title: "CYBERTRON - An Initiative by the Department of Computer Science and Engineering - Future Group of Institutions",
            description: "A dynamic web platform for the Future Group of Institutions' Cybertron event, showcasing speakers, schedules, and interactive features for attendees.",
            client: "Future Group of Institutions",
            year: "2024",
            category: "Web Development",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156351/Screenshot_From_2025-06-06_02-15-00_gjoyqs.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156351/Screenshot_From_2025-06-06_02-15-00_gjoyqs.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156352/Screenshot_From_2025-06-06_02-15-31_q7zcso.png",
                
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156351/Screenshot_From_2025-06-06_02-15-07_fbwvgl.png",
            ],
            technologies: ["Next.js", "React", "MongoDB", "Redis", "Docker", "Vercel"],
            features: [
                "Dynamic speaker profiles with bios and session details",
                "Interactive schedule with real-time updates",
                "Live chat and Q&A features for attendees",
                "Session feedback and rating system",
                "Admin dashboard for managing content",
                "Mobile-friendly design for on-the-go access",
                
            ],
            challenges: [
                "Scaling to handle high traffic during the event",
                "Ensuring real-time updates for schedules and sessions",
                "Integrating live chat functionality",
                "Creating an engaging user experience for diverse attendees",
               
            ],
            results: [
                "Successfully hosted over 500 attendees",
                "Real-time updates led to 95% attendee engagement",
                "Increased speaker interaction by 60%",
                "Achieved 4.8/5 average attendee satisfaction rating",
                
            ],
            liveUrl: "https://cybertron.vercel.app/",
            // githubUrl: "https://github.com/example",
        },
        "surotsav-dscsit": {
            title: "Surotsav - Flagship Annual Tech and Cultural Fest of DSCSITSC",
            description: "A vibrant web platform for the Surotsav fest, featuring event schedules, speaker profiles, and interactive features for attendees.",
            client: "DSCSITSC",
            year: "2025",
            category: "Web Development",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749156949/Screenshot_From_2025-06-06_02-25-32_lpufpf.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157188/Screenshot_From_2025-06-06_02-29-28_l5zeho.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157188/Screenshot_From_2025-06-06_02-29-18_ablntu.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157187/Screenshot_From_2025-06-06_02-29-12_z650ub.png",
            ],
            technologies: ["React", "Nrxt.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
            features: [
                "Event schedule with real-time updates",
                "Speaker profiles with detailed bios",
                "Interactive attendee engagement features",
                "Live chat and Q&A functionality",
                "Admin dashboard for event management",
                "Mobile-responsive design for easy access",
                
            ],
            challenges: [
                "Handling high traffic during peak event times",
                "Ensuring real-time updates for schedules and speakers",
                "Integrating live chat functionality",
                "Creating an engaging user experience for diverse attendees",
            ],
            results: [
                "Successfully hosted over 1,000 attendees",
                "Real-time updates led to 90% attendee engagement",
                "Increased speaker interaction by 70%",
                "Achieved 4.9/5 average attendee satisfaction rating",
            ],
            liveUrl: "https://surotsav.xanmoy.in",
            // githubUrl: "https://github.com/example",
        },
        "fr-cafe": {
            title: "FR Cafe",
            description: "A modern cafe website with an online menu, reservation system, and customer feedback features, enhancing the dining experience.",
            client: "FR Cafe",
            year: "2024",
            category: "Web Development",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157906/Screenshot_From_2025-06-06_02-40-30_nsbeex.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157906/Screenshot_From_2025-06-06_02-40-30_nsbeex.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157907/Screenshot_From_2025-06-06_02-41-02_vq9msf.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749157906/Screenshot_From_2025-06-06_02-40-46_rcavu2.png",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "OAuth 2.0"],
            features: [
                "Online menu with dynamic updates",
                "Reservation system with real-time availability",
                "Customer feedback and rating system",
                "Admin dashboard for managing menu and reservations",
                "Mobile-responsive design for easy access",
                "Social media integration for sharing experiences",
            ],
            challenges: [
                "Ensuring real-time updates for menu and reservations",
                "Creating a seamless reservation experience",
                "Integrating customer feedback features",
                "Optimizing performance for high traffic during peak hours",
            ],
            results: [
                "Increased online reservations by 40%",
                "Enhanced customer engagement with feedback system",
                "Achieved 4.8/5 average customer rating",
                "Improved operational efficiency with admin dashboard",
            ],
            liveUrl: "https://food-ordering-cafe.vercel.app",
            githubUrl: null,
        },
        "metaverse-madness": {
            title: "Metaverse Madness",
            description: "An immersive virtual reality game set in a futuristic metaverse, featuring multiplayer interactions and dynamic environments.",
            client: "Metaverse Innovations",
            year: "2024",
            category: "Web Development",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158394/Screenshot_From_2025-06-06_02-48-22_apb5eq.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158396/Screenshot_From_2025-06-06_02-49-26_pgcbsv.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158395/Screenshot_From_2025-06-06_02-49-21_bwc3ex.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158394/Screenshot_From_2025-06-06_02-48-32_tgxtr3.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158397/Screenshot_From_2025-06-06_02-49-32_ju2m0v.png",
            ],
            technologies: ["Next.js", "Three.js", "WebGL", "Node.js", "Socket.io", "MongoDB"],
            features: [
                "Immersive 3D environments",
                "Multiplayer interactions with real-time updates",
                "Dynamic character customization",
                "In-game economy and trading system",
                "Virtual events and experiences",
                "Cross-platform compatibility (web, VR, AR)",
            ],
            challenges: [
                "Creating a seamless multiplayer experience",
                "Optimizing performance for real-time rendering",
                "Ensuring cross-platform compatibility",
                "Designing engaging and interactive environments",
            ],
            results: [
                "Over 10,000 active users within the first month",
                "Increased user engagement with real-time interactions",
                "Achieved 4.9/5 average user rating",
                "Expanded to include virtual events and experiences",
            ],
            liveUrl: "https://madness-of-metaverse.vercel.app",
            githubUrl: null,
        },
        "ecom-store-shopease": {
            title: "E-commerce Store - ShopEase",
            description: "A feature-rich e-commerce platform with product management, secure payments, and user-friendly shopping experience.",
            client: "ShopEase Inc.",
            year: "2024",
            category: "E-commerce",
            banner: "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158851/Screenshot_From_2025-06-06_02-56-28_gfu7ux.png",
            images: [
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158851/Screenshot_From_2025-06-06_02-56-28_gfu7ux.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158852/Screenshot_From_2025-06-06_02-56-34_vevrun.png",
                "https://res.cloudinary.com/da0a9gxjs/image/upload/v1749158852/Screenshot_From_2025-06-06_02-57-05_xxsbgz.png",
            ],
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
            features: [
                
                "Product catalog with dynamic filtering",
                "User authentication and profile management",
                "Shopping cart and checkout process",
                "Secure payment integration with Stripe",
                "Order tracking and history",
                "Admin dashboard for product management",
            ],
            challenges: [
                "Ensuring secure payment processing",
                "Creating a seamless user experience for shopping",
                "Implementing real-time inventory management",
                "Optimizing performance for high traffic during sales",
            ],
            results: [
                "Increased sales by 50% within the first quarter",
                "Achieved 4.8/5 average customer satisfaction rating",
                "Streamlined order processing with real-time updates",
                "Expanded product catalog to over 1,000 items",
            ],
            liveUrl: "https://ecom-next-sanity.vercel.app",
            githubUrl: null,
        },
        // "educational-platform": {
        //     title: "Educational Platform",
        //     description: "An interactive learning management system with course creation and student progress tracking.",
        //     client: "EduTech Academy",
        //     year: "2023",
        //     category: "Web Development",
        //     banner: "/placeholder.svg?height=600&width=1200",
        //     images: [
        //         "/placeholder.svg?height=400&width=600",
        //         "/placeholder.svg?height=400&width=600",
        //         "/placeholder.svg?height=400&width=600",
        //     ],
        //     technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3", "Stripe"],
        //     features: [
        //         "Interactive course builder",
        //         "Video streaming and playback",
        //         "Real-time collaboration tools",
        //         "Progress tracking and analytics",
        //         "Assessment and quiz system",
        //         "Certificate generation",
        //     ],
        //     challenges: [
        //         "Ensuring smooth video streaming for global users",
        //         "Creating engaging interactive learning experiences",
        //         "Implementing robust progress tracking",
        //         "Scaling to support thousands of concurrent users",
        //     ],
        //     results: [
        //         "10,000+ enrolled students",
        //         "95% course completion rate",
        //         "4.9/5 average course rating",
        //         "Expanded to 15+ countries",
        //     ],
        //     liveUrl: "https://example.com",
        //     githubUrl: "https://github.com/example",
        // },
        // "restaurant-app": {
        //     title: "Restaurant Ordering App",
        //     description: "A mobile application for food ordering, table reservations, and loyalty programs.",
        //     client: "FoodieHub Restaurants",
        //     year: "2023",
        //     category: "App Development",
        //     banner: "/placeholder.svg?height=600&width=1200",
        //     images: [
        //         "/placeholder.svg?height=400&width=600",
        //         "/placeholder.svg?height=400&width=600",
        //         "/placeholder.svg?height=400&width=600",
        //     ],
        //     technologies: ["Flutter", "Firebase", "Stripe", "Google Maps", "Node.js", "PostgreSQL"],
        //     features: [
        //         "Online food ordering system",
        //         "Table reservation management",
        //         "Loyalty points and rewards",
        //         "Real-time order tracking",
        //         "Push notifications",
        //         "Multi-restaurant support",
        //     ],
        //     challenges: [
        //         "Coordinating orders across multiple restaurants",
        //         "Implementing accurate delivery time estimates",
        //         "Creating seamless payment experience",
        //         "Ensuring app performance during peak hours",
        //     ],
        //     results: [
        //         "50+ partner restaurants",
        //         "20,000+ monthly orders",
        //         "4.7/5 app store rating",
        //         "35% increase in restaurant revenue",
        //     ],
        //     liveUrl: "https://example.com",
        //     githubUrl: "https://github.com/example",
        // },
    }

    const projectData = projects[project as keyof typeof projects]

    if (!projectData) {
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
                        className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto"
                    >
                        <div className="flex items-center gap-4 text-sm text-indigo-400">
                            <span>{projectData.category}</span>
                            <span>•</span>
                            <span>{projectData.year}</span>
                            <span>•</span>
                            <span>{projectData.client}</span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                            {projectData.title}
                        </h1>
                        <p className="text-xl text-gray-300 font-light max-w-3xl">{projectData.description}</p>
                        <div className="flex gap-4 pt-4">
                            {projectData.liveUrl && (
                                <Link href={projectData.liveUrl} target="_blank">
                                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-12 px-6 text-base border-0 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300">
                                        View Live Site
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            )}
                            {projectData.githubUrl && (
                                <Link href={projectData.githubUrl} target="_blank">
                                    <Button
                                        variant="outline"
                                        className="h-12 px-6 text-base border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                                    >
                                        View Code
                                        <Github className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Banner Image */}
            <section className="relative w-full z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] mx-4 md:mx-6 rounded-2xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
                    <Image
                        src={projectData.banner || "/placeholder.svg"}
                        alt={projectData.title}
                        fill
                        className="object-cover border border-indigo-500/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
            </section>

            {/* Project Details */}
            <section className="relative w-full py-20 md:py-28 z-10">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-3">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                                    Technologies Used
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {projectData.technologies.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                                    Key Features
                                </h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {projectData.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-3 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
                                        >
                                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Project Images */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                                    Project Gallery
                                </h2>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {projectData.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="relative h-[250px] rounded-xl overflow-hidden border border-gray-800"
                                        >
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                fill
                                                alt={`${projectData.title} screenshot ${index + 1}`}
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Challenges */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-4 text-indigo-300">Challenges</h3>
                                <ul className="space-y-3">
                                    {projectData.challenges.map((challenge, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-sm text-gray-400 flex items-start gap-2"
                                        >
                                            <span className="text-indigo-400 mt-1">•</span>
                                            {challenge}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Results */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-4 text-indigo-300">Results</h3>
                                <ul className="space-y-3">
                                    {projectData.results.map((result, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="text-sm text-gray-300 flex items-start gap-2"
                                        >
                                            <span className="text-green-400 mt-1">✓</span>
                                            {result}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
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
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-300 font-light">
                            Let's discuss how ANTITRIX can help bring your vision to life.
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
                                    View More Projects
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

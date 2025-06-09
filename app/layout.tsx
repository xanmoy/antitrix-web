import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
// import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })



export const metadata: Metadata = {
  title: "ANTITRIX | Modern Tech Services",
  description: "Professional technology services for web development, app development, DevOps, and UI/UX design.",
  icons: {
    icon: "/favicon.ico", 
  },
  metadataBase: new URL("https://antitrix.xanmoy.in"),

  openGraph: {
    title: "ANTITRIX | Modern Tech Services",
    description: "Professional technology services for web development, app development, DevOps, and UI/UX design.",
    url: "https://antitrix.xanmoy.in",
    siteName: "ANTITRIX",
    images: [
      {
        url: "https://antitrix.xanmoy.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Antitrix - OG Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ANTITRIX | Modern Tech Services",
    description: "Professional technology services for web development, app development, DevOps, and UI/UX design.",
    images: ["/og-image.png"],
    creator: "@antitrix_corp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://antitrix.xanmoy.in#organization",
              "url": "https://antitrix.xanmoy.in",
              "logo": "https://antitrix.xanmoy.in/logo.png",
              "name": "ANTITRIX",
              "description": "ANTITRIX is a modern technology services company specializing in web development, app development, DevOps, and UI/UX design.",
              "sameAs": [
                
                "https://instagram.com/antitrix.corp/",
                "https://www.linkedin.com/in/antitrix",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "antitrix.corp@proton.me",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": "English",
              },
            })
          }}
        />
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}> */}
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

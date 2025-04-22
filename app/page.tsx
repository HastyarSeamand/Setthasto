"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { TikTokIcon } from "@/components/tiktok-icon"
import { DiscordIcon } from "@/components/discord-icon"
import Image from "next/image"

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate")

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight - 100

        if (isVisible) {
          el.classList.add("animate-in")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container max-w-3xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            SETTHASTO
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto overflow-hidden border-4 border-purple-500">
              <Image
                src="/images/profile.jpg"
                alt="Setthasto"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 max-w-md mx-auto"
        >
          <motion.div variants={itemVariants} className="scroll-animate">
            <Link href="https://www.instagram.com/setthasto/" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4 rounded-xl flex items-center transform transition-all hover:scale-105 hover:shadow-lg">
                <Instagram className="w-8 h-8 mr-4" />
                <span className="text-xl font-semibold">Instagram</span>
                <span className="ml-auto text-lg opacity-80">@setthasto</span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="scroll-animate">
            <Link href="https://www.tiktok.com/@setthasto" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 p-4 rounded-xl flex items-center transform transition-all hover:scale-105 hover:shadow-lg">
                <TikTokIcon className="w-8 h-8 mr-4" />
                <span className="text-xl font-semibold">TikTok</span>
                <span className="ml-auto text-lg opacity-80">@setthasto</span>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="scroll-animate">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault()
                navigator.clipboard.writeText("setthasto")
                alert("Discord username copied to clipboard!")
              }}
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 p-4 rounded-xl flex items-center transform transition-all hover:scale-105 hover:shadow-lg">
                <DiscordIcon className="w-8 h-8 mr-4" />
                <span className="text-xl font-semibold">Discord</span>
                <span className="ml-auto text-lg opacity-80">setthasto</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center scroll-animate"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-300">About Me</h2>
          <p className="text-gray-300">got bored had to make a site for my self</p>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center text-sm text-gray-500"
        >
          <p>© {new Date().getFullYear()} Setthasto. All rights reserved.</p>
        </motion.footer>
      </div>
    </main>
  )
}

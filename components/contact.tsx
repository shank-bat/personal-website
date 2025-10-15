"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-[#141414]/70 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-[#00f7ff]/5 z-0" />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 text-center">Let's Connect</h3>

            <div className="flex flex-col items-center space-y-6">
              <Button
                className="w-full md:w-auto flex items-center space-x-2 bg-gradient-to-r from-[#a855f7] to-[#00f7ff] hover:opacity-90 transition-opacity rounded-full px-6 py-3"
                onClick={() => (window.location.href = "mailto:shashank.bhat2k05@gmail.com")}
              >
                <Mail className="w-5 h-5" />
                <span>shashank.bhat2k05@gmail.com</span>
              </Button>

              <Button
                variant="outline"
                className="w-full md:w-auto flex items-center space-x-2 border-[#a855f7] text-white hover:bg-[#a855f7]/10 rounded-full px-6 py-3"
                onClick={() => window.open("#", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center text-gray-500 text-sm"
      >
        <p>© {new Date().getFullYear()} Shashanka Bhat. All rights reserved.</p>
      </motion.footer>
    </section>
  )
}

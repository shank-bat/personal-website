"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const achievements = [
  {
    title: "Award-winning Photojournalist",
    description: "Represented VIT at Model United Nations conferences",
    icon: "📸",
  },
  {
    title: "Board Member",
    description: "Standards Club, VIT",
    icon: "🏆",
  },
  {
    title: "Mechanical Design",
    description: "Certified in AutoCAD and learning ANSYS Workbench",
    icon: "🔧",
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#141414] p-8 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-[#00f7ff]/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 bg-gradient-to-r from-[#00f7ff] to-[#a855f7] bg-clip-text text-transparent">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00f7ff] transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

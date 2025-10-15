"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    role: "Photojournalist",
    company: "VIT MUN",
    description: "Represented VIT at Model United Nations conferences as an award-winning photojournalist.",
  },
  {
    role: "Board Member",
    company: "Standards Club, VIT",
    description: "Served as a board member, organizing events and managing club activities.",
  },
  {
    role: "Customer Relations & Coordinator",
    company: "ZeroLag",
    description: "Managed customer relations and coordinated team activities to ensure smooth operations.",
  },
  {
    role: "Intern",
    company: "Toyota",
    description: "Gained hands-on experience in automotive engineering and manufacturing processes.",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative pl-8 border-l-2 border-gray-800"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 relative">
              <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-[#a855f7] border-4 border-[#0c0c0c]" />

              <div className="bg-[#141414] p-6 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-[#00f7ff]/30 transition-all duration-300 ml-4">
                <h3 className="text-xl font-semibold text-[#00f7ff]">{experience.role}</h3>
                <h4 className="text-lg font-medium text-gray-300 mb-2">{experience.company}</h4>
                <p className="text-gray-400">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Code, Cog, Layers, BarChart, Languages, PenTool, Wrench, Code2, MessageSquare, Codepen, HardDrive, Milestone } from "lucide-react"

type Skill = { name: string; icon: React.ReactNode }

const mechanicalSkills: Skill[] = [
  { name: "AutoCAD", icon: <PenTool className="w-8 h-8" /> },
  { name: "Fusion 360", icon: <Layers className="w-8 h-8" /> },
  { name: "ANSYS", icon: <Cog className="w-8 h-8" /> },
  { name: "MATLAB", icon: <BarChart className="w-8 h-8" /> },
  { name: "Calculix", icon: <Codepen className="w-8 h-8" /> },
]

const codeworkSkills: Skill[] = [
  { name: "PyTorch", icon: <Code className="w-8 h-8" /> },
  { name: "Tensorflow", icon: <Cpu className="w-8 h-8" /> },
  { name: "Pandas", icon: <HardDrive className="w-8 h-8" /> },
]

const softSkills: Skill[] = [
  { name: "German", icon: <Languages className="w-8 h-8" /> },
  { name: "Project Management", icon: <Milestone className="w-8 h-8" /> }
]

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="text-gray-300">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
      <div className="h-px bg-gray-800 flex-1 ml-2" />
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const renderGrid = (skills: Skill[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name + index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="flex flex-col items-center justify-center p-6 bg-[#141414] rounded-xl border border-gray-800 hover:border-[#a855f7]/30 transition-all duration-300 group"
        >
          <div className="text-gray-400 group-hover:text-[#00f7ff] transition-colors duration-300 mb-3">
            {skill.icon}
          </div>
          <h4 className="text-lg font-medium group-hover:text-[#00f7ff] transition-colors duration-300">
            {skill.name}
          </h4>
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <section className="py-20 px-4 md:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          A balanced mix across mechanical design, code, and communication.
        </p>

        {/* Mechanical */}
        <SectionHeader icon={<Wrench className="w-5 h-5" />} title="Mechanical" />
        {renderGrid(mechanicalSkills)}

        {/* Codework */}
        <SectionHeader icon={<Code2 className="w-5 h-5" />} title="Codework" />
        {renderGrid(codeworkSkills)}

        {/* Soft Skills */}
        <SectionHeader icon={<MessageSquare className="w-5 h-5" />} title="Soft Skills" />
        {renderGrid(softSkills)}
      </div>
    </section>
  )
}

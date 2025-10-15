"use client"

import { motion, useInView } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { useRef } from "react"

export default function Education() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const items = [
    {
      title: "Vellore Institute of Technology (VIT), Vellore",
      subtitle: "B.Tech in Mechanical Engineering",
      period: "2023 – 2027",
    },
    {
      title: "International Baccalaureate (IB)",
      subtitle: "Diploma Programme",
      period: "2021 – 2023",
    },
    {
      title: "ICSE Secondary Education",
      subtitle: "Grade 10",
      period: "2021",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800 hidden sm:block" aria-hidden="true" />
          <ul className="space-y-6">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-[#141414] border border-gray-800 rounded-xl p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block">
                    <div className="w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-[#00f7ff]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{item.subtitle}</p>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">{item.period}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

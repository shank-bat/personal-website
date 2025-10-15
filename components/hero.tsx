"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { GearIcon, BoltIcon, WrenchIcon, CogIcon } from "./mechanical-shapes"

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-[#0a0a0a]">
      {/* Mechanical shapes background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isClient && (
          <>
            {/* Gears */}
            <motion.div
              className="absolute text-[#00f7ff]/20"
              style={{ top: "10%", left: "10%" }}
              animate={{
                rotate: 360,
                transition: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <GearIcon className="w-24 h-24" />
            </motion.div>

            <motion.div
              className="absolute text-[#a855f7]/20"
              style={{ top: "70%", left: "15%" }}
              animate={{
                rotate: -360,
                transition: { duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <GearIcon className="w-32 h-32" />
            </motion.div>

            <motion.div
              className="absolute text-[#6b7280]/20"
              style={{ top: "30%", right: "15%" }}
              animate={{
                rotate: 360,
                transition: { duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <GearIcon className="w-28 h-28" />
            </motion.div>

            {/* Bolts */}
            <motion.div
              className="absolute text-[#00f7ff]/20"
              style={{ top: "20%", right: "25%" }}
              animate={{
                y: [0, 10, 0],
                transition: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <BoltIcon className="w-16 h-16" />
            </motion.div>

            <motion.div
              className="absolute text-[#a855f7]/20"
              style={{ bottom: "25%", right: "10%" }}
              animate={{
                y: [0, -10, 0],
                transition: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <BoltIcon className="w-20 h-20" />
            </motion.div>

            {/* Wrenches */}
            <motion.div
              className="absolute text-[#6b7280]/20"
              style={{ bottom: "15%", left: "30%" }}
              animate={{
                rotate: [-5, 5, -5],
                transition: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <WrenchIcon className="w-20 h-20" />
            </motion.div>

            {/* Cogs */}
            <motion.div
              className="absolute text-[#00f7ff]/20"
              style={{ top: "50%", left: "50%" }}
              animate={{
                rotate: 360,
                scale: [0.9, 1.1, 0.9],
                transition: {
                  rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                },
              }}
            >
              <CogIcon className="w-40 h-40" />
            </motion.div>

            <motion.div
              className="absolute text-[#a855f7]/20"
              style={{ top: "15%", left: "40%" }}
              animate={{
                rotate: -360,
                transition: { duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <CogIcon className="w-16 h-16" />
            </motion.div>
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white">
          {isClient ? (
            <Typewriter
              words={["Shashanka Bhat"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          ) : (
            "Shashanka Bhat"
          )}
        </h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-xl md:text-2xl font-light text-gray-300 mb-6"
        >
          Mechanical Engineering Student | Future Automotive Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="text-lg md:text-xl font-medium text-[#00f7ff] mt-4"
        >
          Building the Future, One Mechanism at a Time
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

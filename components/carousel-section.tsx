"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

type Item = {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  icon?: React.ReactNode
  href?: string
  image?: string
  imageAlt?: string
}

type Props = {
  heading: string
  items: Item[]
  id?: string
  // Optional sizing overrides per section
  cardWidth?: string // e.g. "w-[360px]"
  cardWidthMd?: string // e.g. "md:w-[560px]"
  aspectClass?: string // e.g. "aspect-[5/3]"
  imageHeight?: string // e.g. "h-40"
  imageHeightMd?: string // e.g. "md:h-52"
}

export default function CarouselSection({
  heading,
  items,
  id,
  cardWidth = "w-[320px]",
  cardWidthMd = "md:w-[525px]",
  aspectClass = "aspect-[5/3]",
  imageHeight = "h-28",
  imageHeightMd = "md:h-32",
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const width = card ? card.getBoundingClientRect().width : 320
    el.scrollBy({ left: dir === "left" ? -(width + 16) : width + 16, behavior: "smooth" })
  }

  return (
    <section className="py-16 px-4 md:px-8" ref={sectionRef} id={id}>
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          {heading}
        </motion.h2>

        {/* Controls */}
        <div className="absolute right-4 -top-2 flex gap-2 z-20">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByCard("left")}
            className="h-9 w-9 rounded-full bg-[#141414] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition"
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByCard("right")}
            className="h-9 w-9 rounded-full bg-[#141414] border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition"
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>

        {/* Horizontal rail: no wrapping, scrollbar hidden */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          ref={scrollerRef}
          className="relative overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory flex flex-nowrap gap-4 pr-4 scroll-smooth"
        >
          {items.map((item, idx) => {
            const Card = (
              <div
                className={`${cardWidth} ${cardWidthMd} ${aspectClass} flex-none snap-start bg-[#141414] border border-gray-800 rounded-xl p-5 md:p-6 hover:border-gray-700 transition flex`}
                data-card
              >
                <div className="flex flex-col w-full h-full min-w-0">
                  {item.image && (
                    <div className="mb-3">
                      <Image
                        src={item.image || "/placeholder.svg?height=160&width=213&query=certificate%20preview"}
                        alt={item.imageAlt || item.title}
                        width={640}
                        height={480}
                        className={`w-full ${imageHeight} ${imageHeightMd} object-contain rounded-lg border border-gray-800`}
                        priority={false}
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    {item.icon && <div className="shrink-0 text-gray-300">{item.icon}</div>}
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold break-words">{item.title}</h3>
                      {item.subtitle && (
                        <p className="text-sm md:text-base text-gray-300 mt-0.5 break-words">{item.subtitle}</p>
                      )}
                      {item.badge && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-[#0c0c0c] border border-gray-800 text-gray-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-gray-400 text-sm md:text-[15px] mt-3 break-words">{item.description}</p>
                  )}
                </div>
              </div>
            )

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex-none"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-1 focus:ring-gray-600 rounded-xl"
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </motion.div>
            )
          })}

          <div className="min-w-2 flex-none" />
        </motion.div>
      </div>
    </section>
  )
}

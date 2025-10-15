"use client"

import CarouselSection from "./carousel-section"
import { BadgeCheck, Box, FlaskConical } from "lucide-react"

export default function CertificationsCarousel() {
  const items = [
    {
      title: "Thermo‑Mechanical Design And Simulation",
      subtitle: "Credential ID: LTET/VIT/JUL25/04-0362",
      description:
        "Completed via the CollegeConnect Program (grade A). Certificate in Thermo-Mechanical Design and Simulation of Process Equipment.",
      icon: <FlaskConical className="w-6 h-6" />,
      badge: "Certified",
    },
    {
      title: "AutoCAD",
      subtitle: "Certified",
      description: "Foundational to intermediate proficiency in 2D drafting and 3D modeling workflows.",
      icon: <Box className="w-6 h-6" />,
      badge: "Certified",
    },
    {
      title: "ANSYS Workbench",
      subtitle: "Learning",
      description: "Currently building competency in simulation setup, meshing, and result interpretation.",
      icon: <Box className="w-6 h-6" />,
      badge: "In Progress",
    },
  ]

  // Make certifications larger and wider with a 5:3 aspect ratio
  return (
    <CarouselSection
      heading="Certifications"
      items={items}
      id="certifications"
      cardWidth="w-[360px]"
      cardWidthMd="md:w-[560px]"
      aspectClass="aspect-[5/3]"
      imageHeight="h-40"
      imageHeightMd="md:h-52"
    />
  )
}

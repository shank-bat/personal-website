"use client"

import CarouselSection from "./carousel-section"
import { Camera, Users } from "lucide-react"

export default function ExperienceCarousel() {
  const items = [
    {
      title: "Photojournalist",
      subtitle: "VIT MUN",
      description: "Award-winning photojournalist capturing high-impact moments and narratives representing VIT.",
      icon: <Camera className="w-6 h-6" />,
      badge: "Media · Storytelling",
    },
    {
      title: "Board Member",
      subtitle: "Standards Club, VIT",
      description:
        "Led initiatives and coordinated standards-centric events, fostering technical rigor and collaboration.",
      icon: <Users className="w-6 h-6" />,
      badge: "Leadership",
    },
    // Note: Removed ZeroLag and Toyota per request.
  ]

  return <CarouselSection heading="Experience" items={items} id="experience" />
}

"use client"

import CarouselSection from "./carousel-section"
import { Cog, LineChart } from "lucide-react"

export default function ProjectsCarousel() {
  const items = [
    {
      title: "Predicting Keypoints of Stress–Strain Curves",
      subtitle: "ML for steel and aluminium",
      description:
        "Predicting Ultimate Tensile Strength, Yield Strength and Elongation(%) for Steel and Aluminium using XGBoost (MultiOutput Regression), Neural Network (Multilayer perceptron) and RandomForest (MultiOutput Regression).",
      href: "https://github.com/shank-bat/stress-strain-prediction",
      icon: <LineChart className="w-6 h-6" />,
      badge: "ML · Materials",
    },
    {
      title: "Prediction of Vehicle Component Wear",
      subtitle: "Algorithm using ML for wear detection and prediction",
      description:
        "Predicting wear rate and uptime for vehicles using Machine learning. Work in progress.",
      href: "https://github.com/shank-bat/wear-prediction",
      icon: <LineChart className="w-6 h-6" />,
      badge: "ML · Automotive",
    },
  ]

  return <CarouselSection heading="Projects" items={items} id="projects" />
}

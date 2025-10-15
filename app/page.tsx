import { Poppins } from "next/font/google"
import Hero from "@/components/hero"
import Education from "@/components/education"
import ProjectsCarousel from "@/components/projects-carousel"
import ExperienceCarousel from "@/components/experience-carousel"
import CertificationsCarousel from "@/components/certifications-carousel"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Home() {
  return (
    <main className={`${poppins.className} min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden`}>
      <Hero />
      <Education />
      <ProjectsCarousel />
      <ExperienceCarousel />
      <CertificationsCarousel />
      <Skills />
      <Contact />
    </main>
  )
}

import Tips from "@/components/Tips"
import Hero from "@/components/Hero"
import Services from "../components/Services"
import Testimonials from "@/components/Testimonials"
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <main className="block min-h-screen  lg:px-24 xs:p-3 max-w-screen-xl mx-auto overflow-x-hidden">
      <Hero />
      <Services />
      <Tips />
      <Testimonials />
      <AboutUs />
    </main>
  )
}

import Tips from "@/components/Tips"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Services from "../components/Services"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="block min-h-screen  lg:px-24 xs:p-3 max-w-screen-xl mx-auto overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <Tips />
      <Testimonials />
      <Footer />
    </main>
  )
}

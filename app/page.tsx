import Tips from "@/components/Tips"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import Services from "../components/Services"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:px-24 xs:p-3 max-w-screen-xl mx-auto">
      <NavBar />
      <Hero />
      <Services />
      <Tips />
      <Testimonials />
      <Footer />
    </main>
  )
}

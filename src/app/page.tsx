import NavbarComponent from "@/components/navbar"
import FooterComponent from "@/components/footer"
import HeroSection from "@/components/heroSection"
import FloresSectionComponent from "@/components/floresSection"
import RamosSectionComponent from "@/components/ramosSections"
import ArreglosSectionComponent from "@/components/arreglosSection"
import PlantasSectionComponent from "@/components/plantasSection"
import ComentSection from "@/components/comentSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarComponent />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-24">
          <FloresSectionComponent />
          <div className="relative py-10 my-16">
            <div className="absolute inset-0 bg-[#679436]/10 rounded-3xl -skew-y-1"></div>
            <div className="relative">
              <RamosSectionComponent />
            </div>
          </div>
          <ArreglosSectionComponent />
          <div className="relative py-10 my-16">
            <div className="absolute inset-0 bg-[#679436]/10 rounded-3xl skew-y-1"></div>
            <div className="relative">
              <PlantasSectionComponent />
            </div>
          </div>
          <ComentSection/>
        </div>
      </div>
      <FooterComponent />
    </main>
  )
}

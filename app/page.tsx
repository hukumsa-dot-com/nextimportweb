import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ExportProducts from "@/components/export-products"
import BusinessGallery from "@/components/business-gallery"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ExportProducts />
        <BusinessGallery />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

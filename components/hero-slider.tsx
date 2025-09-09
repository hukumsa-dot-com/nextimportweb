"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Global Import Export Solutions",
    subtitle: "Connecting Markets Worldwide",
    description: "Your trusted partner for international trade with over 15 years of experience in global commerce.",
    image: "/slider1.png",
    cta: "Explore Our Services",
  },
  {
    id: 2,
    title: "Premium Quality Products",
    subtitle: "From Farm to Global Markets",
    description: "We export the finest fruits, vegetables, spices, and handicrafts to customers worldwide.",
    image: "/slider2-2.png",
    cta: "View Products",
  },
  {
    id: 3,
    title: "Reliable Logistics Network",
    subtitle: "On-Time Delivery Guaranteed",
    description: "Our extensive logistics network ensures your products reach their destination safely and on time.",
    image: "/slider3.png",
    cta: "Learn More",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <p className="text-secondary font-semibold mb-2 text-sm sm:text-base lg:text-lg">{slide.subtitle}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-balance leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-pretty opacity-90 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  {slide.cta}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-foreground bg-transparent w-full sm:w-auto"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 sm:p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

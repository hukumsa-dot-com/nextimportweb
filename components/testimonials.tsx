"use client"

import { useState, useEffect } from "react"
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Global Foods Inc.",
    country: "United States",
    rating: 5,
    text: "Working with najmcommercial has been exceptional. Their quality products and reliable delivery have helped us expand our business significantly. The team is professional and always goes above and beyond to meet our requirements.",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    company: "Middle East Trading Co.",
    country: "UAE",
    rating: 5,
    text: "The spices and handicrafts we import from najmcommercial are of outstanding quality. Their attention to detail and commitment to timely delivery has made them our preferred partner for over 5 years.",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    company: "European Imports Ltd.",
    country: "Spain",
    rating: 5,
    text: "Excellent service and premium quality products! najmcommercial has consistently delivered fresh fruits and vegetables that exceed our expectations. Their customer service is remarkable and they truly care about building long-term relationships.",
    avatar: "/placeholder-user.jpg",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Love from Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear what our valued clients from around the world have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-0 shadow-lg">
                    <CardContent className="p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty italic">
                        "{testimonial.text}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                          <div className="text-sm text-primary">{testimonial.country}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

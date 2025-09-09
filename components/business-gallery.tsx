"use client"

import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Export warehouse facility",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Shipping containers at port",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Quality control laboratory",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fresh fruits packaging",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Spices processing facility",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Handicraft workshop",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Logistics and transportation",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Business meeting with clients",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Quality certificates and awards",
  },
]

export default function BusinessGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Business Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a look at our state-of-the-art facilities, quality processes, and the journey of our products from
            production to global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

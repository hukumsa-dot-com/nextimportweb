"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+64226251629</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>info@najmcommercial.com</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-4 h-4" />
            <span>najmcommercial</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="" className="text-xl md:text-2xl font-bold text-primary h-15" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" style={{ color: "#1f2937" }} className="hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#about" style={{ color: "#1f2937" }} className="hover:text-primary transition-colors font-medium">
              About
            </a>
            <a
              href="#gallery"
              style={{ color: "#1f2937" }}
              className="hover:text-primary transition-colors font-medium"
            >
              Gallery
            </a>

            <a
              href="#testimonials"
              style={{ color: "#1f2937" }}
              className="hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button size="sm">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            style={{ color: "#1f2937" }}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" style={{ color: "#1f2937" }} className="hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a
                href="#about"
                style={{ color: "#1f2937" }}
                className="hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#exports"
                style={{ color: "#1f2937" }}
                className="hover:text-primary transition-colors font-medium"
              >
                What We Export
              </a>
              <a
                href="#gallery"
                style={{ color: "#1f2937" }}
                className="hover:text-primary transition-colors font-medium"
              >
                Gallery
              </a>
              <a
                href="#why-choose-us"
                style={{ color: "#1f2937" }}
                className="hover:text-primary transition-colors font-medium"
              >
                Why Choose Us
              </a>
              <a
                href="#testimonials"
                style={{ color: "#1f2937" }}
                className="hover:text-primary transition-colors font-medium"
              >
                Testimonials
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Get Quote
                </Button>
                <Button className="w-full" size="sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

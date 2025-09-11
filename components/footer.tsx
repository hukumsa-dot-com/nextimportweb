import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-secondary mb-4">najmcommercial</h3>
            <p className="text-background/80 mb-6 text-pretty">
              Your trusted partner in international trade with over 15 years of experience connecting global markets.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580486762182" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 hover:bg-secondary/20 transition-colors group"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 text-background/80 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com/Najmcommerical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 hover:bg-pink-500/20 transition-colors group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-background/80 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/najmcommerical" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-background/10 hover:bg-blue-600/20 transition-colors group"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-background/80 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#exports" className="text-background/80 hover:text-secondary transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-background/80 hover:text-secondary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-secondary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Fruits & Vegetables
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Spices
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Handicrafts
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Textiles
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  Leather Products
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-secondary transition-colors">
                  View All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  4/83, Sutherland street, New Zealand
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/80 text-sm">+64226251629</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/80 text-sm">info@najmcommercial.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/80 text-sm">www.najmcommercial.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-secondary">Stay Updated</h4>
              <p className="text-background/80 text-sm">
                Subscribe to our newsletter for the latest updates on products and market trends.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-secondary text-foreground hover:bg-secondary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">©2025 <a className="text-secondary hover:text-secondary/80 transition-colors" href="https://hukumsa.com">HUKUMSA</a>. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-secondary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

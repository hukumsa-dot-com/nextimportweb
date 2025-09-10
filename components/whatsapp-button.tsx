'use client';

import Link from "next/link"
import Image from "next/image"

export default function WhatsAppButton() {
  // Replace with your actual WhatsApp number in international format (without + or spaces)
  const phoneNumber = "64226251629"
  const message = "Hello! I'm interested in your products. Can you provide more information?"
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <Image 
          src="https://www.svgrepo.com/show/303280/whatsapp-glyph-black-logo.svg" 
          alt="WhatsApp" 
          width={24} 
          height={24}
          className="invert"
        />
      </Link>
    </div>
  )
}

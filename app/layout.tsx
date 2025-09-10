import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "najmcommercial - Global Export Import Solutions",
  description:
    "najmcommercial - Your trusted partner in international trade with premium quality products exported worldwide.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <WhatsAppButton />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

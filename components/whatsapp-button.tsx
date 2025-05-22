"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    // Set visible by default after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearTimeout(timer)
    }
  }, [])

  const handleClick = () => {
    window.open(`https://wa.me/6285233447500`, "_blank")

    // Track event with Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Contact")
    }

    // Track event with Google Tag Manager
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "whatsapp_click",
        phoneNumber: phoneNumber,
      })
    }
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 hover:opacity-90"
      aria-label="Hubungi kami di WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  )
}

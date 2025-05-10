"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Check } from "lucide-react"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track form submission with Meta Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Lead")
    }

    // Track form submission with Google Tag Manager
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "form_submission",
        form_name: "registration_form",
      })
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Here you would normally send the form data to your backend
    // const formData = new FormData(e.currentTarget)
    // const response = await fetch('/api/register', {
    //   method: 'POST',
    //   body: formData,
    // })

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Redirect to WhatsApp
    setTimeout(() => {
      window.open(
        `https://wa.me/6285730331000?text=${encodeURIComponent("Halo, saya tertarik dengan MAXIMA Plan dan ingin informasi lebih lanjut.")}`,
        "_blank",
      )
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Pendaftaran Berhasil!</h3>
        <p className="text-muted-foreground mb-4">
          Terima kasih telah mendaftar. Kami akan menghubungi Anda segera melalui WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input id="name" name="name" placeholder="Masukkan nama lengkap Anda" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Nomor WhatsApp</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Contoh: 08123456789" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Masukkan email Anda" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Kota Domisili</Label>
        <Input id="city" name="city" placeholder="Masukkan kota domisili Anda" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan (Opsional)</Label>
        <Textarea id="message" name="message" placeholder="Ada pertanyaan atau hal yang ingin disampaikan?" rows={3} />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 hover:opacity-90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Memproses...
          </>
        ) : (
          "Bergabung Sekarang"
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        Dengan mengisi form ini, Anda setuju untuk dihubungi oleh tim MAXIMA Plan.
      </p>
    </form>
  )
}

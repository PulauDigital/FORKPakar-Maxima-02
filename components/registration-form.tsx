"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Check } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
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

      // Send email via API
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      })

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json()
        console.error("Error sending email:", errorData)
        // Continue with the form submission even if email fails
      } else {
        console.log("Email sent successfully")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Format WhatsApp message
      const message = `
*PENDAFTARAN MAXIMA PLAN*
      
Nama: ${formData.name}
WhatsApp: ${formData.phone}
Email: ${formData.email}
Domisili: ${formData.city}
${formData.message ? `Pesan: ${formData.message}` : ""}
      `.trim()

      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/6282260882389?text=${encodeURIComponent(message)}`, "_blank")
      }, 1000)
    } catch (error) {
      console.error("Error during form submission:", error)
      setIsSubmitting(false)
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.",
        variant: "destructive",
      })
    }
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
        <Input
          id="name"
          name="name"
          placeholder="Masukkan nama lengkap Anda"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Nomor WhatsApp</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Contoh: 08123456789"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Masukkan email Anda"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Kota Domisili</Label>
        <Input
          id="city"
          name="city"
          placeholder="Masukkan kota domisili Anda"
          required
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Pesan (Opsional)</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Ada pertanyaan atau hal yang ingin disampaikan?"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
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

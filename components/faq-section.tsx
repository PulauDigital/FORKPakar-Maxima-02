"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full px-4 py-3 text-left flex justify-between items-center bg-white hover:bg-gray-50"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-primary" />
            ) : (
              <ChevronDown className="h-5 w-5 text-primary" />
            )}
          </button>
          <div
            className={`px-4 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-96 py-3" : "max-h-0 py-0"
            }`}
          >
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submitted:", formData)

    alert("Thank you for your message! We will get back to you soon.")

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        {
          label: "+91 9177571222",
          action: "tel:+919177571222",
        },
        {
          label: "+91 9290931511",
          action: "tel:+919290931511",
        },
      ],
    },

    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        {
          label: "+91 9177571222",
          action: "https://wa.me/919177571222",
        },
        {
          label: "+91 9290931511",
          action: "https://wa.me/919290931511",
        },
      ],
    },

    {
      icon: Mail,
      title: "Email",
      details: [
        {
          label: "svrgoldtreaders@gmail.com",
          action: "mailto:svrgoldtreaders@gmail.com",
        },
      ],
    },

    {
      icon: MapPin,
      title: "Address",
      details: [
        {
          label:
            "4-273, Old Masijd Rd, Kothpet, Salivahanapeta, Mangalagiri, Guntur, Andhra Pradesh - 522503",
          action: "#",
        },
      ],
    },

    {
      icon: Clock,
      title: "Business Hours",
      details: [
        {
          label: "Mon - Sat: 10:00 AM - 8:00 PM",
          action: "#",
        },
        {
          label: "Sunday: 10:00 AM - 2:00 PM",
          action: "#",
        },
      ],
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">Get In </span>

            <span className="text-gold-gradient">Touch</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Have questions or ready to start trading? Reach out to us through
            any channel below. We&apos;re here to help you with all your gold
            trading needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4 glass rounded-xl p-6 hover:glass-gold transition-all duration-500 group",
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                )}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-gold-gradient transition-colors">
                    {info.title}
                  </h3>

                  {info.details.map((detail, i) => (
                    <a
                      key={i}
                      href={detail.action}
                      target={
                        detail.action.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        detail.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block text-muted-foreground text-sm mt-1 hover:text-primary transition-colors"
                    >
                      {detail.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "glass-gold rounded-2xl p-8 transition-all duration-1000",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>

                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>

                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>

                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full gold-gradient text-primary-foreground hover:opacity-90 transition-all text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />

                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div
          className={cn(
            "mt-16 glass rounded-2xl overflow-hidden h-64 md:h-80 max-w-6xl mx-auto transition-all duration-1000",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
          style={{
            transitionDelay: "500ms",
          }}
        >
          <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />

              <p className="text-foreground font-semibold">
                SVR Gold Traders
              </p>

              <p className="text-muted-foreground text-sm">
                4-273, Old Masijd Rd, Kothpet, Salivahanapeta, Mangalagiri,
                Guntur, Andhra Pradesh - 522503
              </p>

              <Button
                asChild
                variant="outline"
                className="mt-4 border-primary/50 text-primary hover:bg-primary/10"
              >
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
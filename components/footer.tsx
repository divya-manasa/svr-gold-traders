"use client"

import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Gold Trading",
  "Gold Buying",
  "Gold Selling",
  "Investment Guidance",
  "Market Analysis",
  "Customer Support",
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      {/* Gold Accent Line */}
      <div className="h-1 gold-gradient" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              href="#home"
              className="flex items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">
                  S
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold gold-shimmer">
                  SVR GOLD
                </span>

                <span className="text-xs text-muted-foreground tracking-widest">
                  TRADERS
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed">
              Your trusted partner in gold trading. We deliver
              excellence, transparency, and the best rates in the
              market.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:glass-gold hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />

                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Contact Info
            </h3>

            <ul className="space-y-4">
              {/* Phone 1 */}
              <li>
                <a
                  href="tel:+919177571222"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:glass-gold transition-all">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <span>+91 9177571222</span>
                </a>
              </li>

              {/* Phone 2 */}
              <li>
                <a
                  href="tel:+919290931511"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:glass-gold transition-all">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <span>+91 9290931511</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:svrgoldtreaders@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:glass-gold transition-all">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>

                  <span>svrgoldtreaders@gmail.com</span>
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>

                  <span>
                    4-273, Old Masijd Rd, Kothpet,
                    <br />
                    Salivahanapeta, Mangalagiri,
                    <br />
                    Guntur, Andhra Pradesh - 522503
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 SVR GOLD TRADERS. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 md:right-8 z-40 w-12 h-12 rounded-full gold-gradient shadow-lg shadow-primary/30 hover:scale-110 transition-all duration-300"
        size="icon"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  )
}
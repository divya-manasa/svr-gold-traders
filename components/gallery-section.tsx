"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Premium Gold Jewelry Collection",
    title: "Exquisite Jewelry",
    category: "Collection",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Gold Coins and Investment Bars",
    title: "Investment Gold",
    category: "Trading",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Professional Business Partnership",
    title: "Trusted Partnerships",
    category: "Business",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Gold Craftsmanship",
    title: "Master Craftsmanship",
    category: "Process",
  },
  {
    src: "/images/hero-gold.jpg",
    alt: "Premium Gold Bars",
    title: "Premium Gold Bars",
    category: "Products",
  },
  {
    src: "/images/about-office.jpg",
    alt: "SVR Gold Traders Office",
    title: "Our Showroom",
    category: "Location",
  },
]

export function GallerySection() {
  const { ref, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gold-gradient">Premium Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our world of premium gold trading. From exquisite jewelry to 
            investment-grade gold bars, experience the luxury of SVR Gold Traders.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index === 0 && "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs text-primary font-medium tracking-wider uppercase">{image.category}</span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">{image.title}</h3>
              </div>

              {/* Gold Border on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full glass hover:glass-gold transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          
          <div
            className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

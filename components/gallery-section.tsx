"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
{
type:"image",
src:"/images/gallery-1.jpg",
alt:"Premium Gold Jewelry Collection",
title:"Exquisite Jewelry",
category:"Collection",
},

{
type:"image",
src:"/images/gallery-2.jpg",
alt:"Gold Coins and Investment Bars",
title:"Investment Gold",
category:"Trading",
},

{
type:"image",
src:"/images/gallery-3.jpg",
alt:"Professional Business Partnership",
title:"Trusted Partnerships",
category:"Business",
},

{
type:"image",
src:"/images/gallery-4.jpg",
alt:"Gold Craftsmanship",
title:"Master Craftsmanship",
category:"Process",
},

{
type:"image",
src:"/images/hero-gold.jpg",
alt:"Premium Gold Bars",
title:"Premium Gold Bars",
category:"Products",
},

{
type:"image",
src:"/images/about-office.jpg",
alt:"SVR Gold Traders Office",
title:"Our Showroom",
category:"Location",
},

{
type:"image",
src:"/images/gallery-5.jpeg",
alt:"SVR Gold Traders Promotion",
title:"Special Gold Offers",
category:"Offers",
},

{
type:"image",
src:"/images/gallery-6.jpeg",
alt:"SVR Gold Traders Services",
title:"Our Services",
category:"Services",
},

{
type:"image",
src:"/images/gallery-7.jpeg",
alt:"SVR Gold Traders Collection",
title:"Premium Collection",
category:"Gallery",
},

{
type:"video",
src:"/videos/video1.mp4",
thumbnail:"/images/gallery-5.jpeg",
alt:"SVR Gold Traders Video",
title:"Watch Video",
category:"Video",
},
]

export function GallerySection() {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[0] | null>(null)

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">

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
            Gallery
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">
              Our
            </span>{" "}
            <span className="text-gold-gradient">
              Premium Collection
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Explore our world of premium gold trading.
          </p>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                index === 0 &&
                  "md:col-span-2 md:row-span-2"
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >

              {image.type === "video" ? (

                <div className="relative w-full h-full">

                  <video
                    className="w-full h-full object-cover"
                    muted
                  >
                    <source
                      src={image.src}
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="bg-black/60 text-white px-5 py-2 rounded-full">
                      ▶ Play
                    </div>

                  </div>

                </div>

              ) : (

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="absolute bottom-0 p-4 opacity-0 group-hover:opacity-100">

                <span className="text-primary text-xs uppercase">
                  {image.category}
                </span>

                <h3 className="text-lg font-bold">
                  {image.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-50 bg-black/90 flex justify-center items-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6"
          >
            <X className="text-white w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl w-full h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >

            {selectedImage.type === "video" ? (

              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                <source
                  src={selectedImage.src}
                  type="video/mp4"
                />
              </video>

            ) : (

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />

            )}

          </div>

        </div>

      )}

    </section>
  )
}
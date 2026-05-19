"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "RK",
    rating: 5,
    text: "I have been trading with SVR Gold Traders for over 5 years. Their transparency in pricing and professional service is unmatched. Highly recommended for anyone looking for trustworthy gold trading.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Jewelry Designer",
    image: "PS",
    rating: 5,
    text: "The best gold traders I have ever worked with! Their rates are always competitive, and the team is incredibly helpful. They made my first gold investment experience seamless.",
  },
  {
    id: 3,
    name: "Mohammed Ansari",
    role: "Investor",
    image: "MA",
    rating: 5,
    text: "SVR Gold Traders has helped me build a substantial gold portfolio. Their investment guidance is excellent, and I trust them completely with all my precious metal transactions.",
  },
  {
    id: 4,
    name: "Lakshmi Devi",
    role: "Homemaker",
    image: "LD",
    rating: 5,
    text: "I sold my old gold jewelry to SVR and was amazed by the fair price they offered. No hidden deductions, just honest business. I recommend them to all my friends and family.",
  },
  {
    id: 5,
    name: "Suresh Reddy",
    role: "Retired Bank Manager",
    image: "SR",
    rating: 5,
    text: "As someone from the banking sector, I appreciate their meticulous documentation and professional approach. SVR Gold Traders maintains the highest standards of business ethics.",
  },
  {
    id: 6,
    name: "Anita Gupta",
    role: "Entrepreneur",
    image: "AG",
    rating: 5,
    text: "Outstanding service! The team at SVR goes above and beyond to ensure customer satisfaction. Their quick response time and fair dealing make them my go-to gold traders.",
  },
]

export function TestimonialsSection() {
  const { ref, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">What Our </span>
            <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our valued customers about their experience with SVR Gold Traders. 
            Their trust and satisfaction drive us to deliver excellence.
          </p>
        </div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "glass rounded-2xl p-8 hover:glass-gold transition-all duration-500 group",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <div className="glass rounded-2xl p-6">
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-primary/30 mb-4" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Text */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-bold">
                {testimonials[currentIndex].image}
              </div>
              <div>
                <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

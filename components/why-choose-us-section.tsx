"use client"

import { useInView } from "react-intersection-observer"
import { 
  Award, 
  Clock, 
  ShieldCheck, 
  Users, 
  Sparkles,
  ThumbsUp 
} from "lucide-react"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description: "15+ years of reliable service with thousands of satisfied customers. Your trust is our foundation.",
  },
  {
    icon: Award,
    title: "Best Rates",
    description: "We offer the most competitive rates in the market with complete transparency and no hidden charges.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick turnaround time for all transactions. Get instant valuations and immediate payments.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our expert team brings decades of combined experience in gold trading and customer service.",
  },
  {
    icon: Sparkles,
    title: "Certified Purity",
    description: "All gold transactions come with certified purity verification and proper documentation.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "We prioritize your satisfaction above all. Experience personalized service tailored to your needs.",
  },
]

export function WhyChooseUsSection() {
  const { ref, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Gold Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">The </span>
            <span className="text-gold-gradient">SVR Advantage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover why thousands of customers trust SVR Gold Traders for all their 
            precious metal needs. We deliver excellence in every transaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={cn(
                "group relative transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative glass rounded-2xl p-8 h-full hover:glass-gold transition-all duration-500 overflow-hidden">
                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold-gradient transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 gold-gradient group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "10K+", label: "Happy Clients" },
            { value: "₹100Cr+", label: "Transactions" },
            { value: "99.9%", label: "Customer Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center glass-gold rounded-xl p-6 transition-all duration-700",
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-gold-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

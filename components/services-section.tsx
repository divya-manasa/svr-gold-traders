"use client"

import { useInView } from "react-intersection-observer"
import { 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  HandCoins, 
  HeadphonesIcon,
  ShieldCheck 
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: TrendingUp,
    title: "Gold Trading",
    description: "Professional gold trading services with real-time market updates and competitive rates for all your precious metal needs.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: Wallet,
    title: "Gold Buying",
    description: "Get the best prices for your gold. We offer instant valuation, transparent weighing, and immediate payment.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: HandCoins,
    title: "Gold Selling",
    description: "Purchase certified gold at competitive prices. Wide selection of gold coins, bars, and jewelry available.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: BarChart3,
    title: "Investment Guidance",
    description: "Expert advice on gold investments. Learn when to buy, sell, and hold for maximum returns on your portfolio.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Market Rates",
    description: "We follow live market rates with complete transparency. No hidden charges or surprise deductions.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is always available to assist you with any queries or concerns.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
]

export function ServicesSection() {
  const { ref, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">
            <span className="text-foreground">Premium </span>
            <span className="text-gold-gradient">Gold Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of gold trading services designed to meet 
            all your precious metal investment needs with excellence and integrity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group relative glass rounded-2xl p-6 md:p-8 hover:glass-gold transition-all duration-500 cursor-pointer overflow-hidden",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                service.gradient
              )} />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

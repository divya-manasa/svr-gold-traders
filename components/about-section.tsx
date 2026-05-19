"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Shield, Award, Users, Gem } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your transactions are protected with industry-leading security",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "All gold certified for purity with proper hallmarking",
  },
  {
    icon: Users,
    title: "10,000+ Clients",
    description: "Trusted by thousands of satisfied customers",
  },
  {
    icon: Gem,
    title: "Premium Service",
    description: "Exceptional service tailored to your needs",
  },
]

export function AboutSection() {
  const { ref, inView: isInView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-office.jpg"
                alt="SVR Gold Traders Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 glass-gold rounded-xl p-4 md:p-6 shadow-2xl max-w-[200px]">
              <div className="text-3xl md:text-4xl font-bold text-gold-gradient">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>

            {/* Gold Border Decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-medium tracking-widest uppercase">About Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                <span className="text-foreground">Building </span>
                <span className="text-gold-gradient">Trust</span>
                <br />
                <span className="text-foreground">Through Excellence</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              At SVR Gold Traders, we have been serving our valued customers with integrity and 
              excellence for over 15 years. Our commitment to transparency, fair pricing, and 
              exceptional customer service has made us a trusted name in the gold trading industry.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We believe in building lasting relationships with our clients by providing them 
              with the best market rates, certified gold purity, and a seamless trading experience. 
              Every transaction is handled with the utmost care and professionalism.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-4 hover:glass-gold transition-all duration-300 group cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

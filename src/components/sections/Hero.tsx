"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[900px] flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[1.5s]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2940&auto=format&fit=crop')",
            transform: isLoaded ? "scale(1)" : "scale(1.1)",
            transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)",
          }}
        />
        {/* Sophisticated overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/20" />
      </div>

      {/* Decorative vertical line */}
      <div 
        className={`absolute left-[80px] top-1/2 -translate-y-1/2 w-px h-[200px] bg-gradient-to-b from-transparent via-gilt to-transparent transition-all duration-[1.2s] hidden lg:block ${
          isLoaded ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl lg:pl-12">
            {/* Main Heading - Display XL per design system */}
            <h1
              className={`font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-[96px] leading-[1] tracking-[-0.03em] mb-10 transition-all duration-[1000ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                color: "var(--color-white)",
                transitionDelay: "150ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              Luxury
              <br />
              <span className="text-gilt">Property</span>
              <br />
              <em className="font-normal not-italic">Experts</em>
            </h1>

            {/* Subtitle - Body Lead style */}
            <p
              className={`text-xl text-paper/70 max-w-lg leading-relaxed mb-14 transition-all duration-[1000ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: "300ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)",
                letterSpacing: "0.01em"
              }}
            >
              Dubai&apos;s premier off-market properties. Curated for discerning investors.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap items-center gap-6 transition-all duration-[1000ms] ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: "450ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              <Link href="/properties" className="btn-primary bg-gilt text-void hover:bg-paper">
                View Top Picks
              </Link>
              <Link href="/contact" className="btn-ghost border-paper/30 text-paper hover:bg-paper hover:text-void">
                Book Consultation
              </Link>
            </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-[1000ms] ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ 
          transitionDelay: "800ms",
          transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
        }}
      >
        <span className="text-label text-paper/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-paper/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

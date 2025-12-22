"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 gradient-overlay-full" />
        <div className="absolute inset-0 bg-midnight/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label */}
          <span className="text-label text-gold mb-6 block">
            Premium Dubai Real Estate
          </span>

          {/* Main Heading */}
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-alabaster leading-[1.1] max-w-5xl mx-auto">
            Where <em className="font-normal">Vision</em> Meets
            <br />
            <span className="text-gold">Investment</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-8 text-lg md:text-xl text-alabaster/70 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ultra-premium properties and Golden Visa investments
            <br className="hidden md:block" />
            for discerning global investors
          </p>

          {/* CTAs */}
          <div
            className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button href="/properties" variant="ghost-light">
              Explore Properties
            </Button>
            <Button href="/golden-visa" variant="gold">
              Check Golden Visa Eligibility →
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-alabaster/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-alabaster/50 to-transparent" />
        </div>
      </div>

      {/* Side Text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <span className="text-[10px] uppercase tracking-widest text-alabaster/30 [writing-mode:vertical-lr] rotate-180">
          Echelon Elite — Dubai
        </span>
      </div>
    </section>
  );
}


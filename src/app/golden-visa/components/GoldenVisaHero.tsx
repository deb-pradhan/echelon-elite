"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export function GoldenVisaHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-midnight/80" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 mb-8 text-alabaster/50 text-sm transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="/" className="hover:text-alabaster transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-gold">Golden Visa</span>
          </div>

          {/* Label */}
          <span
            className={`text-label text-gold block mb-6 transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Dubai Golden Visa Hub
          </span>

          {/* Heading */}
          <h1
            className={`font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-alabaster leading-tight mb-8 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your Gateway to
            <br />
            <em className="text-gold">10-Year</em> UAE Residency
          </h1>

          {/* Description */}
          <p
            className={`text-xl text-alabaster/70 max-w-2xl mb-12 leading-relaxed transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Invest in Dubai property worth AED 2 million or more and secure
            long-term residency for you and your family. Our experts handle the
            complete process.
          </p>

          {/* Key Benefits */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "10 Years", label: "Residency" },
              { value: "AED 2M", label: "Min. Investment" },
              { value: "Family", label: "Included" },
              { value: "48 Hours", label: "Fast Track" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-alabaster/20 p-6 text-center"
              >
                <span className="font-[family-name:var(--font-playfair)] text-2xl text-gold block mb-1">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-alabaster/50">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button href="/contact" variant="ghost-light">
              Check Your Eligibility
            </Button>
            <Button href="#process" variant="gold">
              View Step-by-Step Process →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


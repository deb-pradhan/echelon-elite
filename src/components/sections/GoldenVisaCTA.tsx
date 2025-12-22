"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";

export function GoldenVisaCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2796&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-midnight/85" />
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Golden Visa Badge */}
          <div
            className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-label text-gold">Dubai Golden Visa</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>

          {/* Heading */}
          <h2
            className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-alabaster mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Secure Your <em className="text-gold">10-Year</em>
            <br />
            UAE Residency
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-alabaster/70 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Invest AED 2 million or more in Dubai property and qualify for the
            prestigious Golden Visa. Our experts guide you through every step.
          </p>

          {/* Benefits */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "10", label: "Year Residency" },
              { value: "100%", label: "Family Included" },
              { value: "0%", label: "Income Tax" },
              { value: "48hr", label: "Fast Track" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold block">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-alabaster/50 mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button href="/golden-visa" variant="ghost-light">
              Learn About Golden Visa
            </Button>
            <Button href="/contact" variant="gold">
              Check Your Eligibility →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


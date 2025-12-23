"use client";

import Link from "next/link";
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
    <section ref={sectionRef} className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2796&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-void/85" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Golden Visa Badge */}
          <div
            className={`inline-flex items-center gap-4 mb-10 transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
          >
            <div className="w-16 h-[1px] bg-gilt" />
            <span className="text-label text-gilt">Dubai Golden Visa</span>
            <div className="w-16 h-[1px] bg-gilt" />
          </div>

          {/* Heading */}
          <h2
            className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-paper mb-8 tracking-[-0.02em] transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              transitionDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Secure Your <em className="text-gilt">10-Year</em>
            <br />
            UAE Residency
          </h2>

          {/* Description */}
          <p
            className={`text-lg text-paper/70 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0,0,0,0.2)",
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Invest AED 2 million or more in Dubai property and qualify for the
            prestigious Golden Visa. Our experts guide you through every step.
          </p>

          {/* Benefits */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "300ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            {[
              { value: "10", label: "Year Residency" },
              { value: "100%", label: "Family Included" },
              { value: "0%", label: "Income Tax" },
              { value: "48hr", label: "Fast Track" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gilt block tracking-[-0.02em]">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.1em] text-paper/50 mt-3 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-[800ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "400ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            <Link href="/golden-visa" className="btn-ghost">
              Learn About Golden Visa
            </Link>
            <Link href="/contact" className="link-arrow text-gilt">
              Check Your Eligibility
              <svg
                className="arrow w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

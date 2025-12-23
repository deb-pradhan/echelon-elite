"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export function GoldenVisaHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-40 pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-void/80" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div
            className={`flex items-center gap-2 mb-10 text-paper/50 text-sm transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
          >
            <a href="/" className="hover:text-paper transition-colors duration-[400ms]"
              style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
            >
              Home
            </a>
            <span>/</span>
            <span className="text-gilt">Golden Visa</span>
          </div>

          {/* Label */}
          <span
            className={`text-label text-gilt block mb-8 transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              transitionDelay: "100ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Dubai Golden Visa Hub
          </span>

          {/* Heading */}
          <h1
            className={`font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-paper leading-tight tracking-[-0.02em] mb-10 transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              color: "var(--color-paper)",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
              transitionDelay: "200ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Your Gateway to
            <br />
            <em className="text-gilt">10-Year</em> UAE Residency
          </h1>

          {/* Description */}
          <p
            className={`text-xl text-paper/70 max-w-2xl mb-16 leading-relaxed transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              transitionDelay: "300ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            Invest in Dubai property worth AED 2 million or more and secure
            long-term residency for you and your family. Our experts handle the
            complete process.
          </p>

          {/* Key Benefits */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "400ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            {[
              { value: "10 Years", label: "Residency" },
              { value: "AED 2M", label: "Min. Investment" },
              { value: "Family", label: "Included" },
              { value: "48 Hours", label: "Fast Track" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-paper/20 p-8 text-center"
              >
                <span className="font-[family-name:var(--font-playfair)] text-2xl text-gilt block mb-2 tracking-[-0.01em]">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.1em] text-paper/50">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-6 transition-all duration-[800ms] ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "500ms",
              transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
            }}
          >
            <Button href="/contact" variant="ghost">
              Check Your Eligibility
            </Button>
            <a href="#process" className="link-arrow text-gilt">
              View Step-by-Step Process
              <svg
                className="arrow w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

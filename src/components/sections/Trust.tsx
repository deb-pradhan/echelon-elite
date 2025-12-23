"use client";

import { useEffect, useRef, useState } from "react";

const trustElements = [
  {
    logo: "RERA",
    description: "Licensed Real Estate Broker",
  },
  {
    logo: "DLD",
    description: "Dubai Land Department Registered",
  },
  {
    logo: "EMAAR",
    description: "Authorized Sales Partner",
  },
  {
    logo: "SOBHA",
    description: "Premium Partner",
  },
];

const awards = [
  "Top Luxury Brokerage 2024",
  "Best Investor Services",
  "Golden Visa Excellence Award",
];

export function Trust() {
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
    <section ref={sectionRef} className="py-32 bg-paper">
      <div className="container-luxury">
        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center items-center gap-16 md:gap-24 mb-20 transition-all duration-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
        >
          {trustElements.map((element) => (
            <div key={element.logo} className="text-center group">
              <span className="font-[family-name:var(--font-playfair)] text-2xl text-void/25 group-hover:text-void/50 transition-colors duration-[400ms]"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              >
                {element.logo}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.15em] text-void/35 mt-2">
                {element.description}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-8 mb-20">
          <div className="w-20 h-[1px] bg-void/10" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-void/25">
            Recognition
          </span>
          <div className="w-20 h-[1px] bg-void/10" />
        </div>

        {/* Awards */}
        <div
          className={`flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-all duration-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "200ms",
            transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
          }}
        >
          {awards.map((award) => (
            <div
              key={award}
              className="flex items-center gap-4 text-void/50"
            >
              <svg
                className="w-5 h-5 text-gilt"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{award}</span>
            </div>
          ))}
        </div>

        {/* Group Company Note */}
        <p
          className={`text-center text-sm text-void/40 mt-20 transition-all duration-[800ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "300ms",
            transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
          }}
        >
          Part of the Echelon Group of Companies — Trusted by over 1,000
          international investors
        </p>
      </div>
    </section>
  );
}

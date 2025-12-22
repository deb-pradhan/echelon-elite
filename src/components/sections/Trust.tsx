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
    <section ref={sectionRef} className="py-24 bg-marble/30">
      <div className="container-luxury">
        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {trustElements.map((element) => (
            <div key={element.logo} className="text-center group">
              <span className="font-[family-name:var(--font-playfair)] text-2xl text-charcoal/30 group-hover:text-charcoal/60 transition-colors">
                {element.logo}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-charcoal/40 mt-1">
                {element.description}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="w-16 h-[1px] bg-marble" />
          <span className="text-[10px] uppercase tracking-widest text-charcoal/30">
            Recognition
          </span>
          <div className="w-16 h-[1px] bg-marble" />
        </div>

        {/* Awards */}
        <div
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {awards.map((award) => (
            <div
              key={award}
              className="flex items-center gap-3 text-charcoal/50"
            >
              <svg
                className="w-5 h-5 text-gold"
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
          className={`text-center text-sm text-charcoal/40 mt-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Part of the Echelon Group of Companies — Trusted by over 1,000
          international investors
        </p>
      </div>
    </section>
  );
}


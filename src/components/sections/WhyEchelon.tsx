"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Golden Visa Expertise",
    description:
      "Specialized guidance through Dubai's Golden Visa process. We ensure your property investment qualifies and handle the complete application.",
  },
  {
    number: "02",
    title: "Ultra-Premium Portfolio",
    description:
      "Access to exclusive off-market properties and pre-launch opportunities from Dubai's most prestigious developers.",
  },
  {
    number: "03",
    title: "White-Glove Service",
    description:
      "From property selection to post-purchase concierge, we provide end-to-end support for international investors.",
  },
];

export function WhyEchelon() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-alabaster">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="Why Choose Us"
              title="The Echelon Distinction"
              subtitle="We don't simply sell properties. We craft investment strategies for those who demand excellence."
            />
            <div className="mt-12">
              <div className="flex items-center gap-6 text-charcoal/60">
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-midnight block">
                    500+
                  </span>
                  <span className="text-xs uppercase tracking-widest">
                    Properties Sold
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-marble" />
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-midnight block">
                    AED 2B+
                  </span>
                  <span className="text-xs uppercase tracking-widest">
                    Transaction Value
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`border-t border-marble py-10 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex gap-8">
                    <span className="text-gold text-sm font-medium">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-midnight mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


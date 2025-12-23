"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useEffect, useRef, useState } from "react";

const requirements = [
  {
    title: "Property Investment",
    description:
      "Purchase property worth AED 2 million or more. Off-plan properties also qualify if minimum investment threshold is met.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    title: "Valid Passport",
    description:
      "Passport valid for at least 6 months from application date. No criminal record required.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: "Health Insurance",
    description:
      "Valid UAE health insurance is required for the applicant and all dependents included in the application.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Title Deed",
    description:
      "Property must be fully paid or mortgaged to UAE banks. You'll need the official Title Deed from DLD.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const benefits = [
  "Live and work in UAE without a sponsor",
  "Sponsor family members including spouse and children",
  "Sponsor domestic staff",
  "Unlimited entry and exit from UAE",
  "0% income tax on worldwide earnings",
  "Access to world-class healthcare and education",
];

export function GoldenVisaOverview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-paper">
      <div className="container-luxury">
        {/* Intro */}
        <div className="max-w-3xl mb-24">
          <SectionHeading
            label="What is the Golden Visa?"
            title="Long-Term Residency Through Property Investment"
            subtitle="The UAE Golden Visa is a long-term residency permit that allows foreign nationals to live, work, and study in the UAE. Property investors can qualify by purchasing real estate worth AED 2 million or more."
          />
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {requirements.map((req, index) => (
            <div
              key={req.title}
              className={`bg-paper p-10 border border-void/10 transition-all duration-[800ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              <div className="text-gilt mb-8">{req.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-void mb-4 tracking-[-0.01em]">
                {req.title}
              </h3>
              <p className="text-stone leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-label text-gilt block mb-6">Benefits</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-void mb-10 tracking-[-0.02em]">
              Why Choose the
              <br />
              Golden Visa?
            </h2>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-5 transition-all duration-[600ms] ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ 
                    transitionDelay: `${400 + index * 100}ms`,
                    transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gilt mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-void/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-void p-14 text-paper">
            <span className="text-label text-gilt block mb-10">
              Golden Visa Stats
            </span>
            <div className="space-y-10">
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-5xl text-gilt tracking-[-0.02em]">
                  150,000+
                </span>
                <p className="text-paper/50 mt-3">
                  Golden Visas issued since launch
                </p>
              </div>
              <div className="h-[1px] bg-paper/10" />
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-5xl text-gilt tracking-[-0.02em]">
                  AED 2M
                </span>
                <p className="text-paper/50 mt-3">
                  Minimum property investment
                </p>
              </div>
              <div className="h-[1px] bg-paper/10" />
              <div>
                <span className="font-[family-name:var(--font-playfair)] text-5xl text-gilt tracking-[-0.02em]">
                  10 Years
                </span>
                <p className="text-paper/50 mt-3">
                  Renewable residency permit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

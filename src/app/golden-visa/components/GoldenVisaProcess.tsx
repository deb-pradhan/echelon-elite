"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Property Selection",
    duration: "1-2 Weeks",
    description:
      "Work with our advisors to select a Golden Visa-eligible property that matches your investment goals. We'll ensure it meets the AED 2M minimum requirement.",
    details: [
      "Free consultation with investment advisor",
      "Curated selection of eligible properties",
      "ROI and market analysis",
      "Virtual or in-person viewings",
    ],
  },
  {
    step: "02",
    title: "Property Purchase",
    duration: "2-4 Weeks",
    description:
      "Complete the property purchase with our end-to-end support. We handle negotiations, documentation, and DLD registration.",
    details: [
      "MOU preparation and signing",
      "NOC from developer",
      "DLD registration",
      "Title Deed issuance",
    ],
  },
  {
    step: "03",
    title: "Document Preparation",
    duration: "1 Week",
    description:
      "Gather and prepare all required documents for your Golden Visa application. Our team ensures everything is in order.",
    details: [
      "Passport copies (notarized)",
      "Passport-sized photographs",
      "Title Deed copy",
      "Health insurance",
    ],
  },
  {
    step: "04",
    title: "Application Submission",
    duration: "3-5 Days",
    description:
      "Submit your Golden Visa application through official channels. We manage the entire submission process on your behalf.",
    details: [
      "Online application submission",
      "Application fee payment",
      "Document verification",
      "Application tracking",
    ],
  },
  {
    step: "05",
    title: "Medical & Emirates ID",
    duration: "1 Week",
    description:
      "Complete the required medical examination and Emirates ID biometrics at authorized centers.",
    details: [
      "Medical fitness test",
      "Biometric data collection",
      "Emirates ID application",
      "Document attestation",
    ],
  },
  {
    step: "06",
    title: "Visa Issuance",
    duration: "2-3 Days",
    description:
      "Receive your 10-year Golden Visa. Your family members can then apply for their dependent visas.",
    details: [
      "Golden Visa stamping",
      "Family visa applications",
      "Residence permit activation",
      "Welcome to the UAE!",
    ],
  },
];

export function GoldenVisaProcess() {
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
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-void"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <SectionHeading
            label="Step by Step"
            title="The Golden Visa Process"
            subtitle="From property selection to visa issuance, we guide you through every step. Total timeline: 6-10 weeks."
            theme="dark"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-paper/10 hidden lg:block" />

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative lg:pl-28 py-14 border-b border-paper/10 last:border-b-0 transition-all duration-[800ms] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
                }}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-0 top-14 w-16 h-16 items-center justify-center bg-void border border-gilt text-gilt font-[family-name:var(--font-playfair)] text-xl">
                  {step.step}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Mobile Step Number */}
                  <div className="lg:hidden text-gilt text-[12px] tracking-[0.1em] uppercase">
                    Step {step.step}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-5 mb-5">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-paper tracking-[-0.01em]" style={{ color: "var(--color-paper)" }}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-gilt bg-gilt/10 px-4 py-2">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-paper/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 gap-5">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 text-sm text-paper/40"
                        >
                          <svg
                            className="w-4 h-4 text-gilt flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Timeline */}
        <div className="mt-20 p-10 border border-paper/10 text-center">
          <span className="text-label text-gilt block mb-6">
            Total Timeline
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-4xl text-paper tracking-[-0.02em]">
            6-10 Weeks
          </span>
          <p className="text-paper/40 mt-5 max-w-md mx-auto">
            From property selection to Golden Visa issuance. Fast-track
            processing available for eligible applicants.
          </p>
        </div>
      </div>
    </section>
  );
}

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
      className="section-padding bg-midnight"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="max-w-3xl mb-20">
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
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-alabaster/10 hidden lg:block" />

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative lg:pl-24 py-12 border-b border-alabaster/10 last:border-b-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="hidden lg:flex absolute left-0 top-12 w-16 h-16 items-center justify-center bg-midnight border border-gold text-gold font-[family-name:var(--font-playfair)] text-xl">
                  {step.step}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Mobile Step Number */}
                  <div className="lg:hidden text-gold text-sm font-medium">
                    Step {step.step}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-alabaster">
                        {step.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-3 py-1">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-alabaster/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 gap-4">
                      {step.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-alabaster/50"
                        >
                          <svg
                            className="w-4 h-4 text-gold flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
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
        <div className="mt-16 p-8 border border-alabaster/10 text-center">
          <span className="text-label text-gold block mb-4">
            Total Timeline
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-4xl text-alabaster">
            6-10 Weeks
          </span>
          <p className="text-alabaster/50 mt-4 max-w-md mx-auto">
            From property selection to Golden Visa issuance. Fast-track
            processing available for eligible applicants.
          </p>
        </div>
      </div>
    </section>
  );
}


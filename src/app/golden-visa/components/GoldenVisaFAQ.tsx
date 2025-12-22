"use client";

import { useState, useRef, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What is the minimum property investment for the Golden Visa?",
    answer:
      "The minimum property investment required for the Golden Visa is AED 2 million (approximately USD 545,000). This can be a single property or multiple properties that total AED 2 million or more. Off-plan properties also qualify if the total investment meets the threshold.",
  },
  {
    question: "Can I get a Golden Visa for off-plan property?",
    answer:
      "Yes, off-plan properties qualify for the Golden Visa as long as the total investment is AED 2 million or more. However, the Golden Visa will only be issued after the property is handed over and the Title Deed is issued. During construction, investors can obtain a 2-year renewable investor visa.",
  },
  {
    question: "Can my family be included in the Golden Visa?",
    answer:
      "Yes, your spouse and children can be sponsored under your Golden Visa. Children up to 25 years old (regardless of gender) can be included. You can also sponsor domestic staff members.",
  },
  {
    question: "What happens if I sell the property?",
    answer:
      "If you sell the property before the visa expires, your Golden Visa will be cancelled unless you purchase another property of equal or greater value. We recommend maintaining property ownership for the duration of your visa validity.",
  },
  {
    question: "Can I work in the UAE with a Golden Visa?",
    answer:
      "Yes, Golden Visa holders can live and work in the UAE without requiring a separate work permit or sponsor. You can start a business, be employed, or work as a freelancer.",
  },
  {
    question: "Is there a minimum stay requirement in the UAE?",
    answer:
      "Unlike regular visas, there is no minimum stay requirement for Golden Visa holders. You can travel freely and stay outside the UAE for extended periods without losing your residency status.",
  },
  {
    question: "Can mortgaged properties qualify for the Golden Visa?",
    answer:
      "Yes, mortgaged properties qualify as long as you have paid at least AED 2 million towards the property. The mortgage must be with a UAE-licensed bank, and you'll need a statement from the bank confirming your paid equity.",
  },
  {
    question: "How long does the Golden Visa process take?",
    answer:
      "The complete process from property purchase to visa issuance typically takes 6-10 weeks. This includes property registration, document preparation, application submission, medical tests, and visa stamping. Fast-track options are available.",
  },
];

export function GoldenVisaFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} className="section-padding bg-alabaster">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about the Dubai Golden Visa through property investment."
            />
            <div className="mt-8 p-6 bg-midnight text-alabaster">
              <span className="text-label text-gold block mb-4">
                Need More Help?
              </span>
              <p className="text-alabaster/60 mb-6 text-sm leading-relaxed">
                Our Golden Visa specialists are available to answer any specific
                questions about your situation.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-gold text-sm hover:underline"
              >
                Schedule a Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-b border-marble transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full py-6 flex items-start justify-between gap-4 text-left"
                  >
                    <span className="font-[family-name:var(--font-playfair)] text-lg text-midnight">
                      {faq.question}
                    </span>
                    <span
                      className={`text-gold flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-charcoal/60 leading-relaxed pr-12">
                      {faq.answer}
                    </p>
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


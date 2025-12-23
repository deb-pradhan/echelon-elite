import { SectionHeading } from "@/components/ui/SectionHeading";

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
  return (
    <section className="section-padding bg-paper">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column - Heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              label="Why Choose Us"
              title="The Echelon Distinction"
              subtitle="We don't simply sell properties. We craft investment strategies for those who demand excellence."
            />
            <div className="mt-16">
              <div className="flex items-center gap-8 text-stone">
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-void block tracking-[-0.02em]">
                    500+
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.1em] mt-2 block">
                    Properties Sold
                  </span>
                </div>
                <div className="w-[1px] h-14 bg-void/10" />
                <div className="text-center">
                  <span className="font-[family-name:var(--font-playfair)] text-4xl text-void block tracking-[-0.02em]">
                    AED 2B+
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.1em] mt-2 block">
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
                  className="border-t border-void/10 py-12 opacity-100 translate-y-0"
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
                  }}
                >
                  <div className="flex gap-10">
                    <span className="text-gilt text-[12px] tracking-[0.1em] font-normal">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-void mb-4 tracking-[-0.01em]">
                        {feature.title}
                      </h3>
                      <p className="text-stone leading-relaxed">
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

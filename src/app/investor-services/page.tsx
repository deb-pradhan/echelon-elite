import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Investor Services | End-to-End Property Buying Support | Echelon Elite",
  description:
    "Complete investor services for Dubai property purchases. Remote buying, documentation, bank account setup, Golden Visa processing, and after-sales concierge.",
  keywords:
    "Dubai property services, remote buying Dubai, Golden Visa processing, property documentation, bank account UAE",
};

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Property Discovery",
    description:
      "We analyze your investment criteria, risk appetite, and goals to curate a selection of properties that match your requirements perfectly.",
    features: [
      "Personalized property matching",
      "Market analysis and insights",
      "ROI projections",
      "Virtual property tours",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Remote Buying Support",
    description:
      "Purchase property from anywhere in the world. We handle viewings, negotiations, and paperwork while keeping you informed every step of the way.",
    features: [
      "Power of Attorney setup",
      "Video call viewings",
      "Real-time updates",
      "Document courier service",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Documentation Support",
    description:
      "Our team handles all legal and administrative paperwork, ensuring compliance with UAE property laws and regulations.",
    features: [
      "MOU preparation",
      "DLD registration",
      "NOC processing",
      "Title deed transfer",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Bank Account Setup",
    description:
      "We assist international investors in opening UAE bank accounts for seamless property transactions and ongoing management.",
    features: [
      "Bank recommendations",
      "Document preparation",
      "Application support",
      "Account activation",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: "Golden Visa Processing",
    description:
      "End-to-end Golden Visa application support for you and your family, with a 100% success rate for eligible applicants.",
    features: [
      "Eligibility assessment",
      "Application submission",
      "Medical coordination",
      "Visa stamping",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Developer Coordination",
    description:
      "Direct relationships with top developers for priority access to new launches, best payment plans, and exclusive inventory.",
    features: [
      "Pre-launch access",
      "Payment plan negotiation",
      "Progress updates",
      "Handover coordination",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "After-Sales Concierge",
    description:
      "Ongoing support after your purchase including property management, interior design coordination, and rental management.",
    features: [
      "Snagging services",
      "Interior design",
      "Property management",
      "Rental services",
    ],
  },
];

export default function InvestorServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
            alt="Luxury property in Dubai"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-void/80" />
        </div>

        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl">
            <span
              className="text-label text-gilt block mb-8"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              For Global Investors
            </span>
            <h1
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-paper leading-tight tracking-[-0.02em] mb-10"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              White-Glove
              <br />
              <em className="text-gilt">Investment</em> Services
            </h1>
            <p
              className="text-xl text-paper/70 leading-relaxed mb-14"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
            >
              From property discovery to after-sales support, we handle every
              aspect of your Dubai real estate investment journey.
            </p>
            <Button href="/contact" variant="ghost">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="max-w-3xl mb-24">
            <SectionHeading
              label="Our Services"
              title="Complete Investment Support"
              subtitle="Every service you need to invest confidently in Dubai real estate, delivered with meticulous attention to detail."
            />
          </div>

          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-14 border-b border-void/10 last:border-b-0"
              >
                {/* Number & Icon */}
                <div className="lg:col-span-1">
                  <span className="text-gilt text-[12px] tracking-[0.1em] uppercase">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5">
                  <div className="text-gilt mb-6">{service.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-void mb-5 tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-stone leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-4 text-sm text-void/60"
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
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-void">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-label text-gilt block mb-8">
                How It Works
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-paper mb-10 tracking-[-0.02em]">
                A Seamless Experience
              </h2>
              <p className="text-paper/50 leading-relaxed mb-10">
                Our structured approach ensures nothing is left to chance. Each
                step is carefully planned and executed by our experienced team.
              </p>

              <ol className="space-y-8">
                {[
                  "Initial consultation to understand your goals",
                  "Curated property selection and analysis",
                  "Viewing and decision support",
                  "Documentation and transaction management",
                  "Golden Visa processing (if applicable)",
                  "Handover and after-sales support",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-5">
                    <span className="w-9 h-9 flex items-center justify-center border border-gilt text-gilt text-sm">
                      {index + 1}
                    </span>
                    <span className="text-paper/70 pt-1.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-void border border-paper/10 p-14">
              <span className="text-label text-gilt block mb-10">
                Client Promise
              </span>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <svg
                    className="w-6 h-6 text-gilt flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-paper font-normal mb-2">
                      100% Transparency
                    </h4>
                    <p className="text-paper/40 text-sm">
                      No hidden fees, no surprises. Clear communication at every
                      stage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <svg
                    className="w-6 h-6 text-gilt flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-paper font-normal mb-2">
                      24/7 Availability
                    </h4>
                    <p className="text-paper/40 text-sm">
                      We work across time zones to serve our global clientele.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <svg
                    className="w-6 h-6 text-gilt flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                  <div>
                    <h4 className="text-paper font-normal mb-2">
                      Expert Guidance
                    </h4>
                    <p className="text-paper/40 text-sm">
                      Seasoned professionals with deep market knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Ready to Start?"
              title="Your Investment Journey Begins Here"
              subtitle="Schedule a complimentary consultation with our investment advisors. No obligation, just expert guidance."
              align="center"
            />
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button href="/contact" variant="secondary">
                Schedule Consultation
              </Button>
              <a
                href="https://wa.me/97145551234"
                className="inline-flex items-center gap-3 text-gilt hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Or WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

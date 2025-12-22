import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Echelon Elite | Premium Dubai Real Estate Brokerage",
  description:
    "Echelon Elite is an ultra-premium real estate brokerage specializing in luxury property sales and Golden Visa investments in Dubai. Part of the Echelon Group of Companies.",
  keywords:
    "Echelon Elite, Dubai real estate brokerage, luxury property Dubai, Golden Visa experts, RERA registered",
};

const values = [
  {
    title: "Excellence",
    description:
      "We set the highest standards in everything we do, from property curation to client service.",
  },
  {
    title: "Integrity",
    description:
      "Transparent dealings and honest advice form the foundation of every client relationship.",
  },
  {
    title: "Expertise",
    description:
      "Deep market knowledge and regulatory expertise ensure optimal outcomes for our investors.",
  },
];

const stats = [
  { value: "AED 2B+", label: "Transaction Volume" },
  { value: "500+", label: "Properties Sold" },
  { value: "40+", label: "Nationalities Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2796&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-midnight/80" />
        </div>

        <div className="relative z-10 container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gold block mb-6">About Us</span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl text-alabaster leading-tight mb-8">
              The <em className="text-gold">Echelon</em>
              <br />
              Standard
            </h1>
            <p className="text-xl text-alabaster/70 leading-relaxed">
              Dubai&apos;s premier luxury real estate brokerage, dedicated to
              connecting discerning investors with exceptional properties and
              seamless Golden Visa solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-alabaster">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="Ultra-Premium Real Estate for Global Investors"
              />
              <div className="space-y-6 text-charcoal/70 leading-relaxed">
                <p>
                  Echelon Elite represents the pinnacle of Dubai real estate
                  services. We specialize exclusively in premium property sales
                  for investors, with particular expertise in Golden Visa
                  qualification and processing.
                </p>
                <p>
                  Part of the established Echelon Group of Companies, we
                  leverage decades of regional expertise to deliver unmatched
                  service to high-net-worth individuals from around the world.
                </p>
                <p>
                  Our approach is simple: we don&apos;t do rentals. We don&apos;t do
                  budget properties. We focus entirely on what we do best—
                  connecting serious investors with Dubai&apos;s finest real estate
                  opportunities.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="ghost-dark">
                  Connect With Us
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="Luxury Dubai Property"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-midnight">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-gold block mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-alabaster/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-alabaster">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading
              label="Our Values"
              title="The Principles That Guide Us"
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-8 border border-marble text-center"
              >
                <span className="text-gold text-sm font-medium">
                  0{index + 1}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-midnight mt-4 mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Investors Trust Us */}
      <section className="section-padding bg-marble/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                label="Why Investors Trust Us"
                title="Built on Expertise and Results"
              />
              <ul className="space-y-6 mt-8">
                {[
                  "RERA registered and fully licensed brokerage",
                  "Authorized sales partner for top developers including Emaar, Sobha, and Damac",
                  "Dedicated Golden Visa processing team with 100% success rate",
                  "Multilingual team serving 40+ nationalities",
                  "Complete end-to-end service from selection to handover",
                  "Post-purchase concierge and property management support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-gold mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-midnight p-12 text-alabaster flex flex-col justify-center">
              <span className="text-label text-gold block mb-6">
                Credentials
              </span>
              <div className="space-y-8">
                <div>
                  <span className="text-alabaster/40 text-sm">
                    RERA License
                  </span>
                  <p className="text-alabaster text-lg mt-1">ORN: 12345</p>
                </div>
                <div className="h-[1px] bg-alabaster/10" />
                <div>
                  <span className="text-alabaster/40 text-sm">
                    DLD Registration
                  </span>
                  <p className="text-alabaster text-lg mt-1">
                    Registered Broker
                  </p>
                </div>
                <div className="h-[1px] bg-alabaster/10" />
                <div>
                  <span className="text-alabaster/40 text-sm">
                    Developer Partnerships
                  </span>
                  <p className="text-alabaster text-lg mt-1">
                    Emaar, Sobha, Damac, Nakheel, Danube
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-midnight">
        <div className="container-luxury text-center">
          <span className="text-label text-gold block mb-6">Get in Touch</span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-alabaster mb-6">
            Ready to Invest in Dubai?
          </h2>
          <p className="text-lg text-alabaster/60 mb-12 max-w-xl mx-auto">
            Schedule a consultation with our investment advisors and discover
            how Echelon Elite can help you achieve your goals.
          </p>
          <Button href="/contact" variant="ghost-light">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </>
  );
}


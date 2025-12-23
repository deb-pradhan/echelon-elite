import { Metadata } from "next";
import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Luxury Properties for Sale in Dubai | Echelon Elite",
  description:
    "Browse our exclusive collection of luxury apartments, villas, and branded residences in Dubai. All properties are Golden Visa eligible. Premium off-plan investments available.",
  keywords:
    "Dubai luxury properties, apartments for sale Dubai, villas Dubai, branded residences, off-plan Dubai, Golden Visa properties",
};

const properties = [
  {
    id: "1",
    title: "The Address Residences",
    location: "Downtown Dubai",
    price: "AED 5,500,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    developer: "Emaar",
    bedrooms: "2-4 Bedrooms",
    size: "2,400 - 4,800 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "2",
    title: "One at Palm Jumeirah",
    location: "Palm Jumeirah",
    price: "AED 12,000,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    developer: "Omniyat",
    bedrooms: "3-5 Bedrooms",
    size: "4,200 - 8,500 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "3",
    title: "Sobha Hartland Villas",
    location: "Mohammed Bin Rashid City",
    price: "AED 8,200,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    developer: "Sobha",
    bedrooms: "4-6 Bedrooms",
    size: "5,800 - 12,000 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "4",
    title: "Damac Bay by Cavalli",
    location: "Dubai Harbour",
    price: "AED 3,800,000",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    developer: "Damac",
    bedrooms: "1-3 Bedrooms",
    size: "1,200 - 3,500 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "5",
    title: "Burj Binghatti Jacob & Co",
    location: "Business Bay",
    price: "AED 15,000,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    developer: "Binghatti",
    bedrooms: "2-4 Bedrooms",
    size: "2,800 - 6,000 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "6",
    title: "Creek Harbour Residences",
    location: "Dubai Creek Harbour",
    price: "AED 4,200,000",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    developer: "Emaar",
    bedrooms: "2-3 Bedrooms",
    size: "1,800 - 3,200 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "7",
    title: "Palm Jumeirah Signature Villas",
    location: "Palm Jumeirah",
    price: "AED 35,000,000",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop",
    developer: "Nakheel",
    bedrooms: "5-7 Bedrooms",
    size: "12,000 - 25,000 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "8",
    title: "W Residences Dubai",
    location: "Palm Jumeirah",
    price: "AED 7,500,000",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop",
    developer: "Al Sharq",
    bedrooms: "2-4 Bedrooms",
    size: "2,500 - 5,500 sq.ft",
    goldenVisaEligible: true,
  },
  {
    id: "9",
    title: "Ellington Beach House",
    location: "Palm Jumeirah",
    price: "AED 6,800,000",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2053&auto=format&fit=crop",
    developer: "Ellington",
    bedrooms: "3-4 Bedrooms",
    size: "3,200 - 5,800 sq.ft",
    goldenVisaEligible: true,
  },
];

const categories = [
  { label: "All Properties", value: "all", count: properties.length },
  { label: "Apartments", value: "apartments", count: 5 },
  { label: "Villas", value: "villas", count: 3 },
  { label: "Branded Residences", value: "branded", count: 4 },
  { label: "Off-Plan", value: "offplan", count: 6 },
];

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-20 bg-void">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gilt block mb-8">
              Premium Collection
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-paper leading-tight tracking-[-0.02em] mb-8">
              Luxury Properties
            </h1>
            <p className="text-xl text-paper/50">
              Discover Dubai&apos;s most exclusive properties, handpicked for
              discerning investors. All listings are Golden Visa eligible.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-paper border-b border-void/10">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-8 py-4 text-[12px] tracking-[0.1em] uppercase transition-all duration-[400ms] ${
                  category.value === "all"
                    ? "bg-void text-paper"
                    : "bg-transparent text-void/50 hover:text-void border border-void/10"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              >
                {category.label}
                <span className="ml-2 opacity-50">
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-20">
            <button className="btn-secondary">
              Load More Properties
            </button>
          </div>
        </div>
      </section>

      {/* Golden Visa Note */}
      <section className="py-20 bg-void">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 border border-gilt flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gilt"
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
              </div>
              <div>
                <span className="text-paper font-normal block">
                  All Properties Golden Visa Eligible
                </span>
                <span className="text-paper/40 text-sm">
                  Invest AED 2M+ and qualify for 10-year UAE residency
                </span>
              </div>
            </div>
            <a
              href="/golden-visa"
              className="link-arrow text-gilt text-sm"
            >
              Learn About Golden Visa
              <svg
                className="arrow w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Can't Find What You're Looking For?"
              title="Get Personalized Recommendations"
              subtitle="Our advisors can curate a selection of properties based on your specific investment criteria and preferences."
              align="center"
            />
            <div className="mt-10">
              <a href="/contact" className="btn-secondary">
                Speak to an Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

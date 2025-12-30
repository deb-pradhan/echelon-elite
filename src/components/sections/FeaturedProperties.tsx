import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/property/PropertyCard";
import { client, isSanityConfigured } from "../../../sanity/lib/client";
import { featuredPropertiesQuery } from "../../../sanity/lib/queries";
import type { Property } from "../../../sanity/lib/types";

// Fallback data for when Sanity is not configured or has no data
const fallbackProperties = [
  {
    _id: "1",
    title: "The Address Residences",
    slug: "the-address-residences",
    location: "Downtown Dubai",
    priceDisplay: "AED 5,500,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    developer: "Emaar",
    bedrooms: "2-4 Bedrooms",
    size: "2,400 - 4,800 sq.ft",
    goldenVisaEligible: true,
    status: "available" as const,
  },
  {
    _id: "2",
    title: "One at Palm Jumeirah",
    slug: "one-at-palm-jumeirah",
    location: "Palm Jumeirah",
    priceDisplay: "AED 12,000,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    developer: "Omniyat",
    bedrooms: "3-5 Bedrooms",
    size: "4,200 - 8,500 sq.ft",
    goldenVisaEligible: true,
    status: "available" as const,
  },
  {
    _id: "3",
    title: "Sobha Hartland Villas",
    slug: "sobha-hartland-villas",
    location: "Mohammed Bin Rashid City",
    priceDisplay: "AED 8,200,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    developer: "Sobha",
    bedrooms: "4-6 Bedrooms",
    size: "5,800 - 12,000 sq.ft",
    goldenVisaEligible: true,
    status: "available" as const,
  },
];

async function getFeaturedProperties(): Promise<Property[]> {
  if (!isSanityConfigured() || !client) {
    return fallbackProperties;
  }
  
  try {
    const properties = await client.fetch<Property[]>(featuredPropertiesQuery);
    return properties && properties.length > 0 ? properties : fallbackProperties;
  } catch {
    // Return fallback data if Sanity fetch fails
    return fallbackProperties;
  }
}

export async function FeaturedProperties() {
  const properties = await getFeaturedProperties();

  return (
    <section className="section-padding bg-paper">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <SectionHeading
            label="Featured Properties"
            title="Echelon's Top Choices"
            subtitle="Handpicked luxury residences for the discerning investor"
          />
          <div className="mt-10 md:mt-0">
            <Link href="/properties" className="link-arrow">
              View All Properties
              <svg
                className="arrow w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property.slug || property._id}
              title={property.title}
              location={property.location}
              price={property.priceDisplay}
              image={property.image}
              developer={typeof property.developer === "string" ? property.developer : property.developer?.name || ""}
              bedrooms={property.bedrooms}
              size={property.size}
              goldenVisaEligible={property.goldenVisaEligible}
              status={property.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

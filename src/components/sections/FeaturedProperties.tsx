"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/Button";

const featuredProperties = [
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
];

export function FeaturedProperties() {
  return (
    <section className="section-padding bg-alabaster">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            label="Premium Collection"
            title="Featured Properties"
            subtitle="Handpicked luxury residences for the discerning investor"
          />
          <div className="mt-8 md:mt-0">
            <Button href="/properties" variant="gold">
              View All Properties →
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}


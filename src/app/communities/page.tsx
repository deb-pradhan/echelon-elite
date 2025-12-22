import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Dubai Communities & Locations | Premium Areas for Property Investment | Echelon Elite",
  description:
    "Explore Dubai's most prestigious communities for property investment. Downtown Dubai, Palm Jumeirah, Dubai Marina, Business Bay - find the perfect location for your investment.",
  keywords:
    "Dubai communities, Downtown Dubai property, Palm Jumeirah, Dubai Marina, Business Bay real estate, best areas Dubai investment",
};

const communities = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    tagline: "The Heart of New Dubai",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2787&auto=format&fit=crop",
    description:
      "Home to the Burj Khalifa and Dubai Mall, Downtown Dubai represents the epitome of urban luxury. Premium apartments and penthouses with iconic skyline views.",
    properties: 45,
    avgPrice: "AED 3,200/sq.ft",
    avgRoi: "7.2%",
    highlights: ["Burj Khalifa Views", "Walk to Dubai Mall", "Metro Connected"],
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    tagline: "Iconic Island Living",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
    description:
      "The world's largest man-made island offers unparalleled waterfront living. Beach villas, luxury apartments, and exclusive branded residences.",
    properties: 32,
    avgPrice: "AED 3,800/sq.ft",
    avgRoi: "6.8%",
    highlights: ["Private Beach Access", "Resort Lifestyle", "Waterfront Villas"],
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    tagline: "Waterfront Lifestyle",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2788&auto=format&fit=crop",
    description:
      "A vibrant waterfront community with stunning high-rise apartments, yacht berths, and an active lifestyle scene. Perfect for young professionals and investors.",
    properties: 58,
    avgPrice: "AED 2,100/sq.ft",
    avgRoi: "7.5%",
    highlights: ["Marina Views", "Beach Access", "Vibrant Nightlife"],
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    tagline: "Urban Sophistication",
    image:
      "https://images.unsplash.com/photo-1531081722899-d4e11fae7d5f?q=80&w=2787&auto=format&fit=crop",
    description:
      "Dubai's central business district offers modern apartments with canal views and excellent rental yields. Walking distance to Downtown Dubai.",
    properties: 67,
    avgPrice: "AED 1,900/sq.ft",
    avgRoi: "8.1%",
    highlights: ["Canal Views", "High Rental Yield", "Central Location"],
  },
  {
    slug: "expo-city",
    name: "Dubai South / Expo City",
    tagline: "Future Forward",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description:
      "The new growth corridor near Al Maktoum International Airport and Expo 2020 site. Emerging market with excellent capital appreciation potential.",
    properties: 28,
    avgPrice: "AED 1,100/sq.ft",
    avgRoi: "9.2%",
    highlights: ["Near Airport", "Expo 2020 Legacy", "High Growth Potential"],
  },
  {
    slug: "jumeirah-beach-residence",
    name: "Jumeirah Beach Residence",
    tagline: "Beachfront Community",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of the world's largest single-phase residential developments. Beach apartments with direct sea access and The Walk promenade.",
    properties: 41,
    avgPrice: "AED 2,000/sq.ft",
    avgRoi: "7.0%",
    highlights: ["Direct Beach Access", "The Walk", "Family Friendly"],
  },
];

export default function CommunitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-midnight">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gold block mb-6">
              Prime Locations
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-alabaster leading-tight mb-6">
              Dubai Communities
            </h1>
            <p className="text-xl text-alabaster/60">
              Explore the most prestigious neighborhoods in Dubai. Each
              community offers unique investment opportunities and lifestyle
              benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Communities List */}
      <section className="section-padding bg-alabaster">
        <div className="container-luxury">
          <div className="space-y-24">
            {communities.map((community, index) => (
              <div
                key={community.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={community.image}
                    alt={community.name}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-midnight/90 to-transparent">
                    <div className="flex gap-6">
                      <div>
                        <span className="text-gold text-lg font-medium">
                          {community.avgRoi}
                        </span>
                        <span className="text-alabaster/50 text-xs block">
                          Avg ROI
                        </span>
                      </div>
                      <div>
                        <span className="text-alabaster text-lg font-medium">
                          {community.avgPrice}
                        </span>
                        <span className="text-alabaster/50 text-xs block">
                          Avg Price
                        </span>
                      </div>
                      <div>
                        <span className="text-alabaster text-lg font-medium">
                          {community.properties}
                        </span>
                        <span className="text-alabaster/50 text-xs block">
                          Properties
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-label text-gold block mb-4">
                    {community.tagline}
                  </span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-midnight mb-4">
                    {community.name}
                  </h2>
                  <p className="text-charcoal/60 leading-relaxed mb-6">
                    {community.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {community.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-4 py-2 bg-marble/50 text-sm text-charcoal/70"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/communities/${community.slug}`}
                    className="btn-ghost btn-ghost-dark"
                  >
                    View Properties in {community.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-midnight">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Not Sure Which Community?"
              title="Let Us Guide You"
              subtitle="Our advisors can recommend the best community based on your investment goals, lifestyle preferences, and budget."
              align="center"
              theme="dark"
            />
            <div className="mt-8">
              <Link href="/contact" className="btn-ghost btn-ghost-light">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


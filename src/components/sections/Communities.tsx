import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const communities = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    description: "The heart of new Dubai",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2787&auto=format&fit=crop",
    properties: 45,
    avgRoi: "7.2%",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    description: "Iconic island living",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
    properties: 32,
    avgRoi: "6.8%",
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    description: "Waterfront lifestyle",
    image:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2788&auto=format&fit=crop",
    properties: 58,
    avgRoi: "7.5%",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    description: "Urban sophistication",
    image:
      "https://images.unsplash.com/photo-1531081722899-d4e11fae7d5f?q=80&w=2787&auto=format&fit=crop",
    properties: 67,
    avgRoi: "8.1%",
  },
];

export function Communities() {
  return (
    <section className="section-padding section-dark">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <SectionHeading
            label="Prime Locations"
            title="Browse by Community"
            subtitle="Discover Dubai's most prestigious neighborhoods"
            theme="dark"
          />
          <div className="mt-10 md:mt-0">
            <Link href="/communities" className="link-arrow text-gilt">
              View All Communities
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

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className="group relative aspect-[3/4] overflow-hidden opacity-100 translate-y-0"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)"
              }}
            >
              {/* Image */}
              <Image
                src={community.image}
                alt={community.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.15em] text-gilt mb-3">
                  {community.properties} Properties
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-paper mb-2 tracking-[-0.01em]">
                  {community.name}
                </h3>
                <p className="text-sm text-paper/60 mb-6">
                  {community.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 pt-5 border-t border-paper/10">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-paper/40 uppercase tracking-[0.1em]">Avg ROI</span>
                    <span className="text-gilt text-sm font-normal">
                      {community.avgRoi}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 w-10 h-10 border border-paper/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[400ms] translate-x-2 group-hover:translate-x-0"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)" }}
                >
                  <svg
                    className="w-4 h-4 text-paper"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

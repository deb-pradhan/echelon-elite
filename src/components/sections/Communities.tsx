"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
    <section ref={sectionRef} className="section-padding bg-midnight">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            label="Prime Locations"
            title="Browse by Community"
            subtitle="Discover Dubai's most prestigious neighborhoods"
            theme="dark"
          />
          <div className="mt-8 md:mt-0">
            <Button href="/communities" variant="gold">
              View All Communities →
            </Button>
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Link
              key={community.slug}
              href={`/communities/${community.slug}`}
              className={`group relative aspect-[3/4] overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <Image
                src={community.image}
                alt={community.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-gold mb-2">
                  {community.properties} Properties
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-alabaster mb-1">
                  {community.name}
                </h3>
                <p className="text-sm text-alabaster/60 mb-4">
                  {community.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-alabaster/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-alabaster/40">Avg ROI</span>
                    <span className="text-gold text-sm font-medium">
                      {community.avgRoi}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 border border-alabaster/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="w-4 h-4 text-alabaster"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
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


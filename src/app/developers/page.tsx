import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Dubai Property Developers | Emaar, Sobha, Damac, Nakheel | Echelon Elite",
  description:
    "Explore properties from Dubai's top developers. Emaar, Sobha, Damac, Nakheel, Danube - premium developments with Golden Visa eligibility.",
  keywords:
    "Emaar Dubai, Sobha properties, Damac residences, Nakheel developments, Danube homes, Dubai developers",
};

const developers = [
  {
    slug: "emaar",
    name: "Emaar Properties",
    logo: "EMAAR",
    tagline: "Creating Iconic Destinations",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2787&auto=format&fit=crop",
    description:
      "The developer behind Burj Khalifa and Dubai Mall, Emaar is synonymous with luxury and excellence. Their developments define Dubai's skyline and set global standards for quality.",
    projects: ["Downtown Dubai", "Dubai Hills Estate", "Dubai Creek Harbour", "Arabian Ranches"],
    properties: 125,
    established: "1997",
    highlight: "World's Tallest Tower - Burj Khalifa",
  },
  {
    slug: "sobha",
    name: "Sobha Realty",
    logo: "SOBHA",
    tagline: "Passion at Work",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    description:
      "Known for backward integration and craftsmanship, Sobha delivers exceptional quality with in-house capabilities covering every aspect of development and construction.",
    projects: ["Sobha Hartland", "Sobha One", "Sobha Seahaven", "Sobha Reserve"],
    properties: 68,
    established: "1976",
    highlight: "Complete In-House Manufacturing",
  },
  {
    slug: "damac",
    name: "DAMAC Properties",
    logo: "DAMAC",
    tagline: "Luxury Living",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pioneers of branded residences in the Middle East, DAMAC partners with world-renowned brands like Versace, Fendi, and Cavalli to create unique lifestyle experiences.",
    projects: ["DAMAC Hills", "DAMAC Lagoons", "Aykon City", "DAMAC Bay"],
    properties: 95,
    established: "2002",
    highlight: "Branded Residences Pioneer",
  },
  {
    slug: "nakheel",
    name: "Nakheel",
    logo: "NAKHEEL",
    tagline: "Where Vision Takes Shape",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074&auto=format&fit=crop",
    description:
      "Creator of Palm Jumeirah and The World islands, Nakheel has transformed Dubai's coastline and established itself as a master developer of iconic destinations.",
    projects: ["Palm Jumeirah", "The World", "Deira Islands", "Ibn Battuta Mall"],
    properties: 82,
    established: "2000",
    highlight: "Palm Jumeirah Developer",
  },
  {
    slug: "danube",
    name: "Danube Properties",
    logo: "DANUBE",
    tagline: "Affordable Luxury",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
    description:
      "Making luxury accessible with attractive payment plans, Danube has revolutionized Dubai's mid-market segment with high-quality developments and innovative financing.",
    projects: ["Bayz", "Elitz", "Gemz", "Pearlz"],
    properties: 45,
    established: "2014",
    highlight: "Flexible Payment Plans",
  },
];

export default function DevelopersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 bg-midnight">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gold block mb-6">
              Premier Developers
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-alabaster leading-tight mb-6">
              Dubai&apos;s Top Developers
            </h1>
            <p className="text-xl text-alabaster/60">
              We partner exclusively with Dubai&apos;s most reputable developers,
              ensuring quality, reliability, and investment security.
            </p>
          </div>
        </div>
      </section>

      {/* Developer List */}
      <section className="section-padding bg-alabaster">
        <div className="container-luxury">
          <div className="space-y-32">
            {developers.map((developer, index) => (
              <div
                key={developer.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={developer.image}
                    alt={developer.name}
                    fill
                    className="object-cover"
                  />
                  {/* Logo Overlay */}
                  <div className="absolute top-6 left-6 bg-midnight/80 backdrop-blur-sm px-6 py-3">
                    <span className="font-[family-name:var(--font-playfair)] text-xl text-alabaster">
                      {developer.logo}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-label text-gold block mb-4">
                    {developer.tagline}
                  </span>
                  <h2 className="font-[family-name:var(--font-playfair)] text-4xl text-midnight mb-4">
                    {developer.name}
                  </h2>
                  <p className="text-charcoal/60 leading-relaxed mb-8">
                    {developer.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <span className="font-[family-name:var(--font-playfair)] text-2xl text-midnight block">
                        {developer.properties}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-charcoal/50">
                        Properties
                      </span>
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-playfair)] text-2xl text-midnight block">
                        {developer.established}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-charcoal/50">
                        Established
                      </span>
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-playfair)] text-2xl text-gold block">
                        ★
                      </span>
                      <span className="text-xs uppercase tracking-widest text-charcoal/50">
                        Premium
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="mb-8">
                    <span className="text-label text-charcoal/50 block mb-3">
                      Key Projects
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {developer.projects.map((project) => (
                        <span
                          key={project}
                          className="px-4 py-2 bg-marble/50 text-sm text-charcoal/70"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="flex items-center gap-3 mb-8 text-gold">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{developer.highlight}</span>
                  </div>

                  <Link
                    href={`/developers/${developer.slug}`}
                    className="btn-ghost btn-ghost-dark"
                  >
                    View {developer.name} Properties
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
              label="Authorized Partner"
              title="Direct Access to Developers"
              subtitle="As an authorized sales partner, we offer exclusive access to new launches, priority unit selection, and the best available payment plans."
              align="center"
              theme="dark"
            />
            <div className="mt-8">
              <Link href="/contact" className="btn-ghost btn-ghost-light">
                Get Priority Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


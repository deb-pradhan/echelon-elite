"use client";

import Link from "next/link";
import Image from "next/image";

const featuredPost = {
  slug: "dubai-golden-visa-2024-complete-guide",
  title: "Dubai Golden Visa 2024: The Complete Investor's Guide",
  excerpt:
    "Everything you need to know about securing residency through property investment. From eligibility criteria to the application process, we cover it all.",
  category: "Golden Visa",
  date: "December 18, 2024",
  readTime: "12 min read",
  image:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop",
};

const blogPosts = [
  {
    slug: "top-5-communities-dubai-2024",
    title: "Top 5 Communities for Luxury Living in Dubai 2024",
    excerpt:
      "From Palm Jumeirah to Emirates Hills, discover the most prestigious addresses that define luxury living in Dubai.",
    category: "Communities",
    date: "December 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2940&auto=format&fit=crop",
  },
  {
    slug: "off-plan-vs-ready-properties",
    title: "Off-Plan vs Ready Properties: Making the Right Choice",
    excerpt:
      "A comprehensive comparison to help investors understand the benefits and considerations of each investment approach.",
    category: "Investment",
    date: "December 12, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
  },
  {
    slug: "branded-residences-worth-premium",
    title: "Are Branded Residences Worth the Premium?",
    excerpt:
      "Examining the value proposition of luxury branded residences from Armani, Bulgari, and Four Seasons in Dubai.",
    category: "Lifestyle",
    date: "December 8, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    slug: "dubai-rental-yields-analysis",
    title: "Dubai Rental Yields: A 2024 Market Analysis",
    excerpt:
      "Deep dive into rental returns across Dubai's prime locations. Which areas offer the best yield potential?",
    category: "Market Insights",
    date: "December 5, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop",
  },
  {
    slug: "emaar-developments-portfolio",
    title: "Inside Emaar's 2024 Development Portfolio",
    excerpt:
      "Exploring the latest projects from Dubai's leading developer, from Dubai Creek Harbour to Downtown expansions.",
    category: "Developers",
    date: "December 1, 2024",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2940&auto=format&fit=crop",
  },
  {
    slug: "foreign-ownership-guide",
    title: "Foreign Ownership in Dubai: What You Need to Know",
    excerpt:
      "Understanding freehold zones, ownership structures, and legal considerations for international investors.",
    category: "Legal",
    date: "November 28, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
  },
];

const categories = [
  "All",
  "Golden Visa",
  "Investment",
  "Communities",
  "Market Insights",
  "Developers",
  "Lifestyle",
  "Legal",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-20 bg-void">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <span className="text-label text-gilt block mb-8">Insights</span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white leading-tight tracking-[-0.02em] mb-8">
              The Echelon <em>Journal</em>
            </h1>
            <p className="text-xl text-paper/60">
              Expert perspectives on Dubai&apos;s luxury real estate market,
              investment strategies, and lifestyle insights.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-paper border-b border-void/10">
        <div className="container-luxury">
          <div className="flex items-center gap-8 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-label whitespace-nowrap transition-colors duration-[400ms] ${
                  category === "All"
                    ? "text-gilt"
                    : "text-void/50 hover:text-void"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-paper">
        <div className="container-luxury">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] group-hover:scale-105"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)",
                  }}
                />
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-gilt text-void text-[11px] font-medium tracking-[0.1em] uppercase">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-label text-gilt">
                    {featuredPost.category}
                  </span>
                  <span className="w-1 h-1 bg-stone rounded-full" />
                  <span className="text-sm text-stone">{featuredPost.date}</span>
                </div>

                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-void leading-tight tracking-[-0.02em] mb-6 group-hover:text-gilt transition-colors duration-[400ms]">
                  {featuredPost.title}
                </h2>

                <p className="text-lg text-stone leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-6">
                  <span className="text-label text-void group-hover:text-gilt transition-colors duration-[400ms]">
                    Read Article
                  </span>
                  <svg
                    className="w-5 h-5 text-gilt transform group-hover:translate-x-2 transition-transform duration-[400ms]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-paper">
        <div className="container-luxury">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-void tracking-[-0.02em]">
              Latest Articles
            </h2>
            <span className="text-sm text-stone">{blogPosts.length} articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)",
                    }}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-gilt">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 bg-stone/50 rounded-full" />
                  <span className="text-[13px] text-stone">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-void leading-snug tracking-[-0.01em] mb-3 group-hover:text-gilt transition-colors duration-[400ms]">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[15px] text-stone leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="mt-6 pt-6 border-t border-void/10">
                  <span className="text-[13px] text-stone/70">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-20">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-void">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-label text-gilt block mb-8">Newsletter</span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white leading-tight tracking-[-0.02em] mb-8">
              Market Insights, <em>Delivered</em>
            </h2>
            <p className="text-lg text-paper/60 mb-12">
              Stay informed with curated market analysis, exclusive property
              listings, and investment opportunities delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent border border-paper/20 text-paper placeholder:text-paper/40 focus:border-gilt outline-none transition-colors duration-[400ms]"
              />
              <button type="submit" className="btn-primary bg-gilt text-void hover:bg-paper">
                Subscribe
              </button>
            </form>

            <p className="text-[13px] text-paper/40 mt-6">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}



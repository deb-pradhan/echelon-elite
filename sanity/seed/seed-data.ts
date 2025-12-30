/**
 * Seed script for Sanity CMS
 * 
 * This script seeds the Sanity database with initial data.
 * 
 * Prerequisites:
 * 1. Create a Sanity project at https://sanity.io/manage
 * 2. Get your project ID and add it to .env.local
 * 3. Create an API token with write access and add it to .env.local
 * 
 * Run with: npx ts-node --esm sanity/seed/seed-data.ts
 * Or add to package.json scripts: "seed": "ts-node --esm sanity/seed/seed-data.ts"
 */

import { createClient } from "@sanity/client";

// Initialize Sanity client with write access
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN, // Needs write access
  useCdn: false,
});

// Developer data
const developers = [
  {
    _type: "developer",
    _id: "developer-emaar",
    name: "Emaar Properties",
    slug: { _type: "slug", current: "emaar" },
    logo: "EMAAR",
    tagline: "Creating Iconic Destinations",
    description:
      "The developer behind Burj Khalifa and Dubai Mall, Emaar is synonymous with luxury and excellence. Their developments define Dubai's skyline and set global standards for quality.",
    projects: ["Downtown Dubai", "Dubai Hills Estate", "Dubai Creek Harbour", "Arabian Ranches"],
    established: "1997",
    highlight: "World's Tallest Tower - Burj Khalifa",
  },
  {
    _type: "developer",
    _id: "developer-sobha",
    name: "Sobha Realty",
    slug: { _type: "slug", current: "sobha" },
    logo: "SOBHA",
    tagline: "Passion at Work",
    description:
      "Known for backward integration and craftsmanship, Sobha delivers exceptional quality with in-house capabilities covering every aspect of development and construction.",
    projects: ["Sobha Hartland", "Sobha One", "Sobha Seahaven", "Sobha Reserve"],
    established: "1976",
    highlight: "Complete In-House Manufacturing",
  },
  {
    _type: "developer",
    _id: "developer-damac",
    name: "DAMAC Properties",
    slug: { _type: "slug", current: "damac" },
    logo: "DAMAC",
    tagline: "Luxury Living",
    description:
      "Pioneers of branded residences in the Middle East, DAMAC partners with world-renowned brands like Versace, Fendi, and Cavalli to create unique lifestyle experiences.",
    projects: ["DAMAC Hills", "DAMAC Lagoons", "Aykon City", "DAMAC Bay"],
    established: "2002",
    highlight: "Branded Residences Pioneer",
  },
  {
    _type: "developer",
    _id: "developer-nakheel",
    name: "Nakheel",
    slug: { _type: "slug", current: "nakheel" },
    logo: "NAKHEEL",
    tagline: "Where Vision Takes Shape",
    description:
      "Creator of Palm Jumeirah and The World islands, Nakheel has transformed Dubai's coastline and established itself as a master developer of iconic destinations.",
    projects: ["Palm Jumeirah", "The World", "Deira Islands", "Ibn Battuta Mall"],
    established: "2000",
    highlight: "Palm Jumeirah Developer",
  },
  {
    _type: "developer",
    _id: "developer-danube",
    name: "Danube Properties",
    slug: { _type: "slug", current: "danube" },
    logo: "DANUBE",
    tagline: "Affordable Luxury",
    description:
      "Making luxury accessible with attractive payment plans, Danube has revolutionized Dubai's mid-market segment with high-quality developments and innovative financing.",
    projects: ["Bayz", "Elitz", "Gemz", "Pearlz"],
    established: "2014",
    highlight: "Flexible Payment Plans",
  },
];

// Community data
const communities = [
  {
    _type: "community",
    _id: "community-downtown-dubai",
    name: "Downtown Dubai",
    slug: { _type: "slug", current: "downtown-dubai" },
    description: "The heart of new Dubai",
    avgRoi: "7.2%",
    featured: true,
    order: 1,
  },
  {
    _type: "community",
    _id: "community-palm-jumeirah",
    name: "Palm Jumeirah",
    slug: { _type: "slug", current: "palm-jumeirah" },
    description: "Iconic island living",
    avgRoi: "6.8%",
    featured: true,
    order: 2,
  },
  {
    _type: "community",
    _id: "community-dubai-marina",
    name: "Dubai Marina",
    slug: { _type: "slug", current: "dubai-marina" },
    description: "Waterfront lifestyle",
    avgRoi: "7.5%",
    featured: true,
    order: 3,
  },
  {
    _type: "community",
    _id: "community-business-bay",
    name: "Business Bay",
    slug: { _type: "slug", current: "business-bay" },
    description: "Urban sophistication",
    avgRoi: "8.1%",
    featured: true,
    order: 4,
  },
  {
    _type: "community",
    _id: "community-mbr-city",
    name: "Mohammed Bin Rashid City",
    slug: { _type: "slug", current: "mohammed-bin-rashid-city" },
    description: "Future of urban living",
    avgRoi: "7.8%",
    featured: false,
    order: 5,
  },
  {
    _type: "community",
    _id: "community-dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    slug: { _type: "slug", current: "dubai-creek-harbour" },
    description: "Waterfront serenity",
    avgRoi: "7.4%",
    featured: false,
    order: 6,
  },
  {
    _type: "community",
    _id: "community-dubai-harbour",
    name: "Dubai Harbour",
    slug: { _type: "slug", current: "dubai-harbour" },
    description: "Maritime luxury",
    avgRoi: "7.6%",
    featured: false,
    order: 7,
  },
];

// Property data (references developers and communities)
const properties = [
  {
    _type: "property",
    _id: "property-address-residences",
    title: "The Address Residences",
    slug: { _type: "slug", current: "the-address-residences" },
    location: "Downtown Dubai",
    price: 5500000,
    priceDisplay: "AED 5,500,000",
    developer: { _type: "reference", _ref: "developer-emaar" },
    community: { _type: "reference", _ref: "community-downtown-dubai" },
    bedrooms: "2-4 Bedrooms",
    size: "2,400 - 4,800 sq.ft",
    status: "available",
    propertyType: "apartment",
    goldenVisaEligible: true,
    featured: true,
    description: "Luxurious residences in the heart of Downtown Dubai with stunning views of Burj Khalifa.",
  },
  {
    _type: "property",
    _id: "property-one-palm-jumeirah",
    title: "One at Palm Jumeirah",
    slug: { _type: "slug", current: "one-at-palm-jumeirah" },
    location: "Palm Jumeirah",
    price: 12000000,
    priceDisplay: "AED 12,000,000",
    developer: { _type: "reference", _ref: "developer-nakheel" },
    community: { _type: "reference", _ref: "community-palm-jumeirah" },
    bedrooms: "3-5 Bedrooms",
    size: "4,200 - 8,500 sq.ft",
    status: "available",
    propertyType: "penthouse",
    goldenVisaEligible: true,
    featured: true,
    description: "Exclusive penthouses on the iconic Palm Jumeirah with panoramic sea views.",
  },
  {
    _type: "property",
    _id: "property-sobha-hartland-villas",
    title: "Sobha Hartland Villas",
    slug: { _type: "slug", current: "sobha-hartland-villas" },
    location: "Mohammed Bin Rashid City",
    price: 8200000,
    priceDisplay: "AED 8,200,000",
    developer: { _type: "reference", _ref: "developer-sobha" },
    community: { _type: "reference", _ref: "community-mbr-city" },
    bedrooms: "4-6 Bedrooms",
    size: "5,800 - 12,000 sq.ft",
    status: "available",
    propertyType: "villa",
    goldenVisaEligible: true,
    featured: true,
    description: "Premium villas with exceptional craftsmanship in a lush green community.",
  },
  {
    _type: "property",
    _id: "property-damac-bay-cavalli",
    title: "Damac Bay by Cavalli",
    slug: { _type: "slug", current: "damac-bay-by-cavalli" },
    location: "Dubai Harbour",
    price: 3800000,
    priceDisplay: "AED 3,800,000",
    developer: { _type: "reference", _ref: "developer-damac" },
    community: { _type: "reference", _ref: "community-dubai-harbour" },
    bedrooms: "1-3 Bedrooms",
    size: "1,200 - 3,500 sq.ft",
    status: "available",
    propertyType: "branded",
    goldenVisaEligible: true,
    featured: false,
    description: "Branded residences designed by Roberto Cavalli with stunning marina views.",
  },
  {
    _type: "property",
    _id: "property-creek-harbour-residences",
    title: "Creek Harbour Residences",
    slug: { _type: "slug", current: "creek-harbour-residences" },
    location: "Dubai Creek Harbour",
    price: 4200000,
    priceDisplay: "AED 4,200,000",
    developer: { _type: "reference", _ref: "developer-emaar" },
    community: { _type: "reference", _ref: "community-dubai-creek-harbour" },
    bedrooms: "2-3 Bedrooms",
    size: "1,800 - 3,200 sq.ft",
    status: "available",
    propertyType: "apartment",
    goldenVisaEligible: true,
    featured: false,
    description: "Modern waterfront living with views of Dubai Creek Tower.",
  },
  {
    _type: "property",
    _id: "property-palm-signature-villas",
    title: "Palm Jumeirah Signature Villas",
    slug: { _type: "slug", current: "palm-jumeirah-signature-villas" },
    location: "Palm Jumeirah",
    price: 35000000,
    priceDisplay: "AED 35,000,000",
    developer: { _type: "reference", _ref: "developer-nakheel" },
    community: { _type: "reference", _ref: "community-palm-jumeirah" },
    bedrooms: "5-7 Bedrooms",
    size: "12,000 - 25,000 sq.ft",
    status: "available",
    propertyType: "villa",
    goldenVisaEligible: true,
    featured: false,
    description: "Ultra-luxury beachfront villas on the Palm Jumeirah.",
  },
];

async function seedData() {
  console.log("🌱 Starting Sanity seed...\n");

  try {
    // Seed developers
    console.log("📦 Seeding developers...");
    for (const developer of developers) {
      await client.createOrReplace(developer);
      console.log(`  ✓ ${developer.name}`);
    }
    console.log(`  Done! ${developers.length} developers seeded.\n`);

    // Seed communities
    console.log("🏘️ Seeding communities...");
    for (const community of communities) {
      await client.createOrReplace(community);
      console.log(`  ✓ ${community.name}`);
    }
    console.log(`  Done! ${communities.length} communities seeded.\n`);

    // Seed properties
    console.log("🏠 Seeding properties...");
    for (const property of properties) {
      await client.createOrReplace(property);
      console.log(`  ✓ ${property.title}`);
    }
    console.log(`  Done! ${properties.length} properties seeded.\n`);

    console.log("✅ Seed completed successfully!");
    console.log("\n📝 Note: Images need to be uploaded manually through Sanity Studio.");
    console.log("   Visit /studio to add images to your content.\n");
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }
}

// Run seed
seedData();


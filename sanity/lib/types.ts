// TypeScript types for Sanity data

export interface Property {
  _id: string;
  title: string;
  slug: string;
  location: string;
  price?: number;
  priceDisplay: string;
  image: string;
  images?: string[];
  developer: string | DeveloperReference;
  community?: CommunityReference;
  bedrooms?: string;
  size?: string;
  goldenVisaEligible: boolean;
  status: "available" | "sold" | "off-plan";
  propertyType?: "apartment" | "villa" | "penthouse" | "townhouse" | "branded";
  description?: string;
}

export interface DeveloperReference {
  name: string;
  slug: string;
  logo?: string;
}

export interface CommunityReference {
  name: string;
  slug: string;
}

export interface Developer {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
  tagline?: string;
  image?: string;
  description?: string;
  projects?: string[];
  established?: string;
  highlight?: string;
  propertyCount?: number;
  properties?: Property[];
}

export interface Community {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  avgRoi?: string;
  propertyCount?: number;
  properties?: Property[];
}

export interface PropertyCounts {
  total: number;
  apartments: number;
  villas: number;
  branded: number;
  offplan: number;
}


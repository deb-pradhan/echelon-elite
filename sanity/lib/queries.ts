// GROQ queries for fetching data from Sanity

// Featured properties for homepage
export const featuredPropertiesQuery = `
  *[_type == "property" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    location,
    priceDisplay,
    "image": images[0].asset->url,
    "developer": developer->name,
    bedrooms,
    size,
    goldenVisaEligible,
    status
  }
`;

// All properties for the properties page
export const allPropertiesQuery = `
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    priceDisplay,
    "image": images[0].asset->url,
    "developer": developer->name,
    bedrooms,
    size,
    goldenVisaEligible,
    status,
    propertyType
  }
`;

// Single property by slug
export const propertyBySlugQuery = `
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    location,
    price,
    priceDisplay,
    "images": images[].asset->url,
    "developer": developer->{
      name,
      "slug": slug.current,
      logo
    },
    "community": community->{
      name,
      "slug": slug.current
    },
    bedrooms,
    size,
    goldenVisaEligible,
    status,
    propertyType,
    description
  }
`;

// All developers
export const developersQuery = `
  *[_type == "developer"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    logo,
    tagline,
    "image": image.asset->url,
    description,
    projects,
    established,
    highlight,
    "propertyCount": count(*[_type == "property" && references(^._id)])
  }
`;

// Single developer by slug
export const developerBySlugQuery = `
  *[_type == "developer" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    logo,
    tagline,
    "image": image.asset->url,
    description,
    projects,
    established,
    highlight,
    "properties": *[_type == "property" && references(^._id)] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      location,
      priceDisplay,
      "image": images[0].asset->url,
      bedrooms,
      size,
      goldenVisaEligible,
      status
    }
  }
`;

// Featured communities for homepage
export const featuredCommunitiesQuery = `
  *[_type == "community" && featured == true] | order(order asc, name asc)[0...4] {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    avgRoi,
    "propertyCount": count(*[_type == "property" && references(^._id)])
  }
`;

// All communities
export const allCommunitiesQuery = `
  *[_type == "community"] | order(order asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    avgRoi,
    "propertyCount": count(*[_type == "property" && references(^._id)])
  }
`;

// Single community by slug
export const communityBySlugQuery = `
  *[_type == "community" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    avgRoi,
    "properties": *[_type == "property" && references(^._id)] | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      location,
      priceDisplay,
      "image": images[0].asset->url,
      "developer": developer->name,
      bedrooms,
      size,
      goldenVisaEligible,
      status
    }
  }
`;

// Property counts by type (for filters)
export const propertyCountsQuery = `
  {
    "total": count(*[_type == "property"]),
    "apartments": count(*[_type == "property" && propertyType == "apartment"]),
    "villas": count(*[_type == "property" && propertyType == "villa"]),
    "branded": count(*[_type == "property" && propertyType == "branded"]),
    "offplan": count(*[_type == "property" && status == "off-plan"])
  }
`;


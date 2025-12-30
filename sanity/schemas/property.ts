import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g., Downtown Dubai, Palm Jumeirah",
    }),
    defineField({
      name: "price",
      title: "Price (AED)",
      type: "number",
      description: "Numeric price for sorting/filtering",
    }),
    defineField({
      name: "priceDisplay",
      title: "Price Display",
      type: "string",
      description: 'Formatted price e.g., "AED 5,500,000"',
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "developer",
      title: "Developer",
      type: "reference",
      to: [{ type: "developer" }],
    }),
    defineField({
      name: "community",
      title: "Community",
      type: "reference",
      to: [{ type: "community" }],
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "string",
      description: 'e.g., "2-4 Bedrooms"',
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      description: 'e.g., "2,400 - 4,800 sq.ft"',
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
          { title: "Off-Plan", value: "off-plan" },
        ],
      },
      initialValue: "available",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "apartment" },
          { title: "Villa", value: "villa" },
          { title: "Penthouse", value: "penthouse" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Branded Residence", value: "branded" },
        ],
      },
    }),
    defineField({
      name: "goldenVisaEligible",
      title: "Golden Visa Eligible",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
      developer: "developer.name",
      location: "location",
    },
    prepare({ title, media, developer, location }) {
      return {
        title,
        subtitle: `${developer || "No developer"} • ${location || "No location"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Price, High to Low",
      name: "priceDesc",
      by: [{ field: "price", direction: "desc" }],
    },
    {
      title: "Price, Low to High",
      name: "priceAsc",
      by: [{ field: "price", direction: "asc" }],
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});


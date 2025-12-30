import { defineField, defineType } from "sanity";

export default defineType({
  name: "developer",
  title: "Developer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo Display Text",
      type: "string",
      description: "Short text for logo display (e.g., EMAAR, SOBHA)",
    }),
    defineField({
      name: "logoImage",
      title: "Logo Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'e.g., "Creating Iconic Destinations"',
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "projects",
      title: "Key Projects",
      type: "array",
      of: [{ type: "string" }],
      description: "List of notable projects",
    }),
    defineField({
      name: "established",
      title: "Established Year",
      type: "string",
    }),
    defineField({
      name: "highlight",
      title: "Key Highlight",
      type: "string",
      description: 'e.g., "World\'s Tallest Tower - Burj Khalifa"',
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logoImage",
    },
  },
  orderings: [
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});


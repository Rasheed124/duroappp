import { defineField, defineType } from "sanity";

export default defineType({
  name: "productMarketing",
  title: "Product Marketing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
    }),

    defineField({
      name: "text",
      title: "Product Heading",
      type: "string",
    }),

    defineField({
      name: "content",
      title: "Product Content",
      type: "text",
    }),

    defineField({
      name: "strategies",
      title: "Strategies",
      type: "array",
      of: [{ name: "strategy", type: "string", title: "Add Strategy" }],
    }),

    defineField({
      name: "slug",
      title: "Button Link",
      type: "slug",
    }),

    defineField({
      name: "slugtitle",
      title: "Button Title",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Product Banner Image",
      type: "image",

      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "video",
      title: "Video Link",
      type: "slug",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "project-award",
  title: "Project Award",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Award Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Award Description",
      type: "text",
    }),

    defineField({
      name: "slug",
      title: "Award link",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Award Image",
      type: "image",
      options: {
        hotspot: true,
      },

      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
  ],
});

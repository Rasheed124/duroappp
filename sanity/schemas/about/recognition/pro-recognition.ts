import { defineField, defineType } from "sanity";

export default defineType({
  name: "project-recognition",
  title: "Project Recognition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Recognition Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Recognition Description",
      type: "text",
    }),

    defineField({
      name: "slug",
      title: "Recognition link",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Recognition Image",
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

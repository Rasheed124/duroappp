import { defineField, defineType } from 'sanity'

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "storyText",
      title: "Story",
      type: "array",
      of: [{ name: "story", type: "text", title: "Add Story" }],
    }),

    defineField({
      name: "image",
      title: "Image",
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

    defineField({
      name: "heading",
      title: "Company Title",
      type: "string",
    }),

    defineField({
      name: "companys",
      title: "Company",
      type: "array",
      of: [{ type: "reference", to: { type: "company" } }],
    }),

    defineField({
      name: "resume",
      title: "Resume File",
      type: "file",
    }),
  ],
});
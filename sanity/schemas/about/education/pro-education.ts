import { defineField, defineType } from "sanity";

export default defineType({
  name: "project-education",
  title: "Project Education",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Education Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Education Description",
      type: "text",
    }),

    defineField({
      name: "slug",
      title: "Education link",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Education Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "project-certification",
  title: "Project Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Certfication Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Certfication Description",
      type: "text",
    }),

    defineField({
      name: "slug",
      title: "Certfication link",
      type: "url",
    }),

    defineField({
      name: "image",
      title: "Certfication Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

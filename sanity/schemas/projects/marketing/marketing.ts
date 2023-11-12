import { defineField, defineType } from 'sanity'

export default defineType({
  name: "marketWriting",
  title: "Digital Marketing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
    }),

    defineField({
      name: "writings",
      title: "Content Writing",
      type: "array",
      of: [{ type: "reference", to: { type: "marketingPost" } }],
    }),
  ],
});
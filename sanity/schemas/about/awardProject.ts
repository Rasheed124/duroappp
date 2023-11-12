import { defineField, defineType } from 'sanity'

export default defineType({
  name: "awardproject",
  title: "Z-Award Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "subtitle",
      title: "Sub Title",
      type: "text",
    }),

    defineField({
      name: "award",
      title: "Award Project",
      type: "array",
      of: [{ type: "reference", to: { type: "project-award" } }],
    }),
    defineField({
      name: "recognition",
      title: "Recognition Project",
      type: "array",
      of: [{ type: "reference", to: { type: "project-recognition" } }],
    }),
    defineField({
      name: "certfication",
      title: "Certfication Project",
      type: "array",
      of: [{ type: "reference", to: { type: "project-certification" } }],
    }),
    defineField({
      name: "education",
      title: "Education Project",
      type: "array",
      of: [{ type: "reference", to: { type: "project-education" } }],
    }),
  ],
});
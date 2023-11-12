import {defineField, defineType} from 'sanity'

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
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
      name: "tags",
      title: "Tags",
      type: "array",

      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },

      description: "Enter tags in lowercase",
      validation: (Rule) =>
        Rule.max(120).warning(`tags title should be in uppercase.`),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),

    defineField({
      name: "reads",
      title: "Read Time",
      description: "Post Reading Time",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "likes",
      title: "Likes",
      type: "number",
      description: "Number of likes",
      initialValue: 0,
    }),
    defineField({
      name: "comment",
      title: "Comments",
      type: "number",
      description: "Number of Comments",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

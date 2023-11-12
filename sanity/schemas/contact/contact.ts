import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Contact Page Title",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "string",
    }),

    defineField({
      name: "text",
      title: "All Reserved",
      type: "string",
    }),

    defineField({
      name: "mail",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "infoText",
      title: "Info Text",
      type: "array",
      of: [{ name: "address", type: "string", title: "Add Address" }],
    }),

    defineField({
      name: "form",
      title: "Form Info",
      type: "text",
    }),

    defineField({
      name: "socialHandle",
      title: "Social Handles",
      type: "array",
      of: [{ name: "share", type: "url", title: "Add Social Media Handle" }],
    }),

    defineField({
      name: "marquee",
      title: "Marquee Text",
      type: "array",
      of: [{ name: "marqueText", type: "text", title: "Add Marquee Text" }],
    }),

    defineField({
      name: "userEmails",
      title: "Emails That Subscribe",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "homeBannerAddress",
      title: "Home Banner Address",
      type: "string",
    }),
    defineField({
      name: "homeBannerSkills",
      title: "Home Banner Skills",
      type: "string",
    }),
    defineField({
      name: "homeBannerHandleText",
      title: "Home Banner Handle Text",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Home Banner Handle",
      type: "slug",
    }),

    defineField({
      name: "image",
      title: "home Banner Image",
      type: "image",

      options: {
        hotspot: true,
      },
    }),
  ],
});

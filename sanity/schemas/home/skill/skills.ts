import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'subHeading',
            title: 'Sub Heading',
            type: 'string',
        }),
       defineField({
            name: 'skillsDetails',
            title: 'Skill Details',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill' } }],
        }),
      
    ],
})

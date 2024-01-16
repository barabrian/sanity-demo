import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

export default defineType({
  name: 'event-highlights',
  title: 'Event highlights',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'categories' } as const],
        }),
      ],
    }),
  ],
})

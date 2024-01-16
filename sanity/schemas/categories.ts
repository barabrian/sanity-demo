import { defineArrayMember, defineField, defineType } from '@sanity-typed/types'

export default defineType({
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'tix',
      title: 'Tix',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'tix',
        }),
      ],
    }),
  ],
})

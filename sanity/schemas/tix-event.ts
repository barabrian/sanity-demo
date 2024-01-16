import { defineField, defineType } from '@sanity-typed/types'
import Tix from '../cmp/tix'

export default defineType({
  title: 'Tix',
  name: 'tix',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineType({
      title: 'Featured',
      name: 'featured',
      type: 'string',
    }),
  ],
  components: {
    input: Tix,
  },
  preview: {
    select: {
      title: 'name',
      imageUrl: 'featured',
    },
  },
})

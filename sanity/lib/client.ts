//import { createClient } from 'next-sanity'
import { createClient } from '@sanity-typed/client'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { SanityValues } from '../../sanity.config'

//export const client = createClient({
export const client = createClient<SanityValues>()({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

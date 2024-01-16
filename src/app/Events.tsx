import EventHighlights from '@/cmp/EventHighlights'
import { client } from '../../sanity/lib/client'

async function Events() {
  const data = await client.fetch(`*[_type == "event-highlights"]{
    _id,
    title,
    categories[]->{
      category,
      tix
    }
  }`)
  console.log(JSON.stringify(data, null, 2))
  return (
    <EventHighlights
      title={data[0].title ?? ''}
      categories={data[0].categories ?? []}
    />
  )
}

export default Events

import categories from './schemas/categories'
import EventHighlights from './schemas/event-highlights'
import TixEvent from './schemas/tix-event'

export const schema = {
  types: [categories, EventHighlights, TixEvent],
}

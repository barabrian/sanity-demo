'use client'
import React, { useState } from 'react'
import cn from 'classnames'

import ImageSlider from './ImageSlider'
import FilterBar from './FilterBar'

export interface EventHighlightsProps {
  className?: string
  title?: string
  categories?: {
    category: string | null
    tix: { name: string; featured: string }[] | null
  }[]
}
export const EventHighlights = ({
  className,
  title,
  categories,
}: EventHighlightsProps) => {
  console.log(categories)

  const [activeSlide, setActiveSlide] = useState(0)
  const activeCategory = categories?.[activeSlide ?? 0]
  return (
    <div className={cn('relative w-full', className)}>
      <FilterBar
        className="sticky top-0 z-10 text-pink-500 "
        title={title ?? ''}
        onChange={(condition) => {
          setActiveSlide(condition)
        }}
        filters={
          categories?.map((category, idx) => ({
            title: category.category ?? '',
            condition: idx,
          })) ?? []
        }
      />
      <ImageSlider
        className="pb-40 pt-16 md:pt-28"
        cards={(activeCategory?.tix ?? []).map((date) => ({
          title: date.name || '',
          image: date.featured || '',
          subtitle: '',
          href: '',
        }))}
      />
    </div>
  )
}

export default EventHighlights

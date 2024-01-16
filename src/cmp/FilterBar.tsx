'use client'
import React, { useState } from 'react'
import cn from 'classnames'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface FilterBarProps {
  /**
   * Title of the filter bar, on the far left.
   */
  title: string
  /**
   * List of filter types. Rendered from the right side of the screen towards the title.
   */
  filters: FilterType[]
  className?: string
  /**
   * Handler for when a filter is clicked, typically to filter the data below.
   */
  onChange?: (condition: number) => void
  /**
   * Initial filter, optional.
   */
  startAt?: string
}

type FilterType = {
  /**
   * Name of the filter.
   */
  title: string
  /**
   * The condition this filter will satisfy when clicked.
   */
  condition: number
  /**
   * Will render link if is set
   */
  href?: string
}

export const FilterBar = ({
  title,
  filters,
  className = '',
  onChange,
  startAt,
}: FilterBarProps) => {
  const [selected, setSelected] = useState(startAt ?? filters[0].condition)
  const handleSelection = ({ condition }: Pick<FilterType, 'condition'>) => {
    setSelected(condition)
    if (onChange) {
      onChange(condition)
    }
  }
  const lineVariants = {
    visible: { opacity: 1, height: 32 },
    hidden: { opacity: 1, height: 0 },
  }
  return (
    <div
      className={cn(
        'border-t border-current border-opacity-70 flex justify-between w-full',
        className
      )}
    >
      <div className="pl-[2.5rem]">
        <h3 className="antialiased text-h3-m lg:text-h3 mt-7 font-heavy">
          {title}
        </h3>
      </div>
      <div className="flex pb-2 pr-10 overflow-x-auto no-scrollbar">
        {filters.map(({ title, condition, href }) => (
          <div className="flex flex-col items-center ml-7" key={condition}>
            <div className="w-px h-8">
              <motion.div
                animate={condition === selected ? 'visible' : 'hidden'}
                variants={lineVariants}
                transition={{ type: 'tween', duration: 0.4 }}
                className="w-full bg-current bg-opacity-70"
              />
            </div>
            {href ? (
              <Link href={href} className={cn('whitespace-nowrap py-2 px-3')}>
                {title}
              </Link>
            ) : (
              <button
                className={cn(
                  'whitespace-nowrap  py-2 px-3 transition-shadow focus:outline-none',
                  {
                    'ring-1 ring-opacity-70 ring-current font-bold':
                      condition === selected,
                  }
                )}
                onClick={() => handleSelection({ condition })}
              >
                {/* this is used to fill up width with a bold text so the content wont just when active element gets bolded */}
                <span className="invisible block h-0 font-bold">{title}</span>
                {title}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterBar

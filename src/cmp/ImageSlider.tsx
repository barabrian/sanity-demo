'use client'

import React, { forwardRef, useState, useEffect } from 'react'
import { CarouselProvider } from 'pure-react-carousel'
import { CardProps } from './Card'
import Carousel from './Carousel'
export interface ImageSliderProps {
  cardWidth?: number
  cards: CardProps[]
  className?: string
}

const DEFAULT_STEP = 2.5

export const ImageSlider = forwardRef<HTMLDivElement, ImageSliderProps>(
  ({ cards, cardWidth = 350, className = '' }, ref) => {
    const { width } = useWindowSize()

    const visibleSlideCount = width ? Math.round(width / cardWidth) : 5
    const isSlideable = cards.length - 1 > visibleSlideCount
    const fractionOfNextSlide = visibleSlideCount <= 2 ? 6 : 1
    const VisiableSlides = Number(`${visibleSlideCount}.${fractionOfNextSlide}`)

    return (
      <CarouselProvider
        step={DEFAULT_STEP}
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        visibleSlides={VisiableSlides}
        totalSlides={cards.length}
        orientation="horizontal"
        lockOnWindowScroll
        className={className}
        dragStep={VisiableSlides > 2 ? DEFAULT_STEP : 1.5}
      >
        <Carousel
          cards={cards}
          isSlideable={isSlideable}
          visibleSlideCount={visibleSlideCount}
          ref={ref}
        />
      </CarouselProvider>
    )
  }
)

export default ImageSlider

interface Windowsize {
  width: number | undefined
  height: number | undefined
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<Windowsize>({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { width: windowSize.width, height: windowSize.height }
}

export { useWindowSize }

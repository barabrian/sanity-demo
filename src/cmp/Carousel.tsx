'use client'

import React, { useEffect, useContext, useState, forwardRef } from 'react'
import cn from 'classnames'
import {
  CarouselContext,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import Card, { CardProps } from './Card'

export interface CarouselProps {
  cards: CardProps[]
  isSlideable: boolean
  visibleSlideCount: number
  className?: string
}

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ cards, isSlideable, visibleSlideCount, className = '' }, ref) => {
    const carouselContext = useContext(CarouselContext)
    const [currentSlide, setCurrentSlide] = useState(
      carouselContext.state.currentSlide
    )

    useEffect(() => {
      const onChange = () => {
        setCurrentSlide(carouselContext.state.currentSlide)
      }
      carouselContext.subscribe(onChange)
      return () => carouselContext.unsubscribe(onChange)
    }, [carouselContext])

    return (
      <div
        ref={ref}
        className={cn('relative m-auto overflow-hidden group', className)}
      >
        <ButtonBack
          className={cn(
            'z-10 absolute left-0 transform focus:outline-none w-1/6 h-full bg-gradient-radial invisible',
            {
              'md:visible': currentSlide !== 0,
            }
          )}
        >
          <Arrow className="relative transform opacity-70 left-5" />
        </ButtonBack>

        <ButtonNext
          className={cn(
            'z-10 absolute right-0 transform rotate-180 focus:outline-none w-1/6 h-full bg-gradient-radial invisible',
            {
              'md:visible':
                Math.ceil(currentSlide) <
                  carouselContext.state.totalSlides - visibleSlideCount &&
                isSlideable,
            }
          )}
        >
          <Arrow className="relative transform opacity-70 left-5" />
        </ButtonNext>
        <Slider
          classNameTray="flex px-4 pl-[2.5rem]"
          classNameAnimation="transition-transform ease-in-out duration-500"
          moveThreshold={0.2}
        >
          {cards.map((card, idx) => (
            <Slide className="px-2" key={idx} index={idx}>
              <Card {...card} variant={idx % 2 ? 1 : 0} />
            </Slide>
          ))}
        </Slider>
      </div>
    )
  }
)

export default Carousel

function Arrow({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="59"
      fill="none"
      viewBox="0 0 72 59"
      className={className}
    >
      <path
        fill="url(#paint0_linear)"
        d="M21.45 23.474h50.547v12.05H21.451L44.912 59h-15.82L0 29.5 29.092 0h15.82L21.451 23.474z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="35.998"
          x2="35.998"
          y1="59"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.6"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

import Link from 'next/link'
import React from 'react'
import ImageWindow from './ImageWindow.tsx/ImageWindow'

export interface CardProps {
  /**
   * Title of the entity, displayed directly under image.
   */
  title: string
  /**
   * URL to image of entity.
   */
  image: string
  /**
   * Subtitle displayed under title.
   */
  subtitle?: string
  /**
   * URL that takes the user to a details page. Button clicked is arrow icon on bottom of the card.
   */
  href: string
  /**
   * Determines what variant of a image window will be used to display the card image.
   */
  variant?: 0 | 1
  className?: string
}

export const Card = ({
  title,
  image,
  subtitle,
  href,
  variant = 0,
  className = '',
}: CardProps) => (
  <Link href={href} className={className}>
    <ImageWindow
      img={image}
      variant={variant}
      className={
        variant === 0
          ? 'ml-[-1.5175%] mr-[-3.4225%]'
          : 'ml-[-4.922%] mr-[-0.328]'
      }
    />
    <div className="mt-5 text-current">
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  </Link>
)

export default Card

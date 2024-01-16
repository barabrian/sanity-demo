'use client'

import Variant1 from './windows/Variant1'
import Variant2 from './windows/Variant2'
import Variant3 from './windows/Variant3'

const randomId = () => '_' + Math.random().toString(36).substring(2, 9)

export interface ImageWindowProps {
  img: string
  variant?: 0 | 1 | 2
  className?: string
}

const variants = [Variant1, Variant2, Variant3]

export const ImageWindow = ({
  img,
  variant = 0,
  className = '',
}: ImageWindowProps) =>
  variants[variant]({ href: img, className, id: randomId() })

export default ImageWindow

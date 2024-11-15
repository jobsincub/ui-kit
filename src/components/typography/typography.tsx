import React, { ComponentProps, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type PropsOf<TTag extends ElementType> = ComponentProps<TTag>

export type TypographyProps<TTag extends ElementType> = {
  as?: TTag
  children: ReactNode
  className?: string
  variant?:
    | 'bold14'
    | 'bold16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'medium'
    | 'regular-link'
    | 'regular14'
    | 'regular16'
    | 'small'
    | 'small-link'
    | 'small-semi-bold'
} & PropsOf<TTag>

export const Typography = React.forwardRef<HTMLElement, TypographyProps<ElementType>>(
  ({ as: Component = 'span', children, className, variant = 'regular14', ...rest }, ref) => {
    // Объединяем пользовательские классы и класс варианта
    const combinedClassName = clsx(s[variant], className)

    return (
      <Component className={combinedClassName} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

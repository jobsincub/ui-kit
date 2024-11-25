import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type Variant =
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

export type Color = 'accent' | 'danger' | 'dark' | 'light' | 'success' | 'warning'

export type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  children: ReactNode
  className?: string
  color?: Color
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = React.forwardRef(
  <T extends ElementType = 'span'>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>,
    ref?: ComponentPropsWithRef<T>['ref']
  ) => {
    const {
      as: Component = 'span',
      children,
      className,
      color,
      variant = 'regular14',
      ...rest
    } = props

    const classNames = clsx(s[variant], color && s[color], className)

    return (
      <Component className={classNames} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

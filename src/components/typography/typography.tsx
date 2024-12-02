import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
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

type Props = {
  asChild?: boolean
  color?: Color
  variant?: Variant
} & ComponentPropsWithoutRef<'span'>

export const Typography = forwardRef<HTMLSpanElement, Props>(
  ({ asChild = false, className, color, variant = 'regular14', ...props }, ref) => {
    const Comp = asChild ? Slot : 'span'

    return <Comp className={clsx(s[variant], color && s[color], className)} ref={ref} {...props} />
  }
)

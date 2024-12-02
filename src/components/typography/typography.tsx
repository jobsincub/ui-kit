import type { Align, Color, Variant } from './types'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './typography.module.scss'

type Props = {
  align?: Align
  asChild?: boolean
  color?: Color
  variant?: Variant
} & ComponentPropsWithoutRef<'span'>

export const Typography = forwardRef<HTMLSpanElement, Props>(
  (
    {
      align = 'inherit',
      asChild = false,
      className,
      color = 'light-100',
      variant = 'regular14',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'span'

    return (
      <Comp
        className={clsx(
          s[variant],
          color && s[`color-${color}`],
          align && s[`text-align-${align}`],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

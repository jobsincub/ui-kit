import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

import s from './button.module.scss'

export const buttonVariant = ['icon', 'link', 'primary', 'secondary', 'tertiary'] as const

export type ButtonVariant = (typeof buttonVariant)[number]

type Props = {
  asChild?: boolean
  fullWidth?: boolean
  icon?: string
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ asChild = false, className, fullWidth, icon, variant = 'primary', ...rest }, ref) => {
    const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className)

    const Comp = asChild ? Slot : 'button'

    return <Comp className={classNames} data-icon={icon} ref={ref} {...rest}></Comp>
  }
)

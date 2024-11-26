import React from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    const classNames = clsx(s.input, className)

    return <input className={classNames} ref={ref} {...props} />
  }
)

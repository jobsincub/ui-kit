import React from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = React.ComponentProps<'input'> & {
  error?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, error, id, label, ...rest } = props
  const classNames = clsx(s.input, className)

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={classNames} ref={ref} {...rest} />
      {error && <span>{error}</span>}
    </div>
  )
})

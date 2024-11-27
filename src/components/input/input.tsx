import React from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import SearchIcon from '../../assets/icons/components/common/search'

export type InputProps = React.ComponentProps<'input'> & {
  error?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, error, id, label, type, ...rest } = props
  const classNames = clsx(s.input, className)
  const isSearchType = type === 'search'

  return (
    <div>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div>
        {isSearchType && <SearchIcon />}
        <input className={classNames} id={id} ref={ref} type={type} {...rest} />
      </div>
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  )
})

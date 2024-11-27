import React, { useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import EyeIcon from '../../assets/icons/components/common/eye'
import EyeOffIcon from '../../assets/icons/components/common/eye-off'
import SearchIcon from '../../assets/icons/components/common/search'

export type InputProps = React.ComponentProps<'input'> & {
  error?: string
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, error, id, label, type, ...rest } = props
  const classNames = clsx(s.input, className)
  const isSearchType = type === 'search'
  const isPasswordType = type === 'password'
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <label className={s.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={s.inputWrapper}>
        {isSearchType && <SearchIcon className={s.searchIcon} />}
        <input
          className={classNames}
          id={id}
          ref={ref}
          type={isPasswordType && isPasswordVisible ? 'text' : type}
          {...rest}
        />
        {isPasswordType && (
          <button className={s.eyeButton} onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
      {error && <span className={s.errorText}>{error}</span>}
    </div>
  )
})

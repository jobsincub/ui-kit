import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './textarea.module.scss'

type TextareaType = {
  disabled?: boolean
  error?: boolean
  errorText?: string
  labelText?: string
  placeholder?: string
  value?: string
  variant?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaType>(
  (
    {
      className,
      disabled,
      error,
      errorText,
      labelText,
      onChange,
      placeholder,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const classNames = clsx(s.textarea, error && s.error, className)

    return (
      <div className={s.container}>
        <label className={`${s.labelTextArea} ${disabled ? s.disabledLabel : ''}`}>
          {labelText}
        </label>
        <textarea
          className={classNames}
          data-variant={variant}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          value={value}
          {...rest}
        />
        {error ? <label className={s.errorText}> {errorText} </label> : ''}
      </div>
    )
  }
)

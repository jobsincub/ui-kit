import { ComponentPropsWithoutRef } from 'react'

import s from './textarea.module.scss'

type TextareaType = {
  disabled?: boolean
  error?: boolean
  errorText?: string
  labelText?: string
  onChange?: (value: string) => void
  placeholder?: string
  value?: string
  variant?: string
} & ComponentPropsWithoutRef<'textarea'>

export const Textarea = ({
  disabled,
  error,
  errorText,
  labelText,
  onChange,
  placeholder,
  value,
  variant,
  ...rest
}: TextareaType) => {
  return (
    <div className={s.container}>
      <label className={`${s.labelTextArea} ${disabled ? s.disabledLabel : ''}`}>{labelText}</label>
      <textarea
        className={`${s.textarea} ${error ? s.error : ''}`}
        data-variant={variant}
        disabled={disabled}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {error ? <label className={s.errorText}> {errorText} </label> : ''}
    </div>
  )
}

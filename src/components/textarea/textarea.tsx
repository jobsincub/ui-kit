import s from './textarea.module.scss'

type TextareaType = {
  disabled?: boolean
  error?: boolean
  errorText?: string
  labelText?: string
  placeholder?: string
  variant?: string
}

export const Textarea = ({
  disabled,
  error,
  errorText,
  labelText,
  placeholder,
  variant,
}: TextareaType) => {
  return (
    <div className={s.container}>
      <label className={`${s.labelTextArea} ${disabled ? s.disabledLabel : ''}`}>{labelText}</label>
      <textarea
        className={`${s.textarea} ${error ? s.error : ''}`}
        data-variant={variant}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error ? <label className={s.errorText}> {errorText} </label> : ''}
    </div>
  )
}

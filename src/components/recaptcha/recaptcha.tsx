import React from 'react'
import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

export type RecaptchaProps = ReCAPTCHAProps & {
  error?: string
}

export const Recaptcha = React.forwardRef<ReCAPTCHAComponent, RecaptchaProps>((props, ref) => {
  const { className, error, theme = 'dark', ...rest } = props
  const classNames = clsx(s.recaptcha, className)

  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHAComponent className={classNames} ref={ref} theme={theme} {...rest} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
})

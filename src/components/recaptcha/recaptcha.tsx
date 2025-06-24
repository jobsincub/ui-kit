import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type RecaptchaProps = ReCAPTCHAProps & {
  error?: string
}

export const Recaptcha = ({ className, error, theme = 'dark', ...rest }: RecaptchaProps) => {
  const classNames = clsx(s.recaptcha, className)

  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHAComponent className={classNames} theme={theme} {...rest} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

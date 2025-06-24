import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type RecaptchaProps = ReCAPTCHAProps & {
  error?: string
}

export const Recaptcha = ({ error, theme = 'dark', ...rest }: RecaptchaProps) => {
  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHAComponent theme={theme} {...rest} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

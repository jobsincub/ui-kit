import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type RecaptchaProps = {
  error?: string
  language?: string
} & ReCAPTCHAProps

export const Recaptcha = ({ error, language = 'en', onChange, sitekey }: RecaptchaProps) => {
  const verifyHandeler = (token: null | string) => {
    onChange?.(token)
  }

  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHAComponent
        hl={language}
        onChange={verifyHandeler}
        sitekey={sitekey}
        theme={'dark'}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

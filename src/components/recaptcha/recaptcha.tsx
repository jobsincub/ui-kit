import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type RecaptchaProps = ReCAPTCHAProps & {
  error?: string
}

export const Recaptcha = ({ error, hl = 'en', onChange, sitekey }: RecaptchaProps) => {
  const verifyHandeler = (token: null | string) => {
    onChange?.(token)
  }

  return (
    <div className={clsx(error && s.errorBox)}>
      <ReCAPTCHAComponent hl={hl} onChange={verifyHandeler} sitekey={sitekey} theme={'dark'} />
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

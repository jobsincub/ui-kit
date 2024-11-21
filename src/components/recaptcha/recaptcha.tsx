import { ReCAPTCHA, ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type Props = {
  error?: boolean
  language: string
} & ReCAPTCHAProps

export const Recaptcha = ({ className, error, language = 'en', sitekey, theme }: Props) => {
  return (
    <div className={clsx(error && s.errorBox, className)}>
      <ReCAPTCHA hl={language} sitekey={sitekey} theme={theme} />
      {error && <div className={s.error}> Please verify that you are not a robot</div>}
    </div>
  )
}

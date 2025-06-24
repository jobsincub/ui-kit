import ReCAPTCHAComponent, { ReCAPTCHAProps } from 'react-google-recaptcha'

import clsx from 'clsx'

import s from './recaptcha.module.scss'

type Props = {
  isError?: boolean
  language?: string
} & ReCAPTCHAProps

export const Recaptcha = ({ isError, language = 'en', onChange, sitekey }: Props) => {
  const verifyHandeler = (token: null | string) => {
    onChange?.(token)
  }

  return (
    <div className={clsx(isError && s.errorBox)}>
      <ReCAPTCHAComponent
        hl={language}
        onChange={verifyHandeler}
        sitekey={sitekey}
        theme={'dark'}
      />
      {isError && <div className={s.error}> Please verify that you are not a robot</div>}
    </div>
  )
}

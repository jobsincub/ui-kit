import s from './erorrMessage.module.scss'

type errorMessageType = {
  mode: 'range' | 'single'
}

export const ErrorMessage = ({ mode }: errorMessageType) => {
  return mode === 'single' ? (
    <span className={s.error}>Error!</span>
  ) : (
    <span className={s.error}>Error, select current month or last month</span>
  )
}

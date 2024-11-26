import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { clsx } from 'clsx'

import s from './alert.module.scss'

import closeIcon from './close.svg'

export type AlertType = {
  message: string
  type: string
}

export const Alert = ({ message, type }: AlertType) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button style={{ color: 'black' }}>
          {type === 'error' ? 'Show Error' : 'Show Completed'}
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Content
          className={clsx(s.alert_content, {
            [s.alert_content_completed]: type === 'completed',
            [s.alert_content_error]: type === 'error',
          })}
        >
          <AlertDialog.Description asChild>
            <p className={s.description}>{message}</p>
          </AlertDialog.Description>
          <AlertDialog.Action asChild>
            <button className={s.reset_button}>
              <img alt={'close'} src={closeIcon} />
            </button>
          </AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

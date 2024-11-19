import type { DateRange } from 'react-day-picker'

import type { ComponentPropsWithoutRef } from 'react'

import s from './dateFormatter.module.scss'

import { CalendarIcon } from '../date'
import { formatter } from './utils'

type DateFormatterProps = { date: Date | DateRange | undefined } & ComponentPropsWithoutRef<'span'>

export const DateFormatter = ({ date, ...restProps }: DateFormatterProps) => {
  const render = () => {
    if (!date) {
      return <span {...restProps}>Pick a date</span>
    }

    if (date instanceof Date) {
      return <span className={s.date}>{formatter(date)}</span>
    }

    if ('from' in date && 'to' in date) {
      return (
        <span className={s.wrapper}>
          {date.from && date.to && (
            <span className={s.data_wrapper}>
              <span className={s.date}>{formatter(date.from)}</span>
              <span className={s.dash}> - </span>
              <span className={s.date}>{formatter(date.to)}</span>
            </span>
          )}
        </span>
      )
    }
  }

  return (
    <span className={s.wrapper}>
      {render()}
      <CalendarIcon />
    </span>
  )
}

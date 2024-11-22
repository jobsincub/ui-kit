import type { PropsRangeRequired, PropsSingleRequired } from 'react-day-picker'

import { useState } from 'react'

import s from './datePicker.module.scss'

import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { DateFormatter } from './date'
import { ErrorMessage } from './erorrMessage'

type DatePickerProps =
  | Pick<PropsRangeRequired, 'mode' | 'onSelect' | 'selected'>
  | Pick<PropsSingleRequired, 'mode' | 'onSelect' | 'selected'>

export const DatePicker = (props: DatePickerProps) => {
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

  const className = `${s.button} ${active ? s.button_active : ''} ${
    props.mode === 'single' ? s.single : s.range
  } ${error && s.button_error}`

  const selectHandler = (selectedDate: Date) => {
    if (!selectedDate) {
      return
    }

    const today = new Date()
    const currentMonth = today.getMonth()
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const selectedMonth = selectedDate.getMonth()
    const selectedYear = selectedDate.getFullYear()

    if (
      selectedYear !== today.getFullYear() &&
      !(selectedYear === today.getFullYear() - 1 && selectedMonth === 11)
    ) {
      setError(true)

      return
    }

    if (selectedMonth !== currentMonth && selectedMonth !== previousMonth) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <Popover onOpenChange={setActive}>
      <div className={s.wrapper}>
        <PopoverTrigger asChild={false} className={className}>
          <DateFormatter className={s.dateFormatter} date={props.selected} error={error} />
        </PopoverTrigger>
        {error && <ErrorMessage mode={props.mode} />}
      </div>
      <PopoverContent align={'start'}>
        <Calendar onDayClick={selectHandler} {...props} required />
      </PopoverContent>
    </Popover>
  )
}

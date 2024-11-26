import type { PropsRangeRequired, PropsSingleRequired } from 'react-day-picker'

import { useState } from 'react'

import { clsx } from 'clsx'

import s from './datePicker.module.scss'

import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { DateFormatter, validateDate } from './date'
import { ErrorMessage } from './erorrMessage'

type SingleModeProps = Pick<PropsSingleRequired, 'mode' | 'onSelect' | 'selected'>
type RangeModeProps = Pick<PropsRangeRequired, 'mode' | 'onSelect' | 'selected'>
type DatePickerProps = { disabled?: boolean } & (RangeModeProps | SingleModeProps)

export const DatePicker = ({ disabled = false, ...props }: DatePickerProps) => {
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)

  const selectHandler = (selectedDate: Date) => {
    setError(!validateDate(selectedDate))
  }

  const className = clsx(s.button, {
    [s.button_active]: active,
    [s.button_disabled]: disabled,
    [s.button_error]: error,
    [s.range]: props.mode === 'range',
    [s.single]: props.mode === 'single',
  })

  return (
    <Popover onOpenChange={setActive}>
      <div className={s.wrapper}>
        <PopoverTrigger asChild={false} className={className} disabled={disabled}>
          <DateFormatter
            className={s.dateFormatter}
            date={props.selected}
            disabled={disabled}
            error={error}
          />
        </PopoverTrigger>
        {error && <ErrorMessage mode={props.mode} />}
      </div>
      <PopoverContent align={'start'}>
        <Calendar onDayClick={selectHandler} {...props} required />
      </PopoverContent>
    </Popover>
  )
}

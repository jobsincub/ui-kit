import type { PropsRangeRequired, PropsSingleRequired } from 'react-day-picker'

import { useState } from 'react'

import s from './datePicker.module.scss'

import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { DateFormatter } from './date'

type DatePickerProps =
  | Pick<PropsRangeRequired, 'mode' | 'onSelect' | 'selected'>
  | Pick<PropsSingleRequired, 'mode' | 'onSelect' | 'selected'>

export const DatePicker = (props: DatePickerProps) => {
  const [active, setActive] = useState(false)

  const className = `${s.button} ${active ? s.button_active : ''} ${
    props.mode === 'single' ? s.single : s.range
  }`

  return (
    <Popover onOpenChange={setActive}>
      <PopoverTrigger>
        <button className={className}>
          <DateFormatter className={s.dateFormatter} date={props.selected} />
        </button>
      </PopoverTrigger>
      <PopoverContent align={'start'}>
        <Calendar {...props} required />
      </PopoverContent>
    </Popover>
  )
}

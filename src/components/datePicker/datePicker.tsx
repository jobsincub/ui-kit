import type { PropsRange, PropsSingle } from 'react-day-picker'

import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

type DatePickerProps =
  | Pick<PropsRange, 'mode' | 'onSelect' | 'selected'>
  | Pick<PropsSingle, 'mode' | 'onSelect' | 'selected'>

export const DatePicker = (props: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button style={{ color: 'black' }}>{'Pick a date'}</button>
      </PopoverTrigger>
      <PopoverContent align={'start'}>
        <Calendar {...props} />
      </PopoverContent>
    </Popover>
  )
}

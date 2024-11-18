import { type ComponentProps } from 'react'
import { DayFlag, DayPicker } from 'react-day-picker'

import 'react-day-picker/style.css'

import s from './calendar.module.scss'

export type CalendarProps = ComponentProps<typeof DayPicker>
export const Calendar = (props: CalendarProps) => {
  return (
    <DayPicker
      {...props}
      className={s.calendar}
      classNames={{
        [DayFlag.outside]: `${s.outside}`,
        [DayFlag.today]: `${s.today}`,
        button_next: `${s.button_next}`,
        button_previous: `${s.button_previous}`,
        caption_label: `${s.caption_label}`,
        chevron: `${s.chevron}`,
        day: `${s.day}`,
        day_button: `${s.day_button}`,
        month_caption: `${s.month_caption}`,
        nav: `${s.nav}`,
        range_end: `${s.range_end}`,
        range_middle: `${s.range_middle}`,
        range_start: `${s.range_start}`,
        selected: `${s.selected}`,
        weekday: `${s.weekday}`,
        weekdays: `${s.weekdays}`,
      }}
      fixedWeeks
      modifiers={{
        weekend: { dayOfWeek: [0, 6] },
      }}
      modifiersClassNames={{
        weekend: s.weekend,
      }}
      showOutsideDays
      weekStartsOn={1}
    />
  )
}

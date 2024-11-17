import { useState } from 'react'
import { DayFlag, DayPicker } from 'react-day-picker'

import 'react-day-picker/style.css'

import s from './calendar.module.scss'

export const Calendar = () => {
  const [selected, setSelected] = useState<Date>()

  return (
    <DayPicker
      className={s.calendar}
      classNames={{
        [DayFlag.focused]: `${s.focused}`,
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
        selected: `${s.selected}`,
        weekday: `${s.weekday}`,
        weekdays: `${s.weekdays}`,
      }}
      fixedWeeks
      mode={'single'}
      modifiers={{
        weekend: { dayOfWeek: [0, 6] },
      }}
      modifiersClassNames={{ weekend: `${s.weekend}` }}
      onSelect={setSelected}
      selected={selected}
      showOutsideDays
      weekStartsOn={1}
    />
  )
}

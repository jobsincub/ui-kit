import type { DateRange } from 'react-day-picker'

import { format } from 'date-fns'

export const checkDate = (date: Date | DateRange | undefined) => {
  if (!date) {
    return false
  }

  if (date instanceof Date) {
    return !isNaN(date.getTime())
  }

  if ('from' in date || 'to' in date) {
    return Boolean(date.from || date.to)
  }

  return false
}

export const formatter = (date: Date) => {
  return format(date, 'dd/MM/yyyy')
}

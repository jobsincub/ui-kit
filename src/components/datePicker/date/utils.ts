import { format } from 'date-fns'

export const validateDate = (selectedDate: Date) => {
  if (!selectedDate) {
    return false
  }

  const today = new Date()
  const currentMonth = today.getMonth()
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
  const selectedMonth = selectedDate.getMonth()
  const selectedYear = selectedDate.getFullYear()

  const isSameOrPreviousYear =
    selectedYear === today.getFullYear() ||
    (selectedYear === today.getFullYear() - 1 && selectedMonth === 11)

  const isValidMonth = selectedMonth === currentMonth || selectedMonth === previousMonth

  return isSameOrPreviousYear && isValidMonth
}

export const formatter = (date: Date) => {
  return format(date, 'dd/MM/yyyy')
}
